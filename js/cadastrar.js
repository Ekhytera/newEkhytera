const usurs = [
    {
        id: 99,
        email: 'fulano@gmail.com',
        userName: 'fulano',
        senha: '123',
        tipo: 'normal'
    },
]
const erroEmail = document.querySelector('#erroEmail')
const erroSenha = document.querySelector('#erroSenha')
const erroUser = document.querySelector('#erroUser') 

function cadastrar(){
    const email = document.querySelector('#newEmail').value
    const nome = document.querySelector('#newName').value
    const senha = document.querySelector('#addSenha').value

    const newUser = {
        email: email,
        nome: nome,
        senha: senha
    }

    usurs.push(newUser)

    if(email == '' || senha == '' || nome == ''){
        if(email==''){
            erroEmail.textContent = 'Forma de login invalida'
            erroEmail.style.backgroundColor = 'rgba(255, 0, 0, 0.7)'
        }
        else{
            erroEmail.textContent = ''
        }

        if(nome==''){
            erroUser.textContent = 'Usuario invalido'
            erroUser.style.backgroundColor = 'rgba(255, 0, 0, 0.7)'
        }else{
            erroUser.textContent = ''
        }
        
        if(senha==''){
            erroSenha.textContent = 'Senha invalida'
            erroSenha.style.backgroundColor = 'rgba(255, 0, 0, 0.7)'
        }else{
            erroSenha.textContent = ''
        }
    }else{
        window.location.href = 'index.html'
    }
}

// mostrar senha ----------
const senha = document.querySelector('#addSenha')
const verSenha = document.querySelector('#verSenha').addEventListener('click', ()=> {
    const type = senha.type === 'password' ? 'text' : 'password'
    senha.type = type 
})

