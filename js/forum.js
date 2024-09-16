function showMenu(caller) {

    const postOptionsList = document.getElementsByClassName('postOptions')

    console.log(postOptionsList)
    if(postOptionsList.length > 0){
        Array.from(postOptionsList).forEach(element => {
            element.style.display = 'none'
        });
    }

    let postOptions = document.createElement('div');
    postOptions.classList.add('postOptions')

    postOptions.innerHTML = `
    <ul>
        <li>Salvar</li>
        <hr>
        <li>Denunciar</li>
        <hr>
        <li>Silenciar Usuário</li>
    </ul>   
    `
    document.getElementById('body').appendChild(postOptions)

    const buttonRect = caller.getBoundingClientRect();
    const scrollLeft = window.scrollX || document.documentElement.scrollLeft;
    const scrollTop = window.scrollY || document.documentElement.scrollTop;

    postOptions.style.left = (buttonRect.left + scrollLeft - buttonRect.width*4) + 'px';
    postOptions.style.top = (buttonRect.top + scrollTop + buttonRect.height) + 'px';

}