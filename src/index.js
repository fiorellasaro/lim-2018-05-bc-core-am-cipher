
let texto;
let nOffSetUser;
let numberN;

let capturarDatos = () => {
    texto = document.getElementsByName('CipherBoxText')[0].value;
    nOffSetUser = document.getElementsByName('OffSet')[0].value; //Variable que contendrá el Offset, el valor de N, el cual indica el usuario    
    numberN = parseInt(nOffSetUser);
} 

let ShowResultsEncode = () => {   
    capturarDatos();
    document.getElementsByClassName('ConvertAndResults')[1].getElementsByTagName('p')[0].innerText = cipher.encode(numberN, texto);
}


let ShowResultsDecode = () => {   
    capturarDatos ();
    document.getElementsByClassName('ConvertAndResults')[1].getElementsByTagName('p')[0].innerText = cipher.decode(numberN, texto);
}


let ShowInstructionsCipher = () => {
    document.getElementsByClassName('InstructionsButton')[0].style.visibility = 'hidden';
    document.getElementsByClassName('InstructionsButton')[0].style.display = 'none';
    document.getElementsByClassName('InstructionsText')[0].style.display = 'inherit';
    document.getElementsByClassName('InstructionsText')[0].style.visibility = 'visible';
   
} 

let ShowInstructionsDecipher = () => {
    document.getElementsByClassName('InstructionsButton')[1].style.visibility = 'hidden';
    document.getElementsByClassName('InstructionsButton')[1].style.display = 'none';
    document.getElementsByClassName('InstructionsText')[1].style.display = 'inherit';
    document.getElementsByClassName('InstructionsText')[1].style.visibility = 'visible';
} 

let hiddenInstructionsCipher = () => {
    document.getElementsByClassName('InstructionsText')[0].style.visibility = 'hidden';
    document.getElementsByClassName('InstructionsText')[0].style.display = 'none';
    document.getElementsByClassName('InstructionsButton')[0].style.display = 'inherit';
    document.getElementsByClassName('InstructionsButton')[0].style.visibility = 'visible';
}

let hiddenInstructionsDecipher = () => {
    document.getElementsByClassName('InstructionsText')[1].style.visibility = 'hidden';
    document.getElementsByClassName('InstructionsText')[1].style.display = 'none';
    document.getElementsByClassName('InstructionsButton')[1].style.display = 'inherit';
    document.getElementsByClassName('InstructionsButton')[1].style.visibility = 'visible';
}

   

document.getElementsByClassName('buttonsAndOffset')[0].getElementsByTagName('button')[0].addEventListener('click', ShowResultsEncode);
document.getElementsByClassName('buttonsAndOffset')[0].getElementsByTagName('button')[1].addEventListener('click', ShowResultsDecode);

document.getElementsByClassName('InstructionsButton')[0].addEventListener('click', ShowInstructionsCipher);
document.getElementsByClassName('InstructionsButton')[1].addEventListener('click', ShowInstructionsDecipher);
document.getElementsByClassName('InstructionsText')[0].addEventListener('click', hiddenInstructionsCipher);
document.getElementsByClassName('InstructionsText')[1].addEventListener('click', hiddenInstructionsDecipher);











