let comida; 
function selecionarComida(essa){
    let comida = document.querySelector('.comida .selecionado');
    if (comida !== null){
        comida.classList.remove('selecionado');
    }
    essa.classList.add('selecionado');
    console.log("comida foi");

}

let bebida; 

function selecionarBebida(essa){
    let bebida = document.querySelector('.bebida .selecionado');
    if (bebida !== null){
        bebida.classList.remove('selecionado');
    }
    essa.classList.add('selecionado');
    console.log("bebida tbm")

}

let extra;
function selecionarExtra(essa){
    let extra = document.querySelector('.extra .selecionado');
    if (extra !== null){
        extra.classList.remove('selecionado');
    }
    essa.classList.add('selecionado');
    console.log("e o extra");


}





function continuar(){
    const botao =  document.getElementsByTagName('button')
    let mensagem = 
    
    
    
    /*

if ( comida !== undefined && bebida !== undefined && extra !== undefined ){
            alert("verificação concluida")
            
botao.classList.add('.finaliza');
            
            
            }
            else{
                alert('ainda nao');
            }*/
        }

// botao.removeAttribute('disabled');
