let softwares = ['./imgsCarrossel/produtividade/afterCar.jpg', './imgsCarrossel/produtividade/blenderCar.png', './imgsCarrossel/produtividade/discordCar.webp', './imgsCarrossel/produtividade/excelCar.svg', './imgsCarrossel/produtividade/notionCar.png', './imgsCarrossel/produtividade/photoCar.jpg', './imgsCarrossel/produtividade/vegasCar.png'];

let gameImages = [
    './imgsCarrossel/csgoCar.png', './imgsCarrossel/fortniteCar.jpeg', './imgsCarrossel/gtavCar.jpg',
    './imgsCarrossel/hollowkCar.webp', './imgsCarrossel/leagueCar.webp', './imgsCarrossel/minecraftCar.jpg',
    './imgsCarrossel/nfsCar.webp', './imgsCarrossel/reddeadCar.jpg', './imgsCarrossel/robloxCar.jpg',
    './imgsCarrossel/rocketleagueCar.jpeg', './imgsCarrossel/thesims4Car.webp', './imgsCarrossel/valorantCar.webp'
];

let selectedArray = gameImages;

const jogos = document.getElementById('jogos');
const prod = document.getElementById('produtividade');

prod.addEventListener('click', () => {
    jogos.classList.remove('selected');
    prod.classList.add('selected');
    selectedArray = softwares;
    updateCarousel();
});

jogos.addEventListener('click', () => {
    prod.classList.remove('selected');
    jogos.classList.add('selected');
    selectedArray = gameImages;
    updateCarousel();
})

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
        const imageIndex = (index + i) % selectedArray.length;
        box.style.backgroundImage = `url(${selectedArray[imageIndex]})`;
    });
}

updateCarousel();

rightArrow.addEventListener('click', () => {
    index = (index + 1) % selectedArray.length;
    updateCarousel();
});

leftArrow.addEventListener('click', () => {
    index = (index - 1 + selectedArray.length) % selectedArray.length;
    updateCarousel();
});