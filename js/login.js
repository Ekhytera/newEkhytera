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

function cadastrar(){
    const email = document.querySelector('#newEmail').value
    const nome = document.querySelector('#newName').value
    const senha = document.querySelector('#newSenha').value


    const NewUser = {
        email: email,
        nome: nome,
        senha: senha
    }

    usurs.push(NewUser)
    console.log(NewUser)

    window.location.href = 'index.html'
}
function getUsers(email, senha) {
    const u = usurs.filter(
        function(usu){
            return usu.email === email && usu.senha === senha
        }
    )
    return u
}

function entrar(){
    const erroEmail = document.querySelector('#erroEmail')
    const erroSenha = document.querySelector('#erroSenha')
    const inputEmail = document.querySelector('#email').value 
    const inputSenha = document.querySelector('#senha').value 

    const user = getUsers(inputEmail, inputSenha)
    console.log(user)
    if(user.length == 0){
            erroEmail.textContent = 'usuario ou senha invalido'
            erroEmail.style.color = 'red'
            erroSenha.textContent = 'usuario ou senha invalido'
            erroSenha.style.color = 'red'
            
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
