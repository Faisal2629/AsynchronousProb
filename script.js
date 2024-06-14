const movieImages = [
    'https://media.timeout.com/images/105903326/750/422/image.jpg?text=Movie+1',
    'https://5.imimg.com/data5/CO/IP/MQ/SELLER-30220222/bollywood-wall-poster-500x500.jpg?text=Movie+2',
    'https://cms-article.forbesindia.com/media/images/2022/Dec/img_199441_riseofsouthcinema_bg.jpg?text=Movie+3',
    'https://static.javatpoint.com/top10-technologies/images/top-10-south-indian-movies6.png?text=Movie+4',
    'https://img.paisawapas.com/ovz3vew9pw/2022/11/11175636/Rectangle-1Top-Hollywood-Thriller-Movies.png?text=Movie+5'
    
];

let currentIndex = 0;

const slideshow = document.getElementById('slideshow');

function showNextImage() {
    slideshow.src = movieImages[currentIndex];
    currentIndex = (currentIndex + 1) % movieImages.length;
}

showNextImage();
setInterval(showNextImage, 2000);
