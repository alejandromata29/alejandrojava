
alert("Consultar procedimiento en la terminal de javascript");

let hora_de_inicio = 11;
console.log(`Hora inicial: ${hora_de_inicio}`);

let Pastilla_diaria = 7;
console.log(`Frecuencia: ${Pastilla_diaria}`);

let Veces_por_tomar = 12;
console.log(`Cantidad: ${Veces_por_tomar}`);

let hora = hora_de_inicio;

for (i = 1; i <= Veces_por_tomar; i++) {
    if (hora > 23) {
        hora =hora- 24;
    }
    console.log("toma" + " " + i + " " + hora + ":00");
    hora += Pastilla_diaria;
}