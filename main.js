fetch('https://fakestoreapi.com/products?limit=10')
            .then(res => res.json())
            .then((json) => {
                console.log(json);
                const ul = document.getElementById('listaProdutos');
                json.forEach((item) => {
                    const li = document.createElement("li");
                    li.innerHTML = `
                    <a href="#">
                        <img width="50"
                            src="${item.image}" >
                        <span class="item-name">${item.title}</span>
                    </a>
                    `;
                    ul.appendChild(li);
                })
            })

            function filtrar() {
                var input,
                filter,
                ul,
                li,
                a,
                i,
                span,
                txtValue,
                count = 0

                //pegar os elementos html
                input = document.getElementById('inputBusca');
                ul = document.getElementById('listaProdutos');

                //filtro
                filter = input.value.toUpperCase();

                //pegar todas as li's da lista 
                li = ul.getElementsByTagName("li");

                //percorrer todos os li's
                for(i = 0; i < li.length; i++){
                    //pegar a tag a do elemento percorrido
                    a = li[i].getElementsByTagName("a")[0];
                    //pegar texto dentro do link a
                    textValue = a.textContent || a.innerText;
                    //verificar se o que o usuario digitou bate com o texto da tag a 
                    if(txtValue.toUpperCase().indexOf(filter) > -1); {
                    //valor bateu
                    li[i].style.display = "";
                    //incrementar o contador
                    count++
                    //pegar a tag span do item 
                    span = li[i].querySelector(".item-name");
                    //se existir 
                    if (span) {
                        span.innerHTML = txtValue.replace(new RegExp(filter, "gi"), (match) => {
                            return "<strong>" + match + "</strong>";
                        })
                    } 
                    
            }else {
                        li[i].style.display = "none";
                    }
                }
                //verificando se tem itens na lista 
                if (count === 0) {
                    ul.style.display = "none";
                } else {
                    ul.style.display = "block";
                }
            }
