const gameImages = [
    '/imgsCarrossel/csgoCar.png', '/imgsCarrossel/fortniteCar.jpeg', '/imgsCarrossel/gtavCar.jpg',
    '/imgsCarrossel/hollowkCar.webp', '/imgsCarrossel/leagueCar.webp', '/imgsCarrossel/minecraftCar.jpg',
    '/imgsCarrossel/nfsCar.webp', '/imgsCarrossel/reddeadCar.jpg', '/imgsCarrossel/robloxCar.jpg',
    '/imgsCarrossel/rocketleagueCar.jpeg', '/imgsCarrossel/thesims4Car.webp', '/imgsCarrossel/valorantCar.webp'
];

const boxes = [
    document.getElementById('firstBox'),
    document.getElementById('secondBox'),
    document.getElementById('thirdBox'),
    document.getElementById('forthBox')
];

const leftArrow = document.getElementById('left-arrow');
const rightArrow = document.getElementById('right-arrow');
let index = 0;

function updateCarousel() {
    boxes.forEach((box, i) => {
        const imageIndex = (index + i) % gameImages.length;
        box.style.backgroundImage = `url(${gameImages[imageIndex]})`;
    });
}

updateCarousel();

rightArrow.addEventListener('click', () => {
    index = (index + 1) % gameImages.length;
    updateCarousel();
});

leftArrow.addEventListener('click', () => {
    index = (index - 1 + gameImages.length) % gameImages.length;
    updateCarousel();
});