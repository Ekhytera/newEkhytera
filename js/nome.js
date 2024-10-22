window.addEventListener('DOMContentLoaded', () => {
    let sair = sessionStorage.getItem('sair');
    let userAtual = sessionStorage.getItem('userLogado');
    console.log(userAtual)

    if (userAtual) {
        document.querySelectorAll('#nomeUser').forEach(function (element) {
            element.innerHTML = userAtual.toUpperCase() + ', ';
        });
        document.querySelectorAll('#dropLogin').forEach(function (element) {
            element.innerHTML = sair;
        });

        document.querySelectorAll('#leave').forEach(function(element){
            element.addEventListener('click', function(){
                sessionStorage.clear();
                window.location.reload(true);
            })
        })
    }
})