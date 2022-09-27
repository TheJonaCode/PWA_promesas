let img = document.querySelector('img');

fetch('boredape.png')
    .then(res => res.blob())
    .then(image => {
        var imagePath = URL.createObjectURL(image);
        img.src = imagePath;
    })