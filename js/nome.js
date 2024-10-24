window.addEventListener('DOMContentLoaded', () => {
    let sair = sessionStorage.getItem('sair');
    let userAtual = sessionStorage.getItem('userLogado');
    let userAtualEmail = sessionStorage.getItem('userEmail');
    console.log(userAtual, userAtualEmail)

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
        document.querySelectorAll('#dropLogin').forEach(function (element) {
            element.innerHTML = sair;
        });

        document.querySelectorAll('#leave').forEach(function (element) {
            element.addEventListener('click', function () {
                sessionStorage.clear();
                window.location.reload(true);
            })
        })
    }
})