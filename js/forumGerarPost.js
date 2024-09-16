function addPost(username, text, imgSrc, category1 = 'Debate', category2 = 'Ajuda') {
    let post = document.createElement('div');
    const htmlPost = `<article class="post">
                <div class="postDetails">


                    <div class="postAuthor">
                        <img class="fotoPerfil" src="imgs/gpubackimg.png">
                        <div>
                            <span class="username">${username}</span>
                            <span class="subtitle">2h atrás</span>
                        </div>
                    </div>

                    <div class="postAside">
                        <div class="categoryButtons">
                            <button type="button" class="button secundario arredondado">${category1}</button>
                            <button type="button" class="button secundario arredondado">${category2}</button>
                        </div>
                        <div class="moreOptions"><button type="button" class="iconButton"><img
                                    src="imgs/moreOptions.png"></button></div>
                    </div>


                </div>
                <div class="postBody">
                    <p>${text}</p>
                    ${imgSrc ? `<img src="imgs/${imgSrc}">` : ''}
                </div>
                <hr>
                <div class="postFooter">
                    <button class="iconButton add-like"><img src="imgs/icon_like.png"></button><span>354</span>
                    <button class="iconButton add-comment"><img src="imgs/icon_comment.png"></button><span>76</span>
                    <button class="iconButton add-share"><img src="imgs/icon_share.png"></button><span>3</span>
                </div>
            </article> 
`

    post.innerHTML = htmlPost
    const postsContainer = document.getElementById("postsContainer")
    
    postsContainer.appendChild(post)
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
						<h3>NVIDIA Fans</h3>
						<h4>126,309 membros</h5>
							<h5>
								<div class="statusIndicator"></div>63 online
							</h5>
							<button type="button" class="button primario">Entrar</button>
					</div>
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
						<h3>NVIDIA Fans</h3>
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

    comm.innerHTML = htmlPost
    const commContainer = document.getElementById("communitiesContainer")
    
    commContainer.appendChild(comm)
}


addPost("Teste", "Testestestesdsdgs", "gpubackimg.png")



/* <section class="communitiesContainer">
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
						<h3>NVIDIA Fans</h3>
						<h4>126,309 membros</h5>
							<h5>
								<div class="statusIndicator"></div>63 online
							</h5>
							<button type="button" class="button primario">Entrar</button>
					</div>
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
						<h3>NVIDIA Fans</h3>
						<h4>126,309 membros</h5>
							<h5>
								<div class="statusIndicator"></div>63 online
							</h5>
							<button type="button" class="button primario">Entrar</button>
					</div>
					<button type="button" class="iconButton"><img src="imgs/arrow_right.png"></button>
				</div>
			</section> */