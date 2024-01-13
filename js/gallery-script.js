document.addEventListener('DOMContentLoaded', function() {

 const images = [
        { src: 'https://i.ibb.co/6P0c0YH/annihilation.png', title: 'Annihilation', desc: 'Got a lot on my mind' },
        { src: 'https://i.ibb.co/jDYdbtj/crown.png', title: 'Crown', desc: 'Time is a flat circle' },
        { src: 'https://i.ibb.co/MfRZGPy/shadow.png', title: 'Shadow', desc: 'I got your back' },
        { src: 'https://i.ibb.co/HxmX0Vt/Smoke.png', title: 'Smoke', desc: 'Bad for your health' },
        { src: 'https://i.ibb.co/QXtJDvq/Gradient.png', title: 'Gradient', desc: 'Oh, this is a nice change of pace' },
		{ src: 'https://i.ibb.co/V26GtZ9/static.png', title: 'Static', desc: 'This guy again?' },
        { src: 'https://i.ibb.co/GJDDV4x/vision.png', title: 'Vision', desc: 'See no evil' },
        { src: 'https://i.ibb.co/DW9bHpM/Entity.png', title: 'Entity', desc: 'So this is what was in the dark corner' },	
		
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