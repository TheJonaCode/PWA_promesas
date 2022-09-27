function sumarUno(numero) {

    var promesa = new Promise((resolve, reject) => {

        if (numero >= 7) {
            reject('Número muy alto');
        }


        setTimeout(function() {
            resolve(numero + 1);
        }, 800);
    });

    return promesa
}


sumarUno(5)
    .then(sumarUno)
    .then(sumarUno)
    .then(sumarUno)
    .then(sumarUno)
    .then(nuevoNumero => {
        console.log(nuevoNumero);
    })
    .catch(error => {
        console.log('Error en promesa');
        console.log(error);
    });