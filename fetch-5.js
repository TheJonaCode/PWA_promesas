fetch('https://reqres.in/api/users/1')
    .then(res => {
        res.clone().json()
            .then(usuario => console.log(usuario.data));

        res.clone().json()
            .then(usuario => console.log(usuario.data));

        res.json()
            .then(usuario => console.log(usuario.data));
    });