function hideMenu() {

    const postOptionsList = document.getElementsByClassName('postOptions')

    if (postOptionsList.length > 0) {
        Array.from(postOptionsList).forEach(element => {
            element.style.height = '0px'
            element.style.opacity = '0%'
            setTimeout((e) => {element.remove()}, 1000)
        });
    }

}

function listItem(text) {
    li = document.createElement('li');
    li.addEventListener('mouseup', hideMenu);
    li.innerHTML = text;
    return li;
}

function showMenu(caller) {

    const postOptionsList = document.getElementsByClassName('postOptions')
    if (postOptionsList.length > 0) {
        Array.from(postOptionsList).forEach(element => {
            element.remove()
        });
    }

    const clickOutArea = document.createElement('div');
    clickOutArea.style.display = 'block';
    clickOutArea.style.position = 'fixed';
    clickOutArea.style.top = '0'
    clickOutArea.style.left = '0'
    clickOutArea.style.width = '100vw';
    clickOutArea.style.height = '100vh';
    clickOutArea.addEventListener('mouseup', (e) => { e.target.remove(); hideMenu() });
    document.body.appendChild(clickOutArea)

    let postOptions = document.createElement('div');

    postOptions.classList.add('postOptions')

    const ul = document.createElement('ul')

    postOptions.appendChild(ul)
    ul.appendChild(listItem('Salvar'))
    ul.appendChild(document.createElement('hr'))
    ul.appendChild(listItem('Denunciar'))
    ul.appendChild(document.createElement('hr'))
    ul.appendChild(listItem('Silenciar Usuário'))

    document.getElementById('body').appendChild(postOptions)

    const buttonRect = caller.getBoundingClientRect();
    const scrollLeft = window.scrollX || document.documentElement.scrollLeft;
    const scrollTop = window.scrollY || document.documentElement.scrollTop;

    postOptions.style.left = (buttonRect.left + scrollLeft - buttonRect.width * 4) + 'px';
    postOptions.style.top = (buttonRect.top + scrollTop + buttonRect.height) + 'px';

    postOptions.style.height = '';
    postOptions.style.opacity = '100%'
}