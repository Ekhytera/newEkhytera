const senhaVer = document.querySelector('#senha');
const verSenha = document.querySelector('#verSenha');

verSenha.addEventListener('click', () => {
    const type = senhaVer.type === 'password' ? 'text' : 'password';
    senhaVer.type = type;
});