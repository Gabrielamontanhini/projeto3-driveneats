let comida; 
function selecionarComida(essa){
    let comida = document.querySelector('.comida .selecionado');
    if (comida !== null){
        comida.classList.remove('selecionado');
    }
    essa.classList.add('selecionado');
    console.log("comida foi");
    const botao =  document.querySelector('.botao')
let celecionados = document.querySelectorAll('.selecionado').length;
if (celecionados === 3){
    botao.removeAttribute('disabled');
        botao.classList.add("finaliza");
        botao.innerHTML = "Fechar pedido"
}
}

let bebida; 
function selecionarBebida(essa){
    let bebida = document.querySelector('.bebida .selecionado');
    if (bebida !== null){
        bebida.classList.remove('selecionado');
    }
    essa.classList.add('selecionado');
    console.log("bebida tbm")
    const botao =  document.querySelector('.botao')
let celecionados = document.querySelectorAll('.selecionado').length;
if (celecionados === 3){
    botao.removeAttribute('disabled');
    botao.classList.add("finaliza");
    botao.innerHTML = "Fechar pedido";
}
}

let extra;
function selecionarExtra(essa){
    let extra = document.querySelector('.extra .selecionado');
    if (extra !== null){
        extra.classList.remove('selecionado');
    }
    essa.classList.add('selecionado');
    console.log("e o extra");
    const botao =  document.querySelector('.botao')
    let celecionados = document.querySelectorAll('.selecionado').length;
    if (celecionados === 3){
        botao.removeAttribute('disabled');
        botao.classList.add("finaliza");
        botao.innerHTML = "Fechar pedido"
    }
}





/*function habilitar(){
    alert("vamo ve")
    const botao =  document.querySelector('.botao')
    let comida = document.querySelector('.comida .selecionado');
    let bebida = document.querySelector('.bebida .selecionado');
    let extra = document.querySelector('.extra .selecionado');
    
    if ( comida !== undefined && bebida !== undefined && extra !== undefined){
        botao.removeAttribute('disabled');
    } 
}*/


function continuar(){
    alert("o botao foi clicado")
}


