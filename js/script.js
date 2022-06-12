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
let alturaH1H2= document.getElementById("alturaH1H2");
let anchorH1H2= document.getElementById("anchorH1H2");
const imgWaterKry = new Image();
let resultados = document.getElementById("resultados");
let volumenTanque1;
let volumenTanque2;
let intervalo;



function drawTanque(tanque, dezplazamiento, altura=50, diametro = 50, diametroAgujero = 5,alturaAgujero=10, nivelAgua=30, separacionY = 0){
    
    if(tanque.getContext){
        //console.log(`altura: ${altura} diametro ${diametro} diamettro Aguja ${diametroAgujero} altura Agujero ${alturaAgujero} nivelAgua ${nivelAgua}`);
        let tanCa = tanque.getContext('2d');
        console.log(`TAmaño es: ${tanque.height}`);
        tanCa.beginPath();
        tanCa.moveTo(dezplazamiento,tanque.height-altura-separacionY);
        tanCa.lineTo(dezplazamiento,tanque.height-separacionY);
        tanCa.lineTo(diametro+dezplazamiento,tanque.height-separacionY);
        tanCa.lineTo(diametro+dezplazamiento,tanque.height-altura-separacionY);
        tanCa.fillStyle = "blue";
        tanCa.fillRect(1+dezplazamiento,1+(tanque.height-altura-separacionY-nivelAgua)+(altura),diametro-1,nivelAgua-1);
        tanCa.fillStyle = 'gray';
        tanCa.fillRect(1+dezplazamiento+diametro,tanque.height-altura-separacionY+altura-diametroAgujero-alturaAgujero,5,diametroAgujero);
        //tanCa.closePath();
        tanCa.stroke();
 
    }
}

function initialValues(){
    alturaH1.value = 50;
    alturaH2.value = 50;
    diametroH1.value = 50;
    diametroH2.value = 50;
    diametroAgujeroH1.value = 5;
    diametroAgujeroH2.value = 5;
    alturaAgujeroH1.value = 5;
    alturaAgujeroH2.value = 5;
    nivelH1.value = 20;
    nivelH2.value = 20;
    anchorH1H2.value = 20;
    alturaH1H2.value = 20;
}
initialValues();
function startApp(){
    alturaH1 = parseFloat(alturaH1.value);
    alturaH2 = parseFloat(alturaH2.value);
    diametroH1 = parseFloat(diametroH1.value);
    diametroH2 = parseFloat(diametroH2.value);
    diametroAgujeroH1 = parseFloat(diametroAgujeroH1.value);
    diametroAgujeroH2 = parseFloat(diametroAgujeroH2.value);
    alturaAgujeroH1 = parseFloat(alturaAgujeroH1.value);
    alturaAgujeroH2 = parseFloat(alturaAgujeroH2.value);
    nivelH1 = parseFloat(nivelH1.value);
    nivelH2 = parseFloat(nivelH2.value);
    anchorH1H2 = parseFloat(anchorH1H2.value);
    alturaH1H2 = parseFloat(alturaH1H2.value);

    intervalo = setInterval(starSimulation,10);
    

    /*let radioH1 = diametroH1.value/2;
    let raudioAgujeroH1 = diametroAgujeroH1.value/2;
    let h1n1 = nivelH1.value-alturaAgujeroH1.value;
    calculateCaudal1(raudioAgujeroH1,h1n1,radioH1);*/
}

function starSimulation(){
    let altura = nivelH1-alturaAgujeroH1;
    volumenTanque1 = calculateVolumen(diametroH1,altura)
    console.log(`Volumen: ${volumenTanque1}`);
    let velocidadTanque1 = calculateVelocidad(altura);
    let caudalTanque1 = calculateCaudal(diametroAgujeroH1,velocidadTanque1);
    volumenTanque1 = volumenTanque1 - caudalTanque1;
    altura = calculateAltura(diametroH1, volumenTanque1);
    nivelH1 = altura + alturaAgujeroH1;
    animatePaint(tanque1,0,alturaH1,diametroH1, diametroAgujeroH1, alturaAgujeroH1, nivelH1);

    if(altura>0){
        console.log("sigo vivo "+altura);
    }else{
        console.log(`altura ${altura} caudal ${caudalTanque1} volumenTanque1 ${volumenTanque1}`);
        clearInterval(intervalo);
    }

}



const calculateVelocidad = function (altura){
    return Math.sqrt(2*9.8*altura)
}

const calculateCaudal = function(diametroAgujero, velocidad){
    return (Math.pow(diametroAgujero/2,2)*Math.PI)*velocidad; 
}

const calculateVolumen = function(diametro, altura){
    return Math.pow(diametro/2,2)*Math.PI*altura;
}

const calculateAltura = function(diametro, volumen){
    return volumen/(Math.pow(diametro/2,2)*Math.PI);
}

const calculateDistance = function(altura, nivel){
    return 2* Math.sqrt(altura *(nivel -altura));
}


function calculateCaudal1(raudioAgujeroH1,h1n1,radioH1){
    let caudal = 0.6 * (Math.PI* Math.pow(raudioAgujeroH1,2)* Math.sqrt(2*9.8*(h1n1)));
    //console.log("caudal: " + caudal);
    resultados.innerHTML+="caudal: " + caudal;
    calculateVolumen1(radioH1,h1n1,caudal)
}

function calculateVolumen1(radioH1,h1n1,caudal){
    let volumenTanque1 = Math.PI * Math.pow(radioH1,2) * h1n1;
    //console.log("volumen: " + volumenTanque1);
    resultados.innerHTML+="volumen: " + volumenTanque1;
    let volumenTange1Final = volumenTanque1 - caudal;   
    getHeight(volumenTange1Final,volumenTanque1, h1n1)
}

function getHeight(volumenF,volumen,h1n1){
    let height = (volumenF/volumen)*h1n1;
    //console.log("altura = " +height);
    resultados.innerHTML+="altura = " +height;
    return height;
}

function animatePaint(tanque, desplazamiento, altura, diametro, diametroAgujero, alturaAgujero, nivelAgua){
    tanque.width = 300;
    drawTanque(tanque,desplazamiento, altura, diametro, diametroAgujero, alturaAgujero, nivelAgua);
}


function rePaint(){
        tanque1.width = 300;
        tanque2.width = 300;
        tanque1.height = 300;
        tanque2.height = 300;
    if(alturaH1.value != ""){
        drawTanque(tanque1,0,parseFloat(alturaH1.value),parseFloat(diametroH1.value),parseFloat(diametroAgujeroH1.value),parseFloat(alturaAgujeroH1.value),parseFloat(nivelH1.value),parseFloat(alturaH1H2.value/2));
        drawTanque(tanque2,parseFloat(anchorH1H2.value)+parseFloat(diametroH1.value),parseFloat(alturaH2.value),parseFloat(diametroH2.value),parseFloat(diametroAgujeroH2.value),parseFloat(alturaAgujeroH2.value),parseFloat(nivelH2.value),tanque1.height-parseFloat(alturaH2.value)-parseFloat(alturaH1H2.value/2));
    }else{
        drawTanque(tanque1,0); 
        drawTanque(tanque2,50);
    }
    
}

rePaint();




