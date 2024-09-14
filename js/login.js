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
        userName: 'Henrique',
        senha: '123',
        tipo: 'adm'
    },
    {
        id: 3,
        email: 'luiz@gmail.com',
        userName: 'Luiz',
        senha: '123',
        tipo: 'adm'
    },
    {
        id: 4,
        email: 'pedro@gmail.com',
        userName: 'Pedro',
        senha: '123',
        tipo: 'adm'
    },
    {
        id: 5,
        email: 'evelyn@gmail.com',
        userName: 'Evelyn',
        senha: '123',
        tipo: 'adm'
    },
    {
        id: 6,
        email: 'savyo@gmail.com',
        userName: 'Sávyo',
        senha: '123',
        tipo: 'adm'
    },
    {
        id: 7,
        email: 'rian@gmail.com',
        userName: 'Rian',
        senha: '123',
        tipo: 'adm'
    }
]

sessionStorage.setItem('allUsers', JSON.stringify(usurs));

const senhaVer = document.querySelector('#senha');
const verSenha = document.querySelector('#verSenha');

verSenha.addEventListener('click', () => {
    const type = senhaVer.type === 'password' ? 'text' : 'password';
    senhaVer.type = type;
});

const erroEmail = document.querySelector('#erroEmail');
const erroSenha = document.querySelector('#erroSenha');
const erroUser = document.querySelector('#erroUser');

function sair(){
    sessionStorage.clear();
    window.location.href = 'index.html'
}

function entrar() {
    const inputEmail = document.querySelector('#email').value;
    const inputSenha = document.querySelector('#senha').value;
    let validateLogin = false;

    // Recupera os usuários salvos no sessionStorage
    const storedUsers = JSON.parse(sessionStorage.getItem('allUsers')) || [];

    for (let i in storedUsers) {
        if (inputEmail == storedUsers[i].email && inputSenha == storedUsers[i].senha) {
            validateLogin = true;
            sessionStorage.setItem('userLogado', storedUsers[i].userName);
            sessionStorage.setItem('sair', '<li><a class="dropdown-item" href="index.html" onclick="sair()">Sair</a></li>');
            break;
        }
    }

    if (validateLogin) {
        window.location.href = 'index.html';
    } else {
        erroEmail.textContent = 'usuario ou senha invalido';
        erroEmail.style.backgroundColor = 'rgba(255, 0, 0, 0.7)';
        erroSenha.textContent = 'usuario ou senha invalido';
        erroSenha.style.backgroundColor = 'rgba(255, 0, 0, 0.7)';
    }
}

console.log(JSON.parse(sessionStorage.getItem('allUsers')));