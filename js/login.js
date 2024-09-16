let usurs = JSON.parse(localStorage.getItem('usurs')) || [
    { id: 1, email: 'joao@gmail.com', userName: 'João', tipo: 'adm', senha: '123' },
    { id: 2, email: 'henrique@gmail.com', userName: 'Henrique', senha: '123', tipo: 'adm' },
    { id: 3, email: 'luiz@gmail.com', userName: 'Luiz', senha: '123', tipo: 'adm' },
    { id: 4, email: 'pedro@gmail.com', userName: 'Pedro', senha: '123', tipo: 'adm' },
    { id: 5, email: 'evelyn@gmail.com', userName: 'Evelyn', senha: '123', tipo: 'adm' },
    { id: 6, email: 'savyo@gmail.com', userName: 'Sávyo', senha: '123', tipo: 'adm' },
    { id: 7, email: 'rian@gmail.com', userName: 'Rian', senha: '123', tipo: 'adm' }
];

const erroEmail = document.querySelector('#erroEmail');
const erroSenha = document.querySelector('#erroSenha');
const erroUser = document.querySelector('#erroUser');

function sair() {
    sessionStorage.clear();
    window.location.href = 'index.html';
}

function entrar() {
    const inputEmail = document.querySelector('#email').value;
    const inputSenha = document.querySelector('#senha').value;
    let validateLogin = false;

    for (let i in usurs) {
        if (inputEmail == usurs[i].email && inputSenha == usurs[i].senha) {
            validateLogin = true;
            sessionStorage.setItem('userLogado', usurs[i].userName);
            if (validateLogin) {
                sessionStorage.setItem('sair', '<li><a class="dropdown-item" href="index.html" onclick="sair()">Sair</a></li>');
                window.location.href = 'index.html';
            }
            break;
        }
    }

    if (!validateLogin) {
        erroEmail.textContent = 'Usuario ou senha invalido';
        erroEmail.style.backgroundColor = 'rgba(255, 0, 0, 0.7)';
        erroSenha.textContent = 'Usuario ou senha invalido';
        erroSenha.style.backgroundColor = 'rgba(255, 0, 0, 0.7)';
    }
}

function cadastrar() {
    const newEmail = document.querySelector('#newEmail').value;
    const newNome = document.querySelector('#newName').value;
    const newSenha = document.querySelector('#addSenha').value;

    if (newEmail == '' || newSenha == '' || newNome == '') {
        if (newEmail == '') {
            erroEmail.textContent = 'Forma de login invalida';
            erroEmail.style.backgroundColor = 'rgba(255, 0, 0, 0.7)';
        } else {
            erroEmail.textContent = '';
        }

        if (newNome == '') {
            erroUser.textContent = 'Usuario invalido';
            erroUser.style.backgroundColor = 'rgba(255, 0, 0, 0.7)';
        } else {
            erroUser.textContent = '';
        }

        if (newSenha == '') {
            erroSenha.textContent = 'Senha invalida';
            erroSenha.style.backgroundColor = 'rgba(255, 0, 0, 0.7)';
        } else {
            erroSenha.textContent = '';
        }
    } else {
        const newUser = {
            id: usurs.length + 1,
            userName: newNome,
            email: newEmail,
            senha: newSenha,
            tipo: 'user'
        };

        usurs.push(newUser);
        localStorage.setItem('usurs', JSON.stringify(usurs));

        window.location.href = 'login.html';
    }
}

function trocarSenha() {
    const emailTrocarSenha = document.querySelector('#emailTrocarSenha').value;
    const addSenha = document.querySelector('#senhaNova').value;
    const confSenha = document.querySelector('#confSenha').value;
    const senhaDif = document.querySelector('#senhaDiferentes');
    const emailNaoEnc = document.querySelector('#emailNaoEnc');

    let usuarioEncontrado = false;

    for (let i in usurs) {
        if (emailTrocarSenha === usurs[i].email) {
            usuarioEncontrado = true;
            if (addSenha === confSenha && addSenha !== '' && confSenha !== '') {
                usurs[i].senha = addSenha;
                localStorage.setItem('usurs', JSON.stringify(usurs)); // Atualiza o localStorage
                console.log("Senha alterada para:", addSenha);
                window.location.href = 'login.html';
                break;
            } else {
                senhaDif.innerHTML = 'As senhas não coincidem ou estão vazias';
                senhaDif.style.backgroundColor = 'rgba(255, 0, 0, 0.7)';
            }
        }
    }

    if (!usuarioEncontrado) {
        emailNaoEnc.innerHTML = 'Email não encontrado';
        emailNaoEnc.style.backgroundColor = 'rgba(255, 0, 0, 0.7)';
    }
}
