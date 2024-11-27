const redesHTML = `
            <div class="redes">
                <a href="" target="_blank"><i class="fa-brands fa-instagram"></i></a>
                <a href="" target="_blank"><i class="fa-brands fa-linkedin"></i></a>
                <a href="" target="_blank"><i class="fa-brands fa-github"></i></a>
            </div>`;

const membros = [...document.querySelectorAll('.membros')];

const henrique = `
    <div class="redes">
        <a href="" target="_blank"><i class="fa-brands fa-instagram"></i></a>
        <a href="" target="_blank"><i class="fa-brands fa-linkedin"></i></a>
        <a href="https://github.com/henriqfranco" target="_blank"><i class="fa-brands fa-github"></i></a>
    </div>`

const joao = `
    <div class="redes">
        <a href="https://www.instagram.com/joaogabriel3871" target="_blank"><i class="fa-brands fa-instagram"></i></a>
        <a href="" target="_blank"><i class="fa-brands fa-linkedin"></i></a>
        <a href="https://github.com/JoaodeAlcantara" target="_blank"><i class="fa-brands fa-github"></i></a>
    </div>`

const savyo = `
    <div class="redes">
        <a href="" target="_blank"><i class="fa-brands fa-instagram"></i></a>
        <a href="" target="_blank"><i class="fa-brands fa-linkedin"></i></a>
        <a href="https://github.com/SavyoAndrade" target="_blank"><i class="fa-brands fa-github"></i></a>
    </div>`

const rian = `
    <div class="redes">
        <a href="" target="_blank"><i class="fa-brands fa-instagram"></i></a>
        <a href="" target="_blank"><i class="fa-brands fa-linkedin"></i></a>
        <a href="https://github.com/riandutra7" target="_blank"><i class="fa-brands fa-github"></i></a>
    </div>`

const evelyn = `
    <div class="redes">
        <a href="" target="_blank"><i class="fa-brands fa-instagram"></i></a>
        <a href="" target="_blank"><i class="fa-brands fa-linkedin"></i></a>
        <a href="https://github.com/evelynalmm" target="_blank"><i class="fa-brands fa-github"></i></a>
    </div>`

const pedro = `
    <div class="redes">
        <a href="" target="_blank"><i class="fa-brands fa-instagram"></i></a>
        <a href="" target="_blank"><i class="fa-brands fa-linkedin"></i></a>
        <a href="https://github.com/pmab06" target="_blank"><i class="fa-brands fa-github"></i></a>
    </div>`

const luiz = `
    <div class="redes">
        <a href="" target="_blank"><i class="fa-brands fa-instagram"></i></a>
        <a href="" target="_blank"><i class="fa-brands fa-linkedin"></i></a>
        <a href="https://github.com/LuizCaid" target="_blank"><i class="fa-brands fa-github"></i></a>
    </div>`


membros.forEach((el, i) => {
    if (!el.querySelector('.redes')) {
        const redes = document.createElement('div');
        if(i == 0){
            redes.innerHTML = henrique;
            el.appendChild(redes);
        }
        if (i == 1) {
            redes.innerHTML = joao;
            el.appendChild(redes);
        }
        if (i == 2) {
            redes.innerHTML = savyo;
            el.appendChild(redes);
        }
        if (i == 3) {
            redes.innerHTML = rian;
            el.appendChild(redes);
        }
        if (i == 4) {
            redes.innerHTML = evelyn;
            el.appendChild(redes);
        }
        if (i == 5) {
            redes.innerHTML = pedro;
            el.appendChild(redes);
        }
        if (i == 6) {
            redes.innerHTML = luiz;
            el.appendChild(redes);
        }

    }

    el.addEventListener('mouseenter', () => {
        const redes = el.querySelector('.redes');
        redes.style.display = 'flex';
    });

    el.addEventListener('mouseleave', () => {
        const redes = el.querySelector('.redes');
        redes.style.display = 'none';
    });
});
