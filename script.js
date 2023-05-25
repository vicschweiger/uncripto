var textArea = document.querySelector(".text-area");
var mensagem = document.querySelector(".mensagem");

function btnEncriptar() {

    var textoEncriptado = encriptar(textArea.value);
    mensagem.value = textoEncriptado;
    textArea.value = "";
}

function encriptar(mensagemEncriptada) {

    var matrizCodigo = [["e" , "enter"] , ["i" , "imes"] , ["a" , "ai"] , ["o" , "ober"] , ["u" , "ufat"]];
    mensagemEncriptada = mensagemEncriptada.toLowerCase();

    for(var i = 0; i < matrizCodigo.length; i++) {
        if(mensagemEncriptada.includes(matrizCodigo[i][0])) {
            mensagemEncriptada = mensagemEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }
    
    return mensagemEncriptada
}

function btnDesencriptar() {

    var textoDesencriptado = desencriptar(textArea.value);
    mensagem.value = textoDesencriptado;
    textArea.value = "";
}

function desencriptar(mensagemDesencriptada) {

    var matrizCodigo = [["e" , "enter"] , ["i" , "imes"] , ["a" , "ai"] , ["o" , "ober"] , ["u" , "ufat"]];
    mensagemDesencriptada = mensagemDesencriptada.toLowerCase();

    for(var i = 0; i < matrizCodigo.length; i++) {
        if(mensagemDesencriptada.includes(matrizCodigo[i][0])) {
            mensagemDesencriptada = mensagemDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
        }
    }
    
    return mensagemDesencriptada
}

function btnCopiar() {

    var texto = mensagem.value
    mensagem.select();
    document.execCommand('copy');
}