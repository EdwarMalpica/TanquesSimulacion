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
        tanCa.fillRect(1+dezplazamiento+diametro,tanque.height-separacionY-diametroAgujero-alturaAgujero,5,diametroAgujero);
        //tanCa.closePath();
        tanCa.stroke();
 
    }
}

/*function drawWater(distancia=30, distaciaHastaBase=24 ){
    if(tanque1.getContext && tanque2.getContext){
       // console.log("Entro");
       let tanCa1 = tanque1.getContext('2d');
       let tanCa2 = tanque2.getContext('2d');
       
       tanCa1.strokeStyle = "blue";
       tanCa1.lineWidth = parseFloat(diametroAgujeroH1.value);
       //tanCa1.moveTo(1+diametroH1,tanCa1.height-anchorH1H2/2-diametroAgujeroH1-alturaAgujeroH1);
       tanCa1.beginPath();
       tanCa1.moveTo(1+parseFloat(diametroH1.value),tanque1.height-parseFloat(anchorH1H2.value)/2-parseFloat(diametroAgujeroH1.value)/2-parseFloat(alturaAgujeroH1.value));
       tanCa1.quadraticCurveTo(distaciaHastaBase+1+parseFloat(diametroH1.value), tanque1.height-parseFloat(anchorH1H2.value)/2-parseFloat(diametroAgujeroH1.value)-parseFloat(alturaAgujeroH1.value)+5, distaciaHastaBase+3+parseFloat(diametroH1.value), tanque1.height);
       tanCa1.stroke();

       tanCa2.strokeStyle = "blue";
       tanCa2.lineWidth = parseFloat(diametroAgujeroH1.value);
       tanCa2.beginPath();
       tanCa2.moveTo(distaciaHastaBase+2+parseFloat(diametroH1.value),0);
       tanCa2.quadraticCurveTo(distancia-1+parseFloat(diametroH1.value),0,distancia+1+parseFloat(diametroH1.value),parseFloat(anchorH1H2.value)/2);
       tanCa2.stroke();
       //tanCa1.fillRect(10,10,50,50);
       //tanCa1.lineTo(50,50);
       //tanCa1.quadraticCurveTo(25, 25, 25, 62.5); 
    }

}*/

function drawWater(distancia=30 ){
    if(tanque1.getContext && tanque2.getContext){
       let tanCa1 = tanque1.getContext('2d');
       let tanCa2 = tanque2.getContext('2d');
       
       tanCa1.strokeStyle = "blue";
       tanCa1.lineWidth = diametroAgujeroH1;
       tanCa1.beginPath();
       tanCa1.moveTo(diametroH1,tanque1.height-alturaH1H2/2-diametroAgujeroH1/2-alturaAgujeroH1);
       tanCa1.quadraticCurveTo(distancia+1+diametroH1, tanque1.height-alturaH1H2/2-diametroAgujeroH1-alturaAgujeroH1+5, distancia+3+diametroH1, tanque1.height);
       tanCa1.stroke();

       tanCa2.strokeStyle = "blue";
       tanCa2.lineWidth = diametroAgujeroH1;
       tanCa2.beginPath();
       tanCa2.moveTo(distancia+diametroH1+3,0);
       tanCa2.quadraticCurveTo(distancia+diametroH1+3,0,distancia+5+diametroH1,alturaH1H2/2+alturaH2);
       tanCa2.stroke();
 

    }

}

function initialValues(){
    alturaH1.value = 50;
    alturaH2.value = 50;
    diametroH1.value = 50;
    diametroH2.value = 50;
    diametroAgujeroH1.value = 2;
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
    
    if(altura>0){
        
        volumenTanque1 = calculateVolumen(diametroH1,altura)
        let velocidadTanque1 = calculateVelocidad(altura);
        let caudalTanque1 = calculateCaudal(diametroAgujeroH1,velocidadTanque1);
        let distancia = calculateDistance(altura,(alturaH1H2+alturaAgujeroH1));
        //console.log(`Distancia: ${distancia} nivelH1 ${nivelH1} alturaAgujero ${alturaAgujeroH1} alturaH1H2 ${alturaH1H2}`);
        volumenTanque1 = volumenTanque1 - caudalTanque1;
        altura = calculateAltura(diametroH1, volumenTanque1);
        nivelH1 = altura + alturaAgujeroH1;
        animatePaint(tanque1,0,alturaH1,diametroH1, diametroAgujeroH1, alturaAgujeroH1, nivelH1, alturaH1H2/2);
        animatePaint(tanque2,anchorH1H2+diametroH1,alturaH2,diametroH2,diametroAgujeroH2, alturaAgujeroH2,nivelH2,tanque2.height-alturaH2-alturaH1H2/2);
        drawWater(distancia);

        if(distancia>anchorH1H2 && distancia< anchorH1H2+diametroH2){
            volumenTanque2 = calculateVolumen(diametroH2, nivelH2);
            volumenTanque2 = volumenTanque2+caudalTanque1;
            nivelH2 = calculateAltura(diametroH2, volumenTanque2);
        }
    }else{
        
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
    
    let distance = 2* Math.sqrt(altura *(nivel));

    console.log(`altura ${typeof altura} nivel ${typeof nivel} distance ${distance}`);

    return distance;
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

function animatePaint(tanque, desplazamiento, altura, diametro, diametroAgujero, alturaAgujero, nivelAgua, separacionY){
    tanque.width = 300;
    drawTanque(tanque,desplazamiento, altura, diametro, diametroAgujero, alturaAgujero, nivelAgua, separacionY);
}


function rePaint(){
        tanque1.width = 300;
        tanque2.width = 300;
        tanque1.height = 300;
        tanque2.height = 300;
    if(alturaH1.value != ""){
        drawTanque(tanque1,0,parseFloat(alturaH1.value),parseFloat(diametroH1.value),parseFloat(diametroAgujeroH1.value),parseFloat(alturaAgujeroH1.value),parseFloat(nivelH1.value),parseFloat(alturaH1H2.value/2));
        drawTanque(tanque2,parseFloat(anchorH1H2.value)+parseFloat(diametroH1.value),parseFloat(alturaH2.value),parseFloat(diametroH2.value),parseFloat(diametroAgujeroH2.value),parseFloat(alturaAgujeroH2.value),parseFloat(nivelH2.value),tanque1.height-parseFloat(alturaH2.value)-parseFloat(alturaH1H2.value)/2);
        
    }else{
        drawTanque(tanque1,0); 
        drawTanque(tanque2,50);
       
    }
    drawWater();
    
}

rePaint();




