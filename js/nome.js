window.addEventListener('load', () => {
    let sair = sessionStorage.getItem('sair');
    let userAtual = sessionStorage.getItem('userLogado');
    if (userAtual) {
        const nomeUser = document.getElementById('nomeUser');
        nomeUser.innerHTML = userAtual.toUpperCase() + ", ";
        document.getElementById('dropLogin').innerHTML = sair;
    }
})