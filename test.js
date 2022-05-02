//btn = document.getElementById("botao")
btn = document.getElementsByClassName("botao")[0];
btn_salvar = document.getElementsByClassName("botao")[1];
areaText = document.getElementsByClassName("texto");
form = document.getElementById("formulario");
save = document.getElementsByClassName("salvar")[0]

areaText[0].addEventListener('focus', function(){
    btn.classList.add('arredondar')
});


areaText[0].addEventListener('blur', function(){
    btn.classList.remove('arredondar')
});

btn.addEventListener('click', function(){
    var formData = new FormData();
    codigo = areaText[0].value
    const estadoQuery = document.querySelector(".estado")
    while(estadoQuery.lastElementChild){
        estadoQuery.removeChild(estadoQuery.lastElementChild)
    }
    save.classList.remove('show')
    if(codigo != ""){
        codigo = codigo.toUpperCase();
        formData.append("cod",codigo);
        test = fetch("script.php", { 
            method: 'POST',
        body: formData })
        .then(response => response.json())
        .then(function(data){
            processamento(data)
        })
    }
    
    else{
        var newLi = document.createElement("li");
        newLi.classList.add('step')
        var newH3 = document.createElement("h3");
        var newContent =  document.createTextNode("Objeto não encontrado");
        var estado = document.getElementsByClassName('estado')[0]
        newH3.appendChild(newContent)
        newLi.appendChild(newH3)
        estado.appendChild(newLi)  
    }

});


function processamento(data){
    mensagem = data.objetos[0].mensagem
    if((mensagem == "SRO-019: Objeto inválido") || (mensagem == "SRO-020: Objeto não encontrado na base de dados dos Correios.")){
        var newLi = document.createElement("li");
        newLi.classList.add('step')
        var newH3 = document.createElement("h3");
        var newContent =  document.createTextNode("Objeto não encontrado");
        var estado = document.getElementsByClassName('estado')[0]
        newH3.appendChild(newContent)
        newLi.appendChild(newH3)
        estado.appendChild(newLi)
    }
       
    else{
        
        save.classList.add('show')
        events = data.objetos[0].eventos;
        
        for(i=0;i<events.length;i++){
            var unidades = events[i].unidade
            var newLi = document.createElement("li");
            newLi.classList.add('step')
            var newDiv = document.createElement("div")
            newDiv.classList.add('sub-step')
            var newH3 = document.createElement("h3");
            var unidadeH5 = document.createElement("h5")
            var horaH5 = document.createElement("h5")
            var newImg = document.createElement("img")
            newImg.setAttribute("src", "https://proxyapp.correios.com.br"+events[i].urlIcone)
            var estado = document.getElementsByClassName('estado')[0]
            var descricao =  document.createTextNode(events[i].descricao)
            var cidade = unidades.endereco.cidade
            var uf = unidades.endereco.uf
                
            console.log(unidades.nome)
            if(unidades.nome == undefined){
                if(events[i].descricao == "Objeto em trânsito - por favor aguarde"){
                    var unidade = document.createTextNode("de "+unidades.tipo+" em "+cidade+"/"+uf)
                }
                else{
                    var unidade = document.createTextNode("em "+cidade+"/"+uf)
                } 
            }
            else{
                var unidade = document.createTextNode("em País: "+unidades.nome)
            }
            

            
            
            var hora = document.createTextNode(events[i].dtHrCriado.replace("T", "  "))
            newH3.appendChild(descricao)
            newLi.appendChild(newImg)
            newLi.appendChild(newDiv)
            newDiv.appendChild(newH3)
            estado.appendChild(newLi)
            unidadeH5.appendChild(unidade)
            newDiv.appendChild(unidadeH5)

            try {
                var unidadeDestino = events[i].unidadeDestino
                var newH5 = document.createElement("h5")
                if(events[i].unidadeDestino.nome != undefined){
                    var destino = document.createTextNode("para "+unidadeDestino.nome)
                }
                else{
                    var destino = document.createTextNode("para "+unidadeDestino.tipo+" em "+unidadeDestino.endereco.cidade+"/"+unidadeDestino.endereco.uf)
                }
                newH5.appendChild(destino)
                newDiv.appendChild(newH5)
            } catch (error) {
                
            }

            
            horaH5.appendChild(hora)
            newDiv.appendChild(horaH5)

        }
    }
    }


    btn_salvar.addEventListener("click", function(){
        var nome = document.getElementsByClassName("nome")[0];
        var formData = new FormData();
        formData.append("cod",codigo)
        formData.append("nome", nome.value)

        codigos = fetch("codigos.php",{
            method: "GET"
        }).then(response => response.json())
        .then(function(data){
          for(i=0;i<data.length; i++){
              if(data[i].codigo == codigo){
                existe = true
                break
              }
              else{
                existe = false
              }
          }
          try {
            data[i].codigo
          } catch (error) {
            existe = false
          }
          

          verify(existe)
        })
            
        
        function verify(v){
            if(!v){
                fetch("salvar.php",{
                    method: "POST",
                    body: formData
                })
            }
        }
        
    })
    

