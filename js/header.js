const toggleMenu = document.getElementById('menuIcon');
const verticalNav = document.querySelector('.verticalNav');

verticalNav.style.display = 'none'

toggleMenu.addEventListener('click', () => {
    if(verticalNav.style.display === 'none'){
        verticalNav.style.display = 'block';
    }
    else{
        verticalNav.style.display = 'none';
    }
})