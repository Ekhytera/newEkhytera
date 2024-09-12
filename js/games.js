const toggleGames = document.getElementById('toggleGames');
const games = document.getElementById('games');

toggleGames.addEventListener('click', () => {
    games.classList.toggle("opened")
})