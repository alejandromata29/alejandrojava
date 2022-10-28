function divisores(numero) {
    let total = 0;
    for ( i=0 ; i<=numero ; i++) {
        if ( numero % i == 0) {
            total = total + 1;
        }
    }
    return total;
}
console.log("Divisores:", divisores(75));
const divisores2 = function(numero){
    let total = 0;
    for ( i=0 ; i<=numero ; i++) {
        if ( numero % i == 0) {
            total = total + 1;
        }
    }
    return total;
}
