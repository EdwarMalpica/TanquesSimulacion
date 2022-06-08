console.log("Script cargado");

let tanque1 = document.getElementById("tanque1");
let tanque2 = document.getElementById("tanque2");
document.getElementById("iniciarSimulacion").onclick =calculateCaudal;


let alturaH1 = document.getElementById("alturaH1");
let alturaH2 = document.getElementById("alturaH2");
let diametroH1 = document.getElementById("diametroH1");
let diametroH2= document.getElementById("diametroH2");
let nivelH1= document.getElementById("nivelH1");
let nivelH2= document.getElementById("nivelH2");
let alturaAgujeroH1= document.getElementById("alturaAgujeroH1");
let alturaAgujeroH2= document.getElementById("alturaAgujeroH2");
let diametroAgujeroH1= document.getElementById("diametroAgujeroH1");
let diametroAgujeroH2= document.getElementById("diametroAgujeroH2");
let alturaH1H2= document.getElementById("diametroAgujeroH2");
let anchorH1H2= document.getElementById("diametroAgujeroH2");





function drawTanque(tanque, dezplazamiento){

    if(tanque.getContext){
        
        let tanCa = tanque.getContext('2d');
        tanCa.beginPath();
        tanCa.moveTo(50+dezplazamiento,50);
        tanCa.lineTo(50+dezplazamiento,150);
        tanCa.lineTo(200+dezplazamiento,150);
        tanCa.lineTo(200+dezplazamiento,50);

        tanCa.fillStyle = "blue";
        tanCa.fillRect(51+dezplazamiento,51,149,99);
        //tanCa.closePath();
        tanCa.stroke();
    }
}



function calculateCaudal(){
    let volumenTanque1 = Math.pi * Math.pow(diametroH1.value/2,2)*nivelH1.value;
    let caudal = 0.6 * (Math.PI* Math.pow(diametroAgujeroH1.value/2,2)* Math.sqrt(2*9.8*(nivelH1.value-alturaAgujeroH1.value)));
    console.log("diametroAgujeroH1: " +diametroAgujeroH1.value +"nivelH1"+ nivelH1.value +" alturaAgujeroH1"+ alturaAgujeroH1.value);
    console.log("caudal: " + caudal);
    
}




drawTanque(tanque1,0);
drawTanque(tanque2,50);
