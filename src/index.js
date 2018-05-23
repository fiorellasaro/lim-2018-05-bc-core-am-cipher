let texto = document.getElementsByName('CipherBoxText')[0];
alert(texto); 
let nOffSet1 = document.getElementsByClassName('nValue')[0]; //Variable que contendrá el Offset, el valor de N, el cual indica el usuario

parseInt(nOffSet1);

document.getElementsByClassName('buttonCipher').addEventListener('click', cipher.encode(texto,nOffSet1));
document.getElementsByClassName('buttonDecipher').addEventListener('click', cipher.decode(texto,nOffSet1));







