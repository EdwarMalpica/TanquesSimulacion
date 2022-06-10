console.log("Script cargado");

let tanque1 = document.getElementById("tanque1");
let tanque2 = document.getElementById("tanque2");
document.getElementById("iniciarSimulacion").onclick =startApp;


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
const imgWaterKry = new Image();
let resultados = document.getElementById("resultados");





function drawTanque(tanque, dezplazamiento, altura=50, diametro = 50, diametroAgujero = 5,alturaAgujero=10, nivelAgua=30){

    if(tanque.getContext){
        
        let tanCa = tanque.getContext('2d');
           
        tanCa.beginPath();
        tanCa.moveTo(50+dezplazamiento,50);
        tanCa.lineTo(50+dezplazamiento,altura+50);
        tanCa.lineTo(diametro+50+dezplazamiento,altura+50);
        tanCa.lineTo(diametro+50+dezplazamiento,50);
        tanCa.fillStyle = "blue";
        tanCa.fillRect(51+dezplazamiento,51+(50-nivelAgua),diametro-1,nivelAgua-1);
        tanCa.fillStyle = 'gray';
        tanCa.fillRect(51+dezplazamiento+diametro,50+altura-diametroAgujero-alturaAgujero,5,diametroAgujero);
        //tanCa.closePath();
        tanCa.stroke();
 
    }
}

function startApp(){
    let radioH1 = diametroH1.value/2;
    let raudioAgujeroH1 = diametroAgujeroH1.value/2;
    let h1n1 = nivelH1.value-alturaAgujeroH1.value;
    calculateCaudal1(raudioAgujeroH1,h1n1,radioH1);
}
function calculateCaudal(){
    let volumenTanque1 = Math.pi * Math.pow(diametroH1.value/2,2)*nivelH1.value;
    let caudal = 0.6 * (Math.PI* Math.pow(diametroAgujeroH1.value/2,2)* Math.sqrt(2*9.8*(nivelH1.value-alturaAgujeroH1.value)));
    console.log("diametroAgujeroH1: " +diametroAgujeroH1.value +"nivelH1"+ nivelH1.value +" alturaAgujeroH1"+ alturaAgujeroH1.value);

}

function calculateCaudal1(raudioAgujeroH1,h1n1,radioH1){
    let caudal = 0.6 * (Math.PI* Math.pow(raudioAgujeroH1,2)* Math.sqrt(2*9.8*(h1n1)));
    console.log("caudal: " + caudal);
    calculateVolumen1(radioH1,h1n1,caudal)
}

function calculateVolumen1(radioH1,h1n1,caudal){
    let volumenTanque1 = Math.PI * Math.pow(radioH1,2) * h1n1;
    console.log("volumen: " + volumenTanque1);
    let volumenTange1Final = volumenTanque1 - caudal;   
    getHeight(volumenTange1Final,volumenTanque1, h1n1)
}

function getHeight(volumenF,volumen,h1n1){
    let height = (volumenF/volumen)*h1n1;
    console.log("altura = " +height);
    return height;
}



drawTanque(tanque1,0);
drawTanque(tanque2,50);

