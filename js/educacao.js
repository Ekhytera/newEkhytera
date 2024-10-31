class CreateCard {
    constructor(t, l, i, h) {
        this.title = t;
        this.link = l;
        this.img = i;
        this.hr = h;
    }

    cardNews() {
        const card =
        `<div class="posts-noticias">
            <div class="img">
                <img src="${this.img}" alt="${this.title}" width="200px">
            </div>
            <h4><a href="${this.link}" target="_blank">${this.title}</a></h4>
            <p class="sup">Hora da postagem: ${this.hr}</p>
        </div>
        <hr>`;
        return card
    }
    cardDestaque(){
        const card = 
        `<div class="posts-noticias">
            <div>
                <img src="${this.img}" alt="${this.title}" width="200px>
            </div>
            <h4><a href="${this.link}" target="_blank">${this.title}</a></h4>
        </div>
        <hr>`;
        return card
    }
}

const noticias = document.querySelector('.container-noticias');
const destaques = document.querySelector('.posts-destaques');

const apiKey = 'pub_5787380025aa0f26c2a8490b0ac61475ea7b8';


async function getNews() {
    const url = `https://newsdata.io/api/1/latest?country=br&category=technology&apikey=${apiKey}`;
    const resp = await fetch(url);
    const dados = await resp.json();

    console.log(dados)

    for (let i = 0; i <= 10; i++) {
        const news = new CreateCard(dados.results[i].title, dados.results[i].link, dados.results[i].image_url, dados.results[i].pubDate.slice(11, 19))
        const key = dados.results[i].keywords.map(item => item);
        // console.log(key)

        const keyNoticias = ['notícias', 'games']
        const contem = keyNoticias.every(item => key.includes(item))
        
        if(contem){
            destaques.innerHTML += news.cardDestaque()
        } else{
            noticias.innerHTML += news.cardNews()
        }
    }

}
getNews()


