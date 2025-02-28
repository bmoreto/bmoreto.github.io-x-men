const personagens = document.querySelectorAll(".personagem");
personagens.forEach((personagem) => {
  personagem.addEventListener("mouseenter", () => {
    if (window.innerWidth > 450) {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
    removerSelecaoPersonagem();

    personagem.classList.add("selecionado");

    alterarImagemPersonagem(personagem);

    alterarNomePersonagem(personagem);

    alterarDescricaoPersonagem(personagem);
  });
});

function removerSelecaoPersonagem() {
  personagens.forEach((personagem) => {
    personagem.classList.remove("selecionado");
  });
}

function alterarImagemPersonagem(personagem) {
  const imagemPersonagemGrande = document.querySelector(".personagem-grande");
  const idPersonagem = personagem.attributes.id.value;
  imagemPersonagemGrande.src = `./imagens/card-${idPersonagem}.png`;
}

function alterarNomePersonagem(personagem) {
  const nomePersonagem = document.getElementById("nome-personagem");
  nomePersonagem.innerText = personagem.getAttribute("data-name");
}

function alterarDescricaoPersonagem(personagem) {
  const descricaoPersonagem = document.getElementById("descricao-personagem");
  descricaoPersonagem.innerText = personagem.getAttribute("data-description");
}
