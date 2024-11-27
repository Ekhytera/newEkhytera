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
            <p class="sup">Postado às ${this.hr}</p>
        </div>`;
    }
}

const noticias = document.querySelector('.container-noticias');
const not = localStorage.getItem('noticias')
const listNot = JSON.parse(not)

listNot.forEach((noticia) => {
    const news = new CreateCard(noticia.title, noticia.link, noticia.image_url, noticia.pubDate);
    noticias.innerHTML += news.cardNews();
});

let userAtual = sessionStorage.getItem('userLogado');
document.querySelectorAll('.likeIcon').forEach((el, i) => {
    el.addEventListener("click", () => {
        const likeCount = document.querySelectorAll('.likeCount')
        if (userAtual) {
            if(!el.classList.contains('like')){
                el.classList.add('like');
                likeCount[i].innerHTML = parseInt(likeCount[i].innerHTML)+ 1;
                clickLike = 0;
            }
            else{
                el.classList.remove('like');
                likeCount[i].innerHTML = parseInt(likeCount[i].innerHTML)- 1;
                clickLike = 1;
            }
        } else {
            modal.classList.remove('hide')
        }
    });
});

document.querySelectorAll('.share').forEach((el, i) => {
    const shareCount = document.querySelectorAll('.shareCount');
    el.addEventListener('click', async () => {
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
                        shareCount[i].innerHTML++;
                    }
                } catch (error) {
                    console.error('Erro ao compartilhar:', error);
                }
            } else {
                alert('Função de compartilhar não suportada pelo navegador.')
            }
    })
})