const toggleMenu = document.getElementById('menuIcon');
const verticalNav = document.querySelector('.verticalNav');

verticalNav.style.display = 'none'

const threeDotsTab = document.querySelector('.threeDotsTab');

threeDotsTab.style.display = 'none';

toggleMenu.addEventListener('click', () => {
    if (verticalNav.style.display === 'none') {
        verticalNav.style.display = 'block';

        if(threeDotsTab.style.display === 'block'){
            threeDotsTab.style.display = 'none'
        }
    }
    else {
        verticalNav.style.display = 'none';
    }
})

window.addEventListener('resize', () => {
    if (window.innerWidth > 1200) {
        verticalNav.style.display = 'none';
    }
});

// tres pontos aba:

const tresPontos = document.querySelectorAll('.tres').forEach((el) => {
    el.addEventListener('click', () => {
        if (threeDotsTab.style.display === 'none') {
            threeDotsTab.style.display = 'block';

            if (verticalNav.style.display === 'block') {
                verticalNav.style.display = 'none'
            }
        } else {
            threeDotsTab.style.display = 'none'
        }
    })
});
