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
const divisoresV3 = numero => {
    let total = 0;
    for ( i=0 ; i<=numero ; i++) {
        if ( numero % i == 0) {
            total = total + 1;
        }
    }
    return total;
}

function calcular(){
    let numero = 
    parseInt(document.getElementById("num").value);
    console.log(numero);
    document.getElementById("resultado").value = divisores(numero)
}

function mostrarfoto(){
    let n_imagen = parseInt(document.getElementById("numimagen").value);
    
    switch (n_imagen) {
        case 1:
            document.getElementById("foto").src="https://www.cinconoticias.com/wp-content/uploads/Tipos-De-Ciudades.jpg";s
            break
        case 2:
            document.getElementById("foto").src="https://visagov-blog.nyc3.digitaloceanspaces.com/blog/2021/01/20210112095312-o.jpg";
            break
        case 3:
            document.getElementById("foto").src="https://a.storyblok.com/f/112937/568x464/630fa7cdfe/10-fun-facts-about-the-coolest-cities_568x464.jpg/m/620x0/filters:quality(70)/";
            break
        case 4:
            document.getElementById("foto").src="https://media.vogue.mx/photos/5f95db10d3489a2988c5d7b6/1:1/w_2011,h_2011,c_limit/Ciudad-de-Me%CC%81xico-A%CC%81ngel-de-la-Independencia.jpg";
            break
        case 5:
            document.getElementById("foto").src="https://imagenes.elpais.com/resizer/IEGjwPVotygRTQPLVZdnP2TFGbI=/414x0/cloudfront-eu-central-1.images.arcpublishing.com/prisa/U7EWMJXHQBENNG5XNZUY5ITGUY.jpg";
            break       
    }
}