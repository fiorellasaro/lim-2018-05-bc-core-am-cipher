
let texto;
let nOffSetUser;
let numberN;

let capturarDatos = () => {
    texto = document.getElementById('TextToCipherOrDecipher').value;
    nOffSetUser = document.getElementById('nValue').value; //Variable que contendrá el Offset, el valor de N, el cual indica el usuario    
    numberN = parseInt(nOffSetUser);
} 

let ShowResultsEncode = () => {   
    capturarDatos();
    document.getElementById('TextoAMostrar').innerText = cipher.encode(numberN, texto);
}


let ShowResultsDecode = () => {   
    capturarDatos ();
    document.getElementById('TextoAMostrar').innerText = cipher.decode(numberN, texto);
}

let ShowInstructionsCipher = () => {
    document.getElementById('InstructionsCipher').style.visibility = 'hidden';
    document.getElementById('InstructionsCipher').style.display = 'none';
    document.getElementById('InstructionsCipherText').style.marginLeft = '25%';
    document.getElementById('InstructionsCipherText').style.marginRight = '15px';
    document.getElementById('InstructionsCipherText').style.visibility = 'visible';
   
} 

let ShowInstructionsDecipher = () => {
    document.getElementById('InstructionsDecipher').style.visibility = 'hidden';
    document.getElementById('InstructionsDecipher').style.display = 'none';
    document.getElementById('InstructionsDecipherText').style.visibility = 'visible';
} 


   

document.getElementById('buttonCipher').addEventListener('click', ShowResultsEncode);
document.getElementById('buttonDecipher').addEventListener('click', ShowResultsDecode);
document.getElementById('InstructionsCipher').addEventListener('click', ShowInstructionsCipher);
document.getElementById('InstructionsDecipher').addEventListener('click', ShowInstructionsDecipher);











