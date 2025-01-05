let currentIndex = 0;

function moveRight() {
    const carousel = document.querySelector('.carousel');
    const cards = document.querySelectorAll('.card');
    const cardWidth = cards[0].offsetWidth + 30; // Card width + margin
    const maxScroll = (cards.length - 3) * cardWidth; // Max scroll distance

    if (currentIndex < cards.length - 3) {
        currentIndex++;
    } else {
        currentIndex = 0; // Loop back to start
    }

    carousel.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
}

function moveLeft() {
    const carousel = document.querySelector('.carousel');
    const cards = document.querySelectorAll('.card');
    const cardWidth = cards[0].offsetWidth + 30; // Card width + margin

    if (currentIndex > 0) {
        currentIndex--;
    } else {
        currentIndex = cards.length - 3; // Loop to the end
    }

    carousel.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
}
