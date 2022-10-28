let Numeros = prompt("¿Cantidad de numeros: ?");
let Lista_Numeros = 0;

let numero = 0;

document.write(`<h1>Cantidad de Numeros Perfectos</h1>`);
document.write(`<h2>Numeros Encontrados: ${Numeros}</h2>`)
while (Numeros != Lista_Numeros){
    numero = numero + 1;
    let sumatoria = 0;

    for (let i = 1; i < numero; i++){
        if(numero % i == 0 ){
            sumatoria = sumatoria + i;
        };
    };
    if (sumatoria == numero) {
        document.write(numero + "<br>");
        Lista_Numeros = Lista_Numeros + 1;
    };
}