window.cipher = {

  encode: (nOffSet, text) => {
    let letterInicial= ''; //Variable tipo string que almacenara el texto codificado
    let letterAscii; //variable que almacenara la letra que provenia de su numero ascii
    let numberAscii; //variable que contendrá el numero ascii que le corresponde a cada caracter del texto a codificar
    let indice = 0; // variable que indica el indice de un caracter dentro del texto a codificar
    let charCounter = 0; // variable que contará el número de caracteres en el texto a codificar. Su finalidad es que cuando que cuando esta variable iguale el numero de caracteres del texto, el bucle se romperá
    let textToConverte = text;
    nOffSet = nOffSet%26;
    while ( textToConverte.length !== charCounter){
      numberAscii = textToConverte.charCodeAt(indice);
      if(numberAscii>=65 && numberAscii<=90){
        if(numberAscii+nOffSet>90){
          letterAscii = String.fromCharCode(numberAscii + nOffSet - 26);
          }else{
          letterAscii = String.fromCharCode(numberAscii + nOffSet);
          }
      } else {
          if(numberAscii>=97 && numberAscii<=122){
             if(numberAscii+nOffSet>122){
              letterAscii = String.fromCharCode(numberAscii + nOffSet - 26);
              }else{
              letterAscii = String.fromCharCode(numberAscii + nOffSet);
              }
          }else {
            letterAscii = textToConverte.charAt(indice);
            }
      }

      letterInicial = letterInicial.concat(letterAscii);
      charCounter ++;
      indice ++;
    }
    
    return letterInicial;
  },

  decode: (nOffSet, text) => {
    let letterInicial= ''; 
    let letterAscii; 
    let numberAscii; 
    let indice = 0; 
    let charCounter = 0; 
    let textToConverte = text;
    nOffSet = nOffSet%26;
    while ( textToConverte.length !== charCounter){
      numberAscii = textToConverte.charCodeAt(indice);
      if(numberAscii>=65 && numberAscii<=90){
        if(numberAscii-nOffSet<65){
          letterAscii = String.fromCharCode(numberAscii - nOffSet + 26);
          }else{
          letterAscii = String.fromCharCode(numberAscii - nOffSet);
          }
      } else {
          if(numberAscii>=97 && numberAscii<=122){
             if(numberAscii-nOffSet<97){
              letterAscii = String.fromCharCode(numberAscii - nOffSet + 26);
              }else{
              letterAscii = String.fromCharCode(numberAscii - nOffSet);
              }
          }else {
            letterAscii = textToConverte.charAt(indice);
            }
      }

      letterInicial = letterInicial.concat(letterAscii);
      charCounter ++;
      indice ++;
    }
    return letterInicial;
  },

  createCipherWithOffset: (nOffSet) => {
    let cipherAndDecipher = {
         encode: (text) => cipher.encode(nOffSet,text),
         decode: (text) => cipher.decode(nOffSet,text)    
    }
    return cipherAndDecipher;
  }
};
