fetch('no-encontrado.html')
    .then(res => res.text())
    .then(html => {

        let body = document.querySelector('body');
        body.innerHTML = html;
    })
    .catch(error => {
        console.log('Error en la peticion');
        console.log(error);
    });