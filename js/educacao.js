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
            <h3><a href="${this.link}" target="_blank">${this.title}</a></h3>
            <p class="sup">Postado hoje às ${this.hr}</p>
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

// const modal = document.querySelector('.alertModal');
let userAtual = sessionStorage.getItem('userLogado');
document.querySelectorAll('.likeIcon').forEach((el, i) => {
    el.addEventListener("click", () => {
        const likeCount = document.querySelectorAll('.likeCount')
        if (userAtual) {
            el.classList.add('like');
            likeCount[i].innerHTML = parseInt(likeCount[i].innerHTML)+ 1;
            el.classList.add('like');
        } else {
            modal.classList.remove('hide')
        }
    });
});

document.querySelectorAll('.share').forEach((el, i) => {
    const shareCount = document.querySelectorAll('.shareCount');
    el.addEventListener('click', async () => {
        // if (userAtual) {
            if (navigator.share) {
                try {
                    if (i == 0) {
                        await navigator.share({
                            title: 'Computer Organization and Design',
                            text: 'Confira esse livro incrivel sobre arquitetura de computadores!',
                            url:
                            'https://edisciplinas.usp.br/pluginfile.php/7898320/mod_resource/content/1/Computer%20Organization%20and%20Design%205E%20-%20Patterson%20Hennessy%20-%200124077269.pdf'
                        })
                        shareCount[i].innerHTML++
                    } else if (i == 1) {
                        await navigator.share({
                            title: 'Modern Operating Systems',
                            text: 'Confira esse livro incrivel sobre arquitetura de computadores!',
                            url: 'https://www.pearson.com/en-us/subject-catalog/p/modern-operating-systems/P200000003295/9780137618880'
                        })
                        shareCount[i].innerHTML++
                    }
                } catch (error) {
                    console.error('Erro ao compartilhar:', error);
                }
            } else {
                alert('Função de compartilhar não suportada pelo navegador.')
            }
        // } else {
        //     modal.classList.remove('hide')
        // }
    })
})