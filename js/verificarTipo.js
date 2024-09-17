window.addEventListener('load', () => {
    const postInput = document.getElementById('writePostInput');
    const userLogado = sessionStorage.getItem('userLogado');
    if (!userLogado) {
        postInput.setAttribute('readonly', 'true');
        postInput.setAttribute('placeholder', 'Faça login ou crie uma conta para fazer postagens.')
    }
})
