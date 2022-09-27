let usuario = {
    nombre: 'Jonathan',
    edad: 21
};

fetch('https://reqres.in/api/users', {
        method: 'POST',
        body: JSON.stringify(usuario),
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(resp => resp.json())
    .then(data => console.log(data))
    .catch(error => {
        console.log('Error: ' + error);
    });