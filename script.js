document.addEventListener('DOMContentLoaded', function() {
    loadImages();
});

function loadImages() {
    const gallery = document.getElementById('imageGallery');

    // List of image URLs
    const images = [
        'images/1.png',
        'images/2.png',
        'images/3.png',
        'images/4.png',
        // Add more image paths here
    ];

    images.forEach(imgSrc => {
        let img = document.createElement('img');
        img.src = imgSrc;
        img.alt = 'Gallery Image';
        gallery.appendChild(img);
    });
}

function searchImages() {
    let input = document.getElementById('searchInput');
    let filter = input.value.toUpperCase();
    let gallery = document.getElementById('imageGallery');
    let imgs = gallery.getElementsByTagName('img');

    for (let i = 0; i < imgs.length; i++) {
        let img = imgs[i];
        let txtValue = img.alt || img.src;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            imgs[i].style.display = "";
        } else {
            imgs[i].style.display = "none";
        }
    }
}