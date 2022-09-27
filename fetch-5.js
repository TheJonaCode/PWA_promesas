fetch('https://reqres.in/api/users/666')
    .then(resp => {

        if (resp.ok) {
            return resp.json();

        } else {
            throw new Error('No existe ese número de usuario')
        }


    })
    .catch(error => {
        console.log('Error en la petición');
        console.log(error);

    });