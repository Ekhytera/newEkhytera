// login
const senhaVer = document.querySelector('#senha');
const verSenha = document.querySelector('#verSenha');
// cadastro
const senhaVerCad = document.querySelector('#addSenha');
const verSenhaCad = document.querySelector('#verSenhaCad');
// Trocar Senha

// Nova Senha a ser adicionada
const NovaSenhaVer = document.querySelector('#senhaNova');
const verNovaSenha = document.querySelector('#nSenha');

// Confirmar Senha
const confSenhaVer = document.querySelector('#confSenha');
const verConfSenha = document.querySelector('#cSenha');

document.addEventListener('DOMContentLoaded', () => {
    if(verSenha){
        verSenha.addEventListener('click', () => {
            const type = senhaVer.type === 'password' ? 'text' : 'password';
            senhaVer.type = type;
        });
    }
    if(verSenhaCad){
        verSenhaCad.addEventListener('click', () => {
            const type = senhaVerCad.type === 'password' ? 'text' : 'password';
            senhaVerCad.type = type;
        })
    } 
    if(verNovaSenha){
        verNovaSenha.addEventListener('click', ()=> {
            const type = NovaSenhaVer.type === 'password' ? 'text' : 'password';
            NovaSenhaVer.type = type
        })
    }
    if(verConfSenha){
        verConfSenha.addEventListener('click', ()=> {
            const type = confSenhaVer.type === 'password' ? 'text' : 'password';
            confSenhaVer.type = type
        })
    }
})
    

