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
                    <div class="icon">
                        <button class="iconButton likeIcon" onclick=darLike(this)><span class="material-symbols-outlined">thumb_up</span>
                            <span class="likeCount">484</span>
                        </button>
                    </div>
                    <div class="icon">
                        <button class="share iconButton" onclick=compartilhar(this)><span class="material-symbols-outlined">share</span>
                            <span class="shareCount">560</span>
                        </button>
                    </div>
                    <div class="icon">
                        <button class="iconButton add-comment"><span class="material-symbols-outlined">sms</span>
                            <span class="comment">123</span>
                        </button>
                    </div>
				</div>
			</article>`;

	post.innerHTML = htmlPost;
	const postsContainer = document.getElementById('postsContainer');
	postsContainer.appendChild(post);
}

// Função dar Like -------------------------------
let userAtual = sessionStorage.getItem('userLogado');

function darLike(el) {
	const likeCount = el.querySelector('.likeCount');
	if (userAtual) {
		if (!el.classList.contains('like')) {
			el.classList.add('like')
			likeCount.innerHTML = parseInt(likeCount.innerHTML) + 1;
		} else {
			el.classList.remove('like');
			likeCount.innerHTML = parseInt(likeCount.innerHTML) - 1;
		}
	} else {
		modal.classList.remove('hide');
	}
}

document.querySelector('.writePostContainer').addEventListener('click', function () {
	if (!userAtual) {
		modal.classList.remove('hide');
	}
})

// Função compartilhar -------------------------------------------
async function compartilhar(el) {
	const shareCount = el.querySelector('.shareCount');

	if (navigator.share) {
		try {
			await navigator.share({
				title: 'Olhe nosso Forum',
				text: 'Confira esses comentarios!',
				url: 'https://ekhytera.github.io/newEkhytera/forum.html'
			})
			shareCount.innerHTML++



		} catch (error) {
			console.error('Erro ao compartilhar:', error)
		}
	} else {
		alert('Função de compartilhar não suportada pelo navegador.')
	}
}


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