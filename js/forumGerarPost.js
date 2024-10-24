function addPost(settings) {
	function loadCategories() {
		let buttons = '';
		if (settings.categories.length > 0) {
			settings.categories.forEach(element => {
				buttons += `<button type="button" class="button secundario arredondado">${element}</button>`;
			});
		}
		return buttons;
	}

	let post = document.createElement('div');
	post.className = 'postWrapper';

	const htmlPost = `<article class="post" id="postagem">
				<div class="postDetails">
					<div class="postAuthor">
						<img class="fotoPerfil" src="imgs/${settings.pfp}">
						<div>
							<span class="username">${settings.username}</span>
							<span class="subtitle">2h atrás</span>
						</div>
					</div>
					<div class="postAside">
						<div class="categoryButtons">
							${loadCategories()}                        
						</div>
						<div class="moreOptions">
							<button type="button" class="iconButton" onclick="showMenu(this)"><img src="imgs/moreOptions.png"></button>
						</div>
					</div>
				</div>
				<div class="postBody">
					<p>${settings.text}</p>
					${settings.attachment ? `<img src="imgs/${settings.attachment}">` : ''}
				</div>
				<hr>
				<div class="postFooter">
					<button class="iconButton add-like" id="buttonImgLike"><img src="imgs/icon_like.png"></button><span id="likeCount">354</span>
					<button class="iconButton add-comment"><img src="imgs/icon_comment.png"></button><span>76</span>
					<button class="iconButton add-share"><img src="imgs/icon_share.png"></button><span>3</span>
				</div>
			</article>`;

	post.innerHTML = htmlPost;
	const postsContainer = document.getElementById('postsContainer');
	postsContainer.appendChild(post);
}
// function darLike(){
// 	const likeButtons = document.querySelectorAll('.add-like');
// 	let userAtual = sessionStorage.getItem('userLogado');

// 	likeButtons.forEach(button => {
// 		button.addEventListener('click', () => {
// 		const likeCountDisplay = button.nextElementSibling;
// 		let likeCount = parseInt(likeCountDisplay.textContent);

// 		if(userAtual){
// 			likeCount++;
// 			likeCountDisplay.textContent = likeCount;
// 			likeCountDisplay.style.color = '#4169E1'
// 			button.disabled = true;	
// 		}
// 		});
// 	});
// };
document.addEventListener('DOMContentLoaded', () => {
	const likeButtons = document.querySelectorAll('.add-like');
	let userAtual = sessionStorage.getItem('userLogado');

	likeButtons.forEach(button => {
		button.addEventListener('click', () => {
			const likeCountDisplay = button.nextElementSibling;
			let likeCount = parseInt(likeCountDisplay.textContent);

			if (userAtual) {
				likeCount++;
				likeCountDisplay.textContent = likeCount;
				likeCountDisplay.style.color = '#4169E1'
				button.disabled = true;
			}
		});
	});
})


function addCommunities() {
	let comm = document.createElement('div');
	const htmlComm = `<section class="communitiesContainer">
				<h2>Comunidades</h2>
				<div>
					<button type="button" class="iconButton"><img src="imgs/arrow_left.png"></button>
					<div class="communityCard">
						<img class="communityIcon arredondado" src="imgs/codebackimg.png">
						<h3>NVIDIA Fans</h3>
						<h4>126,309 membros</h5>
							<h5>
								<div class="statusIndicator"></div>63 online
							</h5>
							<button type="button" class="button primario">Entrar</button>
					</div>
					<div class="communityCard">
						<img class="communityIcon arredondado" src="imgs/codebackimg.png">
						<h3>AMD Fans</h3>
						<h4>126,309 membros</h5>
							<h5>
								<div class="statusIndicator"></div>63 online
							</h5>
							<button type="button" class="button primario">Entrar</button>
					</div>
					
					<div class="communityCard">
						<img class="communityIcon arredondado" src="imgs/codebackimg.png">
						<h3>Intel Fans</h3>
						<h4>126,309 membros</h5>
							<h5>
								<div class="statusIndicator"></div>63 online
							</h5>
							<button type="button" class="button primario">Entrar</button>
					</div>
					<button type="button" class="iconButton"><img src="imgs/arrow_right.png"></button>
				</div>
			</section>
`

	comm.innerHTML = htmlComm
	const commContainer = document.getElementById("communitiesContainer")

	commContainer.appendChild(comm)
}

const textArea = document.getElementById('writePostInput');

const userPost = sessionStorage.getItem('userLogado');

function postar() {
	if (userPost === null) {
		return
	}
	else if (textArea.value === '') {
		return
	}
	else {
		addPost({
			username: userPost,
			pfp: '1000_F_349497933_Ly4im8BDmHLaLzgyKg2f2yZOvJjBtlw5.jpg',
			text: document.getElementById('writePostInput').value,
			categories: ['Teste']
		});
		// document.addEventListener('DOMContentLoaded', darLike())

		textArea.value = '';
	}
}


addPost({
	username: 'Usuário 1',
	pfp: 'pexels-danxavier-1239291.jpg',
	text: 'A placa de vídeo GT 730 roda Red Dead Redemption 2 em 4k?',
	attachment: 'gpubackimg.png',
	categories: ['Teste']
})

addPost({
	username: 'Usuário 2',
	pfp: 'pexels-justin-shaifer-501272-1222271.jpg',
	text: 'Acredito que a UniFOA seja a melhor faculdade do mundo.',
	attachment: 'codebackimg.png',
	categories: ['Code']
})

addPost({
	username: 'Usuário 3',
	pfp: 'pexels-jjagtenberg-103123.jpg',
	text: 'Como faz pra montar um pc gamer com 20 reais???',
	attachment: '',
	categories: ['Teste']
})