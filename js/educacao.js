class CreateCard {
    constructor(t, l, i, h) {
        this.title = t;
        this.link = l;
        this.img = i;
        this.hr = h;
    }

    cardNews() {
        return `
        <div class="posts-noticias">
            <div class="img">
                <img src="${this.img}" alt="${this.title}" width="200px">
            </div>
            <h4><a href="${this.link}" target="_blank">${this.title}</a></h4>
            <p class="sup">Hora da postagem: ${this.hr}</p>
        </div>`;
    }
}

const noticias = document.querySelector('.container-noticias');
// const apiKey = 'pub_579622e53f99c5ff7ce852fa6cdb335a1a447';
const apiKey = 'pub_578735429f4fc6aeda0faf6e4e3fd66085b40';

async function getNews() {
    const storedNews = JSON.parse(localStorage.getItem('noticias'));
    const lastFetchDate = localStorage.getItem('lastFetchDate');
    const today = new Date().toISOString().split('T')[0];

    if (storedNews && lastFetchDate === today) {
        renderNews(storedNews);
        return;
    }

    const url = `https://newsdata.io/api/1/latest?country=br&category=technology&apikey=${apiKey}`;
    const resp = await fetch(url);
    const dados = await resp.json();

    if (!dados.results) return;

    const listaDeNoticias = dados.results.slice(0, 10).map(noticia => ({
        title: noticia.title,
        link: noticia.link,
        image_url: noticia.image_url,
        pubDate: noticia.pubDate.slice(11, 19)
    }));

    localStorage.setItem('noticias', JSON.stringify(listaDeNoticias));
    localStorage.setItem('lastFetchDate', today);

    renderNews(listaDeNoticias);
}

function renderNews(newsList) {
    noticias.innerHTML = '';

    newsList.forEach((noticia) => {
        const news = new CreateCard(noticia.title, noticia.link, noticia.image_url, noticia.pubDate);
        noticias.innerHTML += news.cardNews();
    });
}

getNews();

document.querySelectorAll('.likeIcon').forEach((el, i) => {
    let userAtual = sessionStorage.getItem('userLogado');
    el.addEventListener("click", () => {
        const likeCount = document.querySelectorAll('.likeCount')
        if (userAtual) {
            el.classList.add('like');
            likeCount[i].innerHTML++;
            likeCount[i].classList.add('like');
        }
    });
});