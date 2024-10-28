window.addEventListener('DOMContentLoaded', () => {
    let userAtual = sessionStorage.getItem('userLogado');
    let userAtualEmail = sessionStorage.getItem('userEmail');
    let infoConta = document.getElementById('infoConta');
    let infoUser = document.getElementById('infoUser');

    if(!userAtual){
        infoUser.innerHTML = '<h1 id="userName">Faça login!</h1>'
    }

    if (userAtual) {
        document.querySelectorAll('#nomeUser').forEach(function (element) {
            element.innerHTML = userAtual.toUpperCase() + ', ';
        });
        document.querySelectorAll('#userName').forEach(function (element) {
            element.innerHTML = userAtual;
        })
        document.querySelectorAll('#CadatroInfo').forEach(function (element) {
            element.innerHTML = userAtualEmail;
        })

        infoConta.innerHTML = '<h3>Minha conta</h3> <p id="leave">Sair</p>'

        document.querySelectorAll('#leave').forEach(function (element) {
            element.addEventListener('click', function () {
                sessionStorage.clear();
                window.location.reload(true);
            })
        })
    }
})