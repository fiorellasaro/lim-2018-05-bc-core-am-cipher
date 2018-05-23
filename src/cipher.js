window.cipher = {

  encode: (text, nOffSet) => {
    let letterInicial = ''; //Variable tipo string que almacenara el texto codificado
    let letterAscii; //variale que almacenara la letra que provenia de su numero ascii
    let numberAscii; //variable que contendrá el numero ascii que le corresponde a cada caracter del texto a codificar
    let indice = 0; // variable que indica el indice de un caracter dentro del texto a codificar
    let charCounter = 0; // variable que contará el número de caracteres en el texto a codificar. Su finalidad es que cuando que cuando esta variable iguale el numero de caracteres del texto, el bucle se romperá
    
    while (text.length !== charCounter){
    numberAscii = text.charCodeAt(indice);
    letterAscii = String.fromCharCode(numberAscii+nOffSet);
    letterInicial = letterInicial.concat(letterAscii);
    charCounter ++;
    indice ++;
    }
    alert(letterInicial);
    },

  decode: (text, nOffSet) => {
    let letterInicial = ''; //Variable tipo string que almacenara el texto codificado
    let letterAscii; //variale que almacenara la letra que provenia de su numero ascii
    let numberAscii; //variable que contendrá el numero ascii que le corresponde a cada caracter del texto a codificar
    let indice = 0; // variable que indica el indice de un caracter dentro del texto a codificar
    let charCounter = 0; // variable que contará el número de caracteres en el texto a codificar. Su finalidad es que cuando que cuando esta variable iguale el numero de caracteres del texto, el bucle se romperá
    
    while (text.length !== charCounter){
    numberAscii = text.charCodeAt(indice);
    letterAscii = String.fromCharCode(numberAscii-nOffSet);
    letterInicial = letterInicial.concat(letterAscii);
    charCounter ++;
    indice ++;
    }
    }
};
