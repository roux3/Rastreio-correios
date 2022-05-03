var estado = document.getElementsByClassName('estado')[0]
         codigos = fetch("codigos.php",{
            method: "GET"
        }).then(response => response.json())
        .then(function(objeto){
            mostrar(objeto)
        })
        function mostrar(objeto){
            var formData = new FormData();
            for(i=0;i<objeto.length;i++){
                
                var nome = document.createTextNode(objeto[i].Nome)
                console.log(nome)
                var codigo = objeto[i].codigo
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
                    var newDiv2 = document.createElement("div")
                    var newDiv = document.createElement("div")
                    var separador = document.createElement("hr")
                    var newH4 = document.createElement("h4");
                    var newH2 = document.createElement("h2")
                    var unidadeH5 = document.createElement("h5")
                    var horaH5 = document.createElement("h5")
                    var estado = document.getElementsByClassName('estado2')[0]
                    var descricao =  document.createTextNode(events[i].descricao)
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
                    var hora = document.createTextNode(events[i].dtHrCriado.replace("T", "  "))
                    newH2.appendChild(nome)
                    newDiv2.appendChild(newH2)
                    newLi.appendChild(newDiv2)
                    newLi.appendChild(separador)
                    newH4.appendChild(descricao)
                    newLi.appendChild(newDiv)
                    newDiv.appendChild(newH4)
                    estado.appendChild(newLi)
                    newLi.classList.add('bloco')
                    newDiv2.classList.add('cabecalho')
                    newDiv.classList.add('situacao')
                    unidadeH5.appendChild(unidade)
                    newDiv.appendChild(unidadeH5)
    
    
        
                    
                    horaH5.appendChild(hora)
                    newDiv.appendChild(horaH5)
                })

            }
        }