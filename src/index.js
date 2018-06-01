
let texto;
let nOffSetUser;
let numberN;
//let cipherObject =cipher.createCipherWithOffset(3);


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
   

document.getElementById('buttonCipher').addEventListener('click', ShowResultsEncode);
document.getElementById('buttonDecipher').addEventListener('click', ShowResultsDecode);












