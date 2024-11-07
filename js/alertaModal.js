const modal = document.querySelector('.alertModal');

document.querySelector('#logar').addEventListener('click', () =>{
    window.location.href = 'login.html'
})

document.querySelector('#fechar').addEventListener('click', () =>{
    modal.classList.add('hide')
})