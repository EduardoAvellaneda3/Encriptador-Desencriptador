var textoEntrada = document.querySelector(".texto__entrada");
var textoSalida = document.querySelector(".texto__salida");

function encriptar() {

    var texto = verificarMinusculas(textoEntrada.value);
    var resultado = encriptarVocales(texto);
    textoSalida.value = resultado;

    ocultar();
}
function desencriptar() {

    var texto = verificarMinusculas(textoEntrada.value);
    var resultado = desencriptarVocales(texto);
    textoSalida.value = resultado;

    ocultar();
}

function verificarMinusculas(texto) {
    var regex = /^[a-z\s]+$/;
    if (regex.test(texto)) {
        return texto;
    } else {
        alert("Texto inválido, verifique su texto.");
    }
}

function encriptarVocales(texto) {
    const transformaciones = {
        'a': 'ai',
        'e': 'enter',
        'i': 'imes',
        'o': 'ober',
        'u': 'ufat'
    };

    return texto.replace(/[a,e,i,o,u]/g, letra => transformaciones[letra]);
}

function desencriptarVocales(texto) {
    const transformaciones = {
        'ai': 'a',
        'enter': 'e',
        'imes': 'i',
        'ober': 'o',
        'ufat': 'u'
    };

    return texto.replace(/ai|enter|imes|ober|ufat/g, Match => transformaciones[Match]);
}

function copiarTexto() {
    const texto = document.getElementById("texto__salida").value;
    navigator.clipboard.writeText(texto);
    alert("Texto copiado")
    mostrar();
    
}

function ocultar() {
    document.querySelector('#texto__entrada').value = '';
    document.querySelector('.texto1').style.display = 'none';
    document.querySelector('.texto2').style.display = 'none';
    document.querySelector('.imagen__buscar').style.display = 'none';
    document.querySelector('.copiar').style.display = 'block';

}

function mostrar() {
    document.querySelector('#texto__entrada').value = '';
    document.querySelector('#texto__salida').value = '';
    document.querySelector('.texto1').style.display = 'block';
    document.querySelector('.texto2').style.display = 'block';
    document.querySelector('.imagen__buscar').style.display = 'block';
    document.querySelector('.copiar').style.display = 'none';
}




