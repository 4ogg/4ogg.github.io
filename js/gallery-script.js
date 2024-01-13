document.addEventListener('DOMContentLoaded', function() {
    const images = [
        { 
            src: 'https://i.ibb.co/6P0c0YH/annihilation.png', 
            title: 'Annihilation', 
            desc: 'Got a lot on my mind' 
        },
        { 
            src: 'https://i.ibb.co/jDYdbtj/crown.png', 
            title: 'Crown', 
            desc: 'Time is a flat circle' 
        },

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

