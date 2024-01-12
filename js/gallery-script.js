document.addEventListener('DOMContentLoaded', function() {
    const images = [
        { 
            src: 'https://i.ibb.co/njxjrXj/annihilation.png', 
            title: 'Annihilation', 
            desc: 'I feel it all the time' 
        },
        { 
            src: 'https://i.ibb.co/jDYdbtj/crown.png', 
            title: 'Crown', 
            desc: 'Closing my eyes until the threat is gone' 
        },
        // Add more images with URLs as needed
    ];

    let currentIndex = 0;

    const imageElement = document.getElementById('gallery-image');
    const titleElement = document.getElementById('image-title');
    const descElement = document.getElementById('image-description');

    function updateImage(index) {
        imageElement.src = images[index].src;
        titleElement.textContent = images[index].title;
        descElement.textContent = images[index].desc;
    }

    document.getElementById('prev').addEventListener('click', function() {
        if (currentIndex > 0) {
            currentIndex--;
            updateImage(currentIndex);
        }
    });

    document.getElementById('next').addEventListener('click', function() {
        if (currentIndex < images.length - 1) {
            currentIndex++;
            updateImage(currentIndex);
        }
    });

    imageElement.addEventListener('click', function() {
        imageElement.classList.toggle('enlarged');
    });

    updateImage(currentIndex); // Initialize gallery
});
