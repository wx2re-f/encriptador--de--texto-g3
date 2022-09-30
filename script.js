const entradaDeTexto = document.querySelector(".input-texto")
const mensaje = document.querySelector(".mensaje")

function botonEncriptar(){
    const textoEncriptado = encriptar(entradaDeTexto.value)
    mensaje.value = textoEncriptado;
    mensaje.style.backgroundImage = "none"
    entradaDeTexto.value = ""
}

function encriptar(mensajeEncriptado){
    var codigoMatriz = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];

    mensajeEncriptado = mensajeEncriptado.toLowerCase();

    for( let i = 0; i < codigoMatriz.length; i++){
        if(mensajeEncriptado.includes(codigoMatriz[i][0])){
            mensajeEncriptado = mensajeEncriptado.replaceAll(codigoMatriz[i][0],codigoMatriz[i][1])
        }
    }
    return mensajeEncriptado;
}

function botonDesencriptar(){
    const textoEncriptado = desencriptar(entradaDeTexto.value)
    mensaje.value = textoEncriptado;
    entradaDeTexto.value = ""
}

function desencriptar(mensajeDesencriptado) {
    var codigoMatriz = [["a", "ai"], ["e", "enter"], ["i", "imes"], ["o", "ober"], ["u", "ufat"]];

    mensajeDesencriptado = mensajeDesencriptado.toLowerCase();

    for( let i = 0; i < codigoMatriz.length; i++){
        if(mensajeDesencriptado.includes(codigoMatriz[i][1])){
            mensajeDesencriptado = mensajeDesencriptado.replaceAll(codigoMatriz[i][1],codigoMatriz[i][0])
        }
    }
    return mensajeDesencriptado;
}

function copiar(){
    mensaje.select()
    navigator.clipboard.writeText(mensaje.value)
    mensaje.value = ""
    alert("El texto se ha copiado con éxito");
}
