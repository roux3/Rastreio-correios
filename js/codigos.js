btn = document.getElementsByClassName("botao")[0];
areaText = document.getElementsByClassName("texto");
areaText[0].addEventListener('focus', function(){
    btn.classList.add('arredondar')
});


areaText[0].addEventListener('blur', function(){
    btn.classList.remove('arredondar')
});

btn.addEventListener('click', function(){
    limpar()
    showCodes(areaText[0].value)
    
})

function limpar(){
    estadoQuery = document.querySelector(".estado-salvos")
    while(estadoQuery.lastElementChild){
        estadoQuery.removeChild(estadoQuery.lastElementChild)
    }
}


function showCodes(Name){
    
    
    //document.getElementsByClassName("estado-salvos")[0].innerHTML = ""

    form = new FormData()    
    if(Name == null){
            form.append("nome", "all")
            codigos = fetch("codigos.php",{
                method: "POST",
                body: form
            }).then(response => response.json())
            .then(function(objeto){
                mostrar(objeto)
            })
        }
        else{
            form.append("nome", Name)
            codigos = fetch("codigos.php",{
                method: "POST",
                body: form
            }).then(response => response.json())
            .then(function(objeto){
                mostrar(objeto)
            })
        }
            
            function mostrar(objeto){
                let formData = new FormData();
                let obj = objeto
                for(let j=0;j<objeto.length;j++){
                        var nome = document.createTextNode(objeto[j].Nome)
                        let codigo = objeto[j].codigo
                        formData.append("cod",codigo);
                        test = fetch("script.php", { 
                            method: 'POST',
                        body: formData })
                        .then(response => response.json())
                        .then(function(data){
                            var nome = document.createTextNode(obj[j].Nome)
                            var codigo = document.createTextNode(obj[j].codigo)
                            events = data.objetos[0].eventos;
                            i = 0
                            var unidades = events[i].unidade
                            var newLi = document.createElement("li");
                            var newDiv4 = document.createElement("div")
                            var newDiv3 = document.createElement("div")
                            var newDiv2 = document.createElement("div")
                            var newDiv = document.createElement("div")
                            var separador = document.createElement("hr")
                            var newH4 = document.createElement("h4");
                            var newH2 = document.createElement("h2")
                            var newH3 = document.createElement("h3")
                            var unidadeH5 = document.createElement("h5")
                            var horaH5 = document.createElement("h5")
                            var newImg = document.createElement("img")
                            newImg.setAttribute("src", "https://proxyapp.correios.com.br"+events[i].urlIcone)
                            var estado = document.getElementsByClassName('estado-salvos')[0]
                            var descricao =  document.createTextNode(events[i].descricao)
                            if(events[i].descricao == "Objeto entregue ao destinatário"){
                                var form = new FormData()
                                form.append("cod",obj[j].codigo)
                                fetch("delete.php", { 
                                    method: 'POST',
                                    body: form })
                            }
                            var cidade = unidades.endereco.cidade
                            var uf = unidades.endereco.uf

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

                        

                            var newLi = document.createElement("li");
                            var newDiv = document.createElement("div");
                            var hora = document.createTextNode(events[i].dtHrCriado.replace("T", "  "))
                            
                            newH2.appendChild(nome)
                            newDiv2.appendChild(newH2)
                            newLi.appendChild(newDiv2)
                            newH3.appendChild(codigo)
                            newDiv2.appendChild(newH3)
                            newLi.appendChild(newDiv2)

                            newLi.appendChild(separador)
                            newDiv3.appendChild(newImg)
                            newH4.appendChild(descricao)
                            newLi.appendChild(newDiv4)
                            newDiv4.appendChild(newDiv3)
                            newDiv4.appendChild(newDiv)
                            newDiv.appendChild(newH4)
                            estado.appendChild(newLi)
                            newLi.classList.add('bloco')
                            newDiv2.classList.add('cabecalho')
                            newDiv4.classList.add('situacao-main')
                            newDiv.classList.add('situacao')
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
                    })
                
                }


            }
        }
