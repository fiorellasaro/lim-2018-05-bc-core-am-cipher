window.cipher = {

  encode: (text, nOffSet) => {
    let letterInicial= ''; //Variable tipo string que almacenara el texto codificado
    let letterAscii; //variable que almacenara la letra que provenia de su numero ascii
    let numberAscii; //variable que contendrá el numero ascii que le corresponde a cada caracter del texto a codificar
    let indice = 0; // variable que indica el indice de un caracter dentro del texto a codificar
    let charCounter = 0; // variable que contará el número de caracteres en el texto a codificar. Su finalidad es que cuando que cuando esta variable iguale el numero de caracteres del texto, el bucle se romperá
    while ( text.length !== charCounter){
      numberAscii = text.charCodeAt(indice);
    if(numberAscii>=65 && numberAscii<=90){
        letterAscii = String.fromCharCode((numberAscii - 65 + nOffSet)%26 + 65);
        }else {
          if(numberAscii>=97 && numberAscii<=122){
            letterAscii = String.fromCharCode((numberAscii - 97 + nOffSet)%26 + 97);
          }else{
            letterAscii = String.fromCharCode(numberAscii+nOffSet);//else final, despues de evaluar si son del abecedario (mayusculas o minusculas)
          }
        }

      letterInicial = letterInicial.concat(letterAscii);
      charCounter ++;
      indice ++;
    }
    document.getElementById("TextoAMostrar").value = letterInicial;
    },

  decode: (text, nOffSet) => {
    let letterInicial= ''; //Variable tipo string que almacenara el texto codificado
    let letterAscii; //variable que almacenara la letra que provenia de su numero ascii
    let numberAscii; //variable que contendrá el numero ascii que le corresponde a cada caracter del texto a codificar
    let indice = 0; // variable que indica el indice de un caracter dentro del texto a codificar
    let charCounter = 0; // variable que contará el número de caracteres en el texto a codificar. Su finalidad es que cuando que cuando esta variable iguale el numero de caracteres del texto, el bucle se romperá
    while ( text.length !== charCounter){
      numberAscii = text.charCodeAt(indice);
      if(numberAscii>=65 && numberAscii<=90){
        if(numberAscii - 65 - nOffSet>=0){
          letterAscii = String.fromCharCode((numberAscii - 65 - nOffSet)%26 +65);
        }else{
          letterAscii = String.fromCharCode((numberAscii - 65 - nOffSet)%26 +91);
        }
      }else {
          if(numberAscii>=97 && numberAscii<=122){
            if(numberAscii - 97 - nOffSet>=0){
              letterAscii = String.fromCharCode((numberAscii - 97 - nOffSet)%26 +97);
            }else{
              letterAscii = String.fromCharCode((numberAscii - 97 - nOffSet)%26 +123);
            } 
          }else{
            letterAscii = String.fromCharCode(numberAscii-nOffSet);//else final, despues de evaluar si son del abecedario (mayusculas o minusculas)
          }
        }

      letterInicial = letterInicial.concat(letterAscii);
      charCounter ++;
      indice ++;
    }
    document.getElementById("TextoAMostrar").value = letterInicial;
  }
};
