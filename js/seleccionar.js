var botonEncriptar = document.querySelector(".encrip-btn");
var botonDesencriptar = document.querySelector(".desencrip-btn");
var resultado = document.querySelector (".result");
var titulo = document.querySelector(".title");
var parrafo = document.querySelector(".ingr");
var botonCopiar = document.querySelector(".copy-btn");

botonEncriptar.onclick = encriptar;
botonDesencriptar.onclick = desencriptar;


//Selección de Texto

function encriptar(){
    ocultarTexto();
    resultado.textContent = encriptarTexto(recuperarTexto());
    return false; 
}

function desencriptar(){
    ocultarTexto();
    resultado.textContent = desencriptarTexto(recuperarTexto()); 
    return false;
}

function recuperarTexto(){
    var texto = document.querySelector(".text");
    return texto.value;
}

function ocultarTexto (){
    titulo.classList.add("ocultar");
    parrafo.classList.add("ocultar");
}


//Encriptar - Desencriptar

function encriptarTexto(mensaje){
    var texto = mensaje;
    var textoEncript = "";

    for (var i = 0; i < texto.length; i++){
        if(texto[i] == "a"){
            textoEncript = textoEncript + "ai";
        }
        else if(texto[i] == "e"){
            textoEncript = textoEncript + "enter";
        }
        else if(texto[i] == "i"){
            textoEncript = textoEncript + "imes";
        }
        else if(texto[i] == "o"){
            textoEncript = textoEncript + "ober";
        }
        else if(texto[i] == "u"){
            textoEncript = textoEncript + "ufat";
        }
        else {
            textoEncript = textoEncript + texto[i];
        }
    }
    return textoEncript;
}

function desencriptarTexto(mensaje){
    var texto = mensaje;
    var textoDesencript = "";

    for (var i = 0; i < texto.length; i++){
        if(texto[i] == "a"){
            textoDesencript = textoDesencript + "a";
            i = i+1;
        }
        else if(texto[i] == "e"){
            textoDesencript = textoDesencript + "e";
            i = i+4;
        }
        else if(texto[i] == "i"){
            textoDesencript = textoDesencript + "i";
            i = i+3;
        }
        else if(texto[i] == "o"){
            textoDesencript = textoDesencript + "o";
            i = i+3;
        }
        else if(texto[i] == "u"){
            textoDesencript = textoDesencript + "u";
            i = i+3;
        }
        else {
            textoDesencript = textoDesencript + texto[i];
        }
    }
    return textoDesencript;
}
