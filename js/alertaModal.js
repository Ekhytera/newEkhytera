const modal = document.querySelector('.alertModal');

modal.addEventListener('click', () =>{modal.classList.add('hide')})

document.querySelector('#logar').addEventListener('click', () =>{
    window.location.href = 'login.html'
})

document.querySelector('#fechar').addEventListener('click', () =>{
    modal.classList.add('hide')
})
