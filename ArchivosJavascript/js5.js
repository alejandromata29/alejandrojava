// Calculadora
function calculadora(numero1, numero2, operacion) {
    let resultado = 0;
    switch (operacion) {
        case '+':
            resultado = numero1 + numero2;
            break;
        case '-':
            resultado = numero1 - numero2;
            break;
        case 'x':
            resultado = numero1 * numero2;
            break;
        case '/':
            resultado = numero1 / numero2;
            break;
        
    }
    return resultado;
}

function calcular() {
    let numero1 = 
    parseInt(document.getElementById("primernumero").value);
    let numero2 = 
    parseInt(document.getElementById("segundonumero").value);
    let operacion = 
    document.getElementById("operacion").value;
    let resultado_operacion =
    document.getElementById("resultado");
    resultado_operacion.value = calculadora(numero1, numero2, operacion);
}

// Generar tabla

function generar_tabla (numero, tipodetabla, longitudtabla) {
    let tablafinal = [];
    switch (parseInt(tipodetabla)) {
        case 1:
            for (i=0; i<= longitudtabla; i++) {
                tablafinal.push(`${numero} x ${i} = ${numero*i}`);
            }
            break;
        case 2:
            for (i=longitudtabla+1; i> 0; i--) {
                tablafinal.push(`${numero} x ${i} = ${numero*i}`);
            }
            break
    }
    return tablafinal;
}

function crear_Tabla() {
    document.getElementById("tabla").innerHTML = "";
    let numero = 
    parseInt(document.getElementById("numero").value);
    console.log(numero);

    let tipo = 
    document.getElementById("tipo").value;
    
    let longitud = 
    parseInt(document.getElementById("longitud").value);

    let tabla_obtenida = generar_tabla(numero, tipo, longitud);

    let lugar_a_colocar = document.getElementById("tabla");

    for (i=1; i< tabla_obtenida.length; i++) {
        lugar_a_colocar.innerHTML += tabla_obtenida[i];
        lugar_a_colocar.innerHTML += "<br>"
    }
}