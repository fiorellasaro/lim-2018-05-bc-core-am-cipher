/*let texto = document.getElementsByClassName('TextToCipherOrDecipher')[0].value;
let nOffSetUser = document.getElementsByClassName('nValue')[0].value; //Variable que contendrá el Offset, el valor de N, el cual indica el usuario
parseInt(nOffSetUser); */


let texto;
let nOffSetUser;

document.getElementById("buttonCipher").addEventListener("click", ShowResultsEncode);
let capturarDatos = () => {
    texto = document.getElementById("TextToCipherOrDecipher").value;
    nOffSetUser = document.getElementById("nValue").value; //Variable que contendrá el Offset, el valor de N, el cual indica el usuario    
    parseInt(nOffSetUser);
    alert(texto + nOffSetUser);
}

let ShowResultsEncode = () => {
    
    capturarDatos();
    cipher.encode(texto, nOffSetUser);


}
/*
let ShowResultsDecode = () => {
    
    capturarDatos ();
    cipher.decode(texto, nOffSetUser);


} */



/* botnDecifrado = document.getElementById('buttonDecipher');
botonDecifrado = addEventListener('click', cipher.decode(texto,nOffSetUser));*/











