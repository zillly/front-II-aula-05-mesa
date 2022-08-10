function textoBranco(){
let lista = document.querySelectorAll('p, h2')
for (let i = 0 ; i < lista.length; i ++){
    lista[i].classList.toggle('head')
}
}

function titulo (){
    let lista = document.querySelectorAll('h1')
    for (let i = 0 ; i < lista.length; i ++){
        lista[i].classList.toggle('titulo')
    }
}

function item (){
    let lista = document.getElementsByClassName('item')
    for (let i = 0 ; i < lista.length; i ++){
        lista[i].classList.toggle('item2')
    }
}

function fundo (){
    let lista = document.querySelector('.dark')
    lista.classList.toggle('fundo')
    
}
