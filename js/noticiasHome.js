const noticias = localStorage.getItem('noticias')
const listNot = JSON.parse(noticias)

const divNoticias = document.querySelector('.destaques')
for (let i=0;i<2;i++){
    divNoticias.innerHTML += 
    `<div class="noticias">
        <a href = "${listNot[i].link}" target="_blank">
            <img src="${listNot[i].image_url}" alt="${listNot[i].title}" class="logoNot">
            <p class="linkNot">${listNot[i].title}</p>
        </a>
        </div>`
}