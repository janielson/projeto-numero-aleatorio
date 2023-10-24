
// aqui pegamos nosso botão e demos um evento de click para que todo vez que for clicado realise nossa função.
const myButton = document.querySelector(".button_drawn");
myButton.addEventListener("click" , myDrawnFunction);




function myDrawnFunction() {
    //  aqui estou sorteando um numero para cima e outro para baixo.
    let inputvalue1 = Math.ceil(document.querySelector(".min").value);
    let inputvalue2 = Math.floor(document.querySelector(".max").value);
   
    // aqui e todo o calculo que e realizado para poder fazer o sorteio
    const numeroAleatorio = Math.floor(Math.random() * (inputvalue2 - inputvalue1 + 1)) + inputvalue1;
    //  aqui colocamos o numero sorteado na tela.
    const output = document.querySelector(".myNumberDrawn");
    output.innerHTML = numeroAleatorio;
  
    
}





