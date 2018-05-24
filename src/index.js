
let texto;
let nOffSetUser;
let numberN;


let capturarDatos = () => {
    texto = document.getElementById("TextToCipherOrDecipher").value;
    nOffSetUser = document.getElementById("nValue").value; //Variable que contendrá el Offset, el valor de N, el cual indica el usuario    
    numberN = parseInt(nOffSetUser);
} 

let ShowResultsEncode = () => {
    
    capturarDatos();
    cipher.encode(texto, numberN);


}


let ShowResultsDecode = () => {
    
    capturarDatos ();
    cipher.decode(texto, numberN);


}
   

document.getElementById("buttonCipher").addEventListener("click", ShowResultsEncode);
document.getElementById("buttonDecipher").addEventListener("click", ShowResultsDecode);












