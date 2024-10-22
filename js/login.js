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
    const inputEmail = document.querySelector('#email');
    const inputSenha = document.querySelector('#senha');
    let validateLogin = false;
    let emailValido = false;
    let senhaValida = false;

    erroEmail.textContent = '';
    erroSenha.textContent = '';
    inputEmail.style.border = '';
    inputSenha.style.border = '';

    for (let i in usurs) {
        if (inputEmail.value === usurs[i].email) {
            emailValido = true;
            if (inputSenha.value === usurs[i].senha) {
                senhaValida = true;
                validateLogin = true;
                sessionStorage.setItem('userInfo', usurs)
                sessionStorage.setItem('userLogado', usurs[i].userName);
                sessionStorage.setItem('tipoUser', usurs[i].tipo);
                sessionStorage.setItem('sair', '<li><button class="dropdown-item" id="leave">Sair</button></li>');
                window.location.href = 'index.html';
                break;
            }
        }
    }

    if (!validateLogin) {
        if (!emailValido) {
            erroEmail.textContent = 'E-mail não cadastrado.';
            erroEmail.style.backgroundColor = 'rgba(255, 0, 0, 0.7)';
            inputEmail.style.border = '2px solid rgba(255, 0, 0, 0.7)';
        }
        if (emailValido && !senhaValida) {
            erroSenha.textContent = 'Senha incorreta.';
            erroSenha.style.backgroundColor = 'rgba(255, 0, 0, 0.7)';
            inputSenha.style.border = '2px solid rgba(255, 0, 0, 0.7)';
        }
    }
}

document.querySelector('#email').addEventListener('input', function () {
    erroEmail.textContent = '';
    this.style.border = '';
});

document.querySelector('#senha').addEventListener('input', function () {
    erroSenha.textContent = '';
    this.style.border = '';
});

function cadastrar() {
    const inputEmail = document.querySelector('#newEmail');
    const inputNome = document.querySelector('#newName');
    const inputSenha = document.querySelector('#addSenha');
    let emailExiste = false;
    let valid = true;

    erroEmail.textContent = '';
    erroUser.textContent = '';
    erroSenha.textContent = '';
    inputEmail.style.border = '';
    inputNome.style.border = '';
    inputSenha.style.border = '';

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(inputEmail.value)) {
        erroEmail.textContent = 'Formato de e-mail inválido';
        erroEmail.style.backgroundColor = 'rgba(255, 0, 0, 0.7)';
        inputEmail.style.border = '2px solid rgba(255, 0, 0, 0.7)';
        valid = false;
    }

    for (let i in usurs) {
        if (inputEmail.value === usurs[i].email) {
            emailExiste = true;
            break;
        }
    }

    if (emailExiste) {
        erroEmail.textContent = 'Este e-mail já está cadastrado';
        erroEmail.style.backgroundColor = 'rgba(255, 0, 0, 0.7)';
        inputEmail.style.border = '2px solid rgba(255, 0, 0, 0.7)';
        valid = false;
    }

    if (inputNome.value.trim() === '') {
        erroUser.textContent = 'Nome de usuário inválido';
        erroUser.style.backgroundColor = 'rgba(255, 0, 0, 0.7)';
        inputNome.style.border = '2px solid rgba(255, 0, 0, 0.7)';
        valid = false;
    }

    if (inputSenha.value.length < 3) {
        erroSenha.textContent = 'A senha deve ter pelo menos 3 caracteres';
        erroSenha.style.backgroundColor = 'rgba(255, 0, 0, 0.7)';
        inputSenha.style.border = '2px solid rgba(255, 0, 0, 0.7)';
        valid = false;
    }

    if (valid) {
        const newUser = {
            id: usurs.length + 1,
            userName: inputNome.value,
            email: inputEmail.value,
            senha: inputSenha.value,
            tipo: 'user'
        };

        usurs.push(newUser);
        localStorage.setItem('usurs', JSON.stringify(usurs));

        window.location.href = 'login.html';
    }
}

document.querySelector('#newEmail').addEventListener('input', function () {
    erroEmail.textContent = '';
    this.style.border = '';
});

document.querySelector('#newName').addEventListener('input', function () {
    erroUser.textContent = '';
    this.style.border = '';
});

document.querySelector('#addSenha').addEventListener('input', function () {
    erroSenha.textContent = '';
    this.style.border = '';
});

function trocarSenha() {
    const inputEmail = document.querySelector('#emailTrocarSenha');
    const inputSenha = document.querySelector('#senhaNova');
    const inputConfSenha = document.querySelector('#confSenha');
    const senhaDif = document.querySelector('#senhaDiferentes');
    const emailNaoEnc = document.querySelector('#emailNaoEnc');

    let usuarioEncontrado = false;
    let valid = true;

    emailNaoEnc.textContent = '';
    senhaDif.textContent = '';
    inputEmail.style.border = '';
    inputSenha.style.border = '';
    inputConfSenha.style.border = '';

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(inputEmail.value)) {
        emailNaoEnc.textContent = 'Formato de e-mail inválido';
        emailNaoEnc.style.backgroundColor = 'rgba(255, 0, 0, 0.7)';
        inputEmail.style.border = '2px solid rgba(255, 0, 0, 0.7)';
        valid = false;
    }

    if (inputSenha.value.length < 8) {
        senhaDif.textContent = 'A senha deve ter pelo menos 8 caracteres';
        senhaDif.style.backgroundColor = 'rgba(255, 0, 0, 0.7)';
        inputSenha.style.border = '2px solid rgba(255, 0, 0, 0.7)';
        valid = false;
    } else if (inputSenha.value !== inputConfSenha.value) {
        senhaDif.textContent = 'As senhas não coincidem';
        senhaDif.style.backgroundColor = 'rgba(255, 0, 0, 0.7)';
        inputSenha.style.border = '2px solid rgba(255, 0, 0, 0.7)';
        inputConfSenha.style.border = '2px solid rgba(255, 0, 0, 0.7)';
        valid = false;
    }

    if (valid) {
        for (let i in usurs) {
            if (inputEmail.value === usurs[i].email) {
                usuarioEncontrado = true;
                usurs[i].senha = inputSenha.value; 
                localStorage.setItem('usurs', JSON.stringify(usurs));
                window.location.href = 'login.html';
                break;
            }
        }

        if (!usuarioEncontrado) {
            emailNaoEnc.textContent = 'Email não encontrado';
            emailNaoEnc.style.backgroundColor = 'rgba(255, 0, 0, 0.7)';
            inputEmail.style.border = '2px solid rgba(255, 0, 0, 0.7)';
        }
    }
}

document.querySelector('#emailTrocarSenha').addEventListener('input', function () {
    emailNaoEnc.textContent = '';
    this.style.border = '';
});

document.querySelector('#senhaNova').addEventListener('input', function () {
    senhaDif.textContent = '';
    this.style.border = '';
});

document.querySelector('#confSenha').addEventListener('input', function () {
    senhaDif.textContent = '';
    this.style.border = '';
});