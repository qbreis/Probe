function loadImage(url) { // function to load an image
    return new Promise(resolve => { // returns promise
        const image = new Image(); // create image instance
        image.addEventListener('load', () => { // attach to image load event listener
            // load event fires when image is downloaded
            resolve(image); //resolve promise with the image itself
        });
        image.src = url; // In order to activate image downloaded
    });
}

const canvas = document.getElementById('screen');
const context = canvas.getContext('2d');



loadImage('/images/new-green-deck-a-in-progress.svg')
.then(image => {
    context.drawImage(image, 
        0, 0, 150, 150, // subset 
        0, 0, 640, 640 // where 
    );

    

    for(let i = 0;i < 15;i++) {
        for(let j = 0;j < 15;j++) {
            if(j % 2) {
                if(i % 2) {
                    context.fillStyle = 'rgb(255, 165, 0, .2)';
                } else {
                    context.fillStyle = 'rgb(255, 0, 165, .2)';
                }
                context.fillRect(i * 42.66, j * 42.66, 42.66, 42.66);
            } else {
                if(i % 2) {
                    context.fillStyle = 'rgb(255, 0, 165, .2)';
                } else {
                    context.fillStyle = 'rgb(255, 165, 0, .2)';
                }
                context.fillRect(i * 42.66, j * 42.66, 42.66, 42.66);
            }
        }
    }

});

