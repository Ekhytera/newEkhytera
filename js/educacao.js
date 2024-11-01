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
            <div class="img">
                <img src="${this.img}" alt="${this.title}" width="200px">
            </div>
            <h4><a href="${this.link}" target="_blank">${this.title}</a></h4>
        </div>
        <hr>`;
        return card
    }
}

const noticias = document.querySelector('.container-noticias');
const destaques = document.querySelector('.posts-destaques');

const apiKey = 'pub_579622e53f99c5ff7ce852fa6cdb335a1a447';


async function getNews() {
    const url = `https://newsdata.io/api/1/latest?country=br&category=technology&apikey=${apiKey}`;
    const resp = await fetch(url);
    const dados = await resp.json();

    console.log(dados)

    for (let i = 0; i <= 10; i++) {
        const news = new CreateCard(dados.results[i].title, dados.results[i].link, dados.results[i].image_url, dados.results[i].pubDate.slice(11, 19))
        const key = dados.results[i].keywords.map(item => item);

        const keyNoticias = ['notícias']
        const contem = keyNoticias.every(item => key.includes(item))
        
        if(contem){
            noticias.innerHTML += news.cardNews()
        } else{
            destaques.innerHTML += news.cardDestaque()
        }
    }

}
getNews()


