document.addEventListener('DOMContentLoaded', function() {

 const images = [
        { src: 'https://i.ibb.co/6P0c0YH/annihilation.png', title: 'Annihilation', desc: 'Got a lot on my mind' },
        { src: 'https://i.ibb.co/jDYdbtj/crown.png', title: 'Crown', desc: 'Time is a flat circle' },
        { src: 'https://i.ibb.co/MfRZGPy/shadow.png', title: 'Shadow', desc: 'I got your back' },
        { src: 'https://i.ibb.co/MCz4pwH/Smoke.png', title: 'Smoke', desc: 'Bad for your health' },
        { src: 'https://i.ibb.co/QXtJDvq/Gradient.png', title: 'Gradient', desc: 'Oh, this is a nice change of pace' },
		{ src: 'https://i.ibb.co/V26GtZ9/static.png', title: 'Static', desc: 'This guy again?' },
        { src: 'https://i.ibb.co/GJDDV4x/vision.png', title: 'Vision', desc: 'See no evil' },
        { src: 'https://i.ibb.co/DW9bHpM/Entity.png', title: 'Entity', desc: 'So this is what was in the dark corner' },
        { src: 'https://i.ibb.co/Q6b2Zxp/Heat.png', title: 'Heat', desc: 'Bet your bottom dollar' },	
        { src: 'https://i.ibb.co/m6G7GjG/Wear.png', title: 'Wear', desc: 'Keep your priceless marble statues indoors' },
        { src: 'https://i.ibb.co/gDHMc91/swamp.png', title: 'Swamp', desc: 'No better place for a bath' },
        { src: 'https://i.ibb.co/BtNFQJM/Misplaced.png', title: 'Misplaced', desc: 'Dress for the job you want, not the one you have' },
        { src: 'https://i.ibb.co/M2DWLPN/Fracture.png', title: 'Fracture', desc: 'This is why your mom always made you wear sunblock' },
        { src: 'https://i.ibb.co/VJCmgKh/Intent.png', title: 'Intent', desc: 'Who put this here?' },
        { src: 'https://i.ibb.co/xMjcRMF/Mirror.png', title: 'Mirror', desc: 'No camera in the reflection? Damn AI...' },
		
        // Add more images as needed
    ];

    let currentIndex = 0;

    function updateImage(index) {
        const imageElement = document.getElementById('gallery-image');
        const titleElement = document.getElementById('image-title');
        const descElement = document.getElementById('image-description');

        imageElement.src = images[index].src;
        titleElement.textContent = images[index].title;
        descElement.textContent = images[index].desc;
    }

    document.getElementById('prev').addEventListener('click', function() {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        updateImage(currentIndex);
    });

    document.getElementById('next').addEventListener('click', function() {
        currentIndex = (currentIndex + 1) % images.length;
        updateImage(currentIndex);
    });

    // Initialize the first image
    updateImage(currentIndex);
});