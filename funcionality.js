const myButton = document.querySelector(".button_drawn");
myButton.addEventListener("click" , myDrawnFunction)




function myDrawnFunction() {

    let inputvalue1 = Math.ceil(document.querySelector(".min").value);
    let inputvalue2 = Math.floor(document.querySelector(".max").value);
   

    const numeroAleatorio = Math.floor(Math.random() * (inputvalue2 - inputvalue1 + 1)) + inputvalue1;

    const output = document.querySelector(".myNumberDrawn");
    output.innerHTML = numeroAleatorio;
  
    
}





