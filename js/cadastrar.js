const erroEmail = document.querySelector('#erroEmail');
const erroSenha = document.querySelector('#erroSenha');
const erroUser = document.querySelector('#erroUser');

const senha = document.querySelector('#addSenha')
const verSenha = document.querySelector('#verSenha').addEventListener('click', ()=> {
    const type = senha.type === 'password' ? 'text' : 'password'
    senha.type = type 
})