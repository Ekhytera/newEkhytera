const usurs = [
    {
        id: 1,
        email: 'joao@gmail.com',
        userName: 'João',
        tipo: 'adm',
        senha: '123'
    },
    {
        id: 2,
        email: 'henrique@gmail.com',
        userName: 'henrique',
        senha: '123',
        tipo: 'adm'
    },
    {
        id: 2,
        email: 'luiz@gmail.com',
        userName: 'Luiz',
        senha: '123',
        tipo: 'adm'
    },
] 
// Mostrar senha =>  Pagina de login -----------------
// const senha = document.querySelector('#senha')
// const verSenha = document.querySelector('#verSenha').addEventListener('click', ()=> {
//     const type = senha.type === 'password' ? 'text' : 'password' 
//     senha.type = type 
// })

const senha = document.querySelector('#senha')
const verSenha = document.querySelector('#verSenha')

verSenha.addEventListener('click', () => {
    const type = senha.type === 'password' ? 'text' : 'password';
    senha.type = type;
    
})


const erroEmail = document.querySelector('#erroEmail')
const erroSenha = document.querySelector('#erroSenha')
const erroUser = document.querySelector('#erroUser') 


function getUsers(email, senha) {
    const u = usurs.filter(
        function(usu){
            return usu.email === email && usu.senha === senha
        }
    )
    return u
}

function entrar(){
    const inputEmail = document.querySelector('#email').value 
    const inputSenha = document.querySelector('#senha').value 

    const user = getUsers(inputEmail, inputSenha)
    console.log(user)
    if(user.length == 0){
            erroEmail.textContent = 'usuario ou senha invalido'
            erroEmail.style.backgroundColor = 'rgba(255, 0, 0, 0.7)'
            erroSenha.textContent = 'usuario ou senha invalido'
            erroSenha.style.backgroundColor = 'rgba(255, 0, 0, 0.7)'
            
    }else{
        if(user[0].tipo === 'adm'){
            window.location.href = 'index.html'
        } else{
            if(user[0].tipo === 'aluno'){
            window.location.href = 'index.html'
            }
        }
    }
}

function getEmail(email){
    const e = usurs.filter(
        function(em){
            return em.email === email
        }
    )
}
function mudarSenha(){
    const emailConf = document.querySelector('#email')
    const newSenha = document.querySelector('#newSenha')
    const confSenha = document.querySelector('#confSenha')

    const email = getEmail(emailConf)
    console.log(email)
}


