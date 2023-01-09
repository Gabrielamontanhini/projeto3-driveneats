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
    let prato = document.querySelector('.selecionado .food ');
    let bebida = document.querySelector('.selecionado .drink');
    let acompanhamento = document.querySelector('.selecionado .dessert');

    let a = document.querySelector('.selecionado .price1');
    let presoa = a.innerHTML;
    let valor1 = presoa.replace('R$','');
    let replace1 = valor1.replace(',','.')
    let valorComida = Number(replace1);

    let b = document.querySelector('.selecionado .price2');
    let presob = b.innerHTML;
    let valor2 = presob.replace('R$','')
    let replace2 = valor2.replace(',','.')
    let valorBebida = Number(replace2);
    


    let c = document.querySelector('.selecionado .price3');
    let presoc = c.innerHTML;
    let valor3 = presoc.replace('R$','')
    let replace3 = valor3.replace(',','.');
    let valorSobremesa = Number(replace3);
    alert(valorSobremesa);
    let total = valorComida+valorBebida+valorSobremesa;
    



    let mensagem = `Olá, gostaria de fazer o pedido:
    - Prato: ${prato.innerHTML}
    - Bebida: ${bebida.innerHTML}
    - Acompanhamento: ${acompanhamento.innerHTML}
    Total: R$ ${total} `

    const wpp = 'https://wa.me/5548988377358?text=' + encodeURIComponent(mensagem);
    window.open(wpp);
}


