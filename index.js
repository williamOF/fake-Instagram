

window.addEventListener('load',()=>{
    //seleciona do header o campo com o nome do usuario
    const divName = document.querySelector('.avatar-content div')
    //divName.style.fontWeight = 'bolder'
    divName.innerHTML = '<strong>'+divName.innerText+'</strong>'

    //seleciona o input com nomeclatura errada de Nome Completo para Primeiro nome sem mudar a estrutura html
    const form = document.querySelector('main form')
    for(input of form){
        if(input.name == 'name'){
            input.placeholder = 'Primeiro Nome'
        }
    }
    
    //a mesma coisa q o de cima so que usando o elementsbyname
    let elements = document.getElementsByName("name")[0]
    elements.placeholder = "Primeiro Nome"
    

    //Altere o raio da borda dos inputs do formulário de cadastro para ficar mais fiel às imagens de layout.
    const form2 = document.querySelector('main form')
    for(input of form2){
        if(input.type != 'submit'){
            input.style.cssText = "width: 85%; border-radius: 5px; display:block;"

        }else{
            input.style.cssText = "width: 100%; border-radius: 5px; display:block;"
        }
    }

    //Altere a cor de fundo da página para #fafafa.
    const bodyCath = document.getElementsByTagName('body')[0]
    bodyCath.style.backgroundColor = '#fafafa'


   
})
