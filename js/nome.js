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
            if(userAtual.length>10){
                if(userAtual.includes(' ')){
                    let primeiroNome = userAtual.split(' ')[0]
                    element.innerHTML = primeiroNome.toUpperCase()+', '
                } else{
                    element.innerHTML = userAtual.slice(0,10).toUpperCase+'...'+', ';
                }
            } else {
                element.innerHTML = userAtual.toUpperCase() + ', ';
            }

        });
        document.querySelectorAll('#userName').forEach(function (element) {
            if(userAtual.length>10){
                element.innerHTML = userAtual.slice(0,10)+'...';
            } else {
                element.innerHTML = userAtual;
            }
        })
        document.querySelectorAll('#CadatroInfo').forEach(function (element) {
            if(userAtualEmail.length>10){
                element.innerHTML = userAtualEmail.slice(0,10)+'...';
                console.log(userAtualEmail.length)
            } else{
                element.innerHTML = userAtualEmail;
            }
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