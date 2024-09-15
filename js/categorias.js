const categorias = [
    {
        imagem: 'imgs/jett.png',
        title: 'GAMES',
        texto: 'Precisa de mais desempenho na hora da jogatina? Te recomendamos as melhores peças sem você se endividar.'
    },
    {
        imagem: 'imgs/laptop.png',
        title: 'PRODUÇÃO',
        texto: 'Foco no trabalho? Tudo bem, rendimento e eficiência energética para trabalhar o quanto quiser.'
    },
    {
        imagem: 'imgs/livro.png',
        title: 'ESTUDOS',
        texto: 'Tem prova chegando? Beleza, monte agora sua principal ferramenta de estudos.'
    }
];

const trocarImagem = document.getElementById('cateImg');
const trocarTitle = document.getElementById('cateTitle');
const trocarTexto = document.getElementById('cateText');
const buttons = document.querySelectorAll('.changeCat button');

let currentIndex = 0;
let intervalId;

function updateContent(index) {
    [trocarImagem, trocarTitle, trocarTexto].forEach(element => {
        element.classList.add('fade');
        element.classList.remove('visible');
    });

    setTimeout(() => {
        const categoria = categorias[index];

        trocarImagem.src = categoria.imagem;
        trocarTitle.textContent = categoria.title;
        trocarTexto.textContent = categoria.texto;

        updateSelectedButton(index);

        [trocarImagem, trocarTitle, trocarTexto].forEach(element => {
            element.classList.remove('fade');
            element.classList.add('visible');
        });
    }, 500);
}

function updateSelectedButton(index) {
    buttons.forEach(button => button.classList.remove('selected'));
    buttons[index].classList.add('selected');
}

function startAutoUpdate() {
    intervalId = setInterval(() => {
        currentIndex = (currentIndex + 1) % categorias.length;
        updateContent(currentIndex);
    }, 5000);
}

function resetInterval() {
    clearInterval(intervalId);
    startAutoUpdate();
}

buttons.forEach((button, index) => {
    button.addEventListener('click', () => {
        currentIndex = index;
        updateContent(index);
        resetInterval();
    });
});

updateContent(currentIndex);

startAutoUpdate();