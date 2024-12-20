window.addEventListener('DOMContentLoaded', () => {
    let userAtual = sessionStorage.getItem('userLogado');
    let userAtualEmail = sessionStorage.getItem('userEmail');
    let infoConta = document.getElementById('infoConta');
    let infoUser = document.getElementById('infoUser');
    let iconsNav = document.querySelector('.iconsNav');
    let userNameLogged = document.querySelector('.userNameLogged');

    if(!userAtual){
        infoUser.innerHTML = '<h1 id="userName">Faça login!</h1>'
    }

    if (userAtual) {
        document.querySelectorAll('#userName').forEach(function (element) {
                element.innerHTML = userAtual;
        })
        document.querySelectorAll('#CadatroInfo').forEach(function (element) {
                element.innerHTML = userAtualEmail;
        })
        document.querySelectorAll('.userNameLogged').forEach(function (element, name) {
            name = userAtual.split(' ')[0]
            element.innerHTML = name
        })
        iconsNav.style.borderRadius = '10px';
        userNameLogged.style.display = 'block';

        infoConta.innerHTML = '<h3>Minha conta</h3> <p id="leave">Sair</p> <a href="trocarSenha.html">Alterar Senha</a>'

        document.querySelectorAll('#leave').forEach(function (element) {
            element.addEventListener('click', function () {
                sessionStorage.clear();
                window.location.reload(true);
            })
        })
    }
})