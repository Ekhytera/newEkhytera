const toggleMenu = document.querySelectorAll('.menuIcon');
const verticalNav = document.querySelector('.verticalNav');
const divInfoUser = document.querySelector('.contorno');
const infoUser = document.querySelector('#infoConta');
const arrow = document.querySelector('#seta');

verticalNav.style.display = 'none';
infoUser.style.display = 'none';

toggleMenu.forEach(e => {
    e.addEventListener('click', (evt) => {
        evt.stopPropagation();

        if (verticalNav.style.display === 'none') {
            verticalNav.style.display = 'block';
        }
        else {
            verticalNav.style.display = 'none';
        }
    })
})

window.addEventListener('resize', () => {
    if (window.innerWidth > 1200) {
        verticalNav.style.display = 'none';
    }
});

window.addEventListener('click', (evt) => {
    if (verticalNav.style.display === 'block' && !verticalNav.contains(evt.target)) {
        verticalNav.style.display = 'none';
    }
})

divInfoUser.addEventListener('click', () => {
    if (infoUser.style.display === 'none') {
        infoUser.style.display = 'block';
        arrow.style.transform = 'rotate(270deg)';
    } else {
        infoUser.style.display = 'none';
        arrow.style.transform = 'rotate(90deg)';
    }
})

