var estado = document.getElementsByClassName('estado')[0]
         codigos = fetch("codigos.php",{
            method: "GET"
        }).then(response => response.json())
        .then(function(data){
            mostrar(data)
        })
        function mostrar(data){
            var formData = new FormData();
            for(i=0;i<data.length;i++){
                
                var nome = document.createTextNode(data[i].Nome)
                var codigo = data[i].codigo
                formData.append("cod",codigo);
                test = fetch("script.php", { 
                    method: 'POST',
                body: formData })
                .then(response => response.json())
                .then(function(data){
                    events = data.objetos[0].eventos;
                    i = 0
                    var unidades = events[i].unidade
                    var newLi = document.createElement("li");
                    newLi.classList.add('step')
                    var newDiv = document.createElement("div")
                    newDiv.classList.add('sub-step')
                    var newH3 = document.createElement("h3");
                    var unidadeH5 = document.createElement("h5")
                    var horaH5 = document.createElement("h5")
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

                    var newLi = document.createElement("li");
                    var newDiv = document.createElement("div");
                    var newH3 = document.createElement("h3");
                    newH3.appendChild(descricao)
                    newLi.appendChild(newDiv)
                    newDiv.appendChild(newH3)
                    estado.appendChild(newLi)
                    unidadeH5.appendChild(unidade)
                    newDiv.appendChild(unidadeH5)
    
    
        
                    
                    horaH5.appendChild(hora)
                    newDiv.appendChild(horaH5)
                })

            }
        }