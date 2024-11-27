const divNoticias = document.querySelector('.destaques')

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
    divNoticias.innerHTML = '';

    for (let i = 0; i < 2; i++) {
        divNoticias.innerHTML +=
            `<div class="noticias">
                <a href = "${newsList[i].link}" target="_blank">
                    <img src="${newsList[i].image_url}" alt="${newsList[i].title}" class="logoNot">
                    <p class="linkNot">${newsList[i].title}</p>
                </a>
            </div>`
    }
}

getNews()