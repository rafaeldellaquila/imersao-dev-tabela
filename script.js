function adicionarFilme() {
  const conteudo = document.querySelector("#filme").value;
  arrayConteudo = [conteudo.substring(0, 24), conteudo.substring(32, 43)];
  validarTrailer(conteudo);
}

function validarTrailer(conteudo) {
  if (conteudo.includes("https://www.youtube.com/watch?v=")) {
    exibirTrailer(conteudo);
  } else if (conteudo.endsWith(".jpg")) {
    exibirPoster(conteudo);
  } else {
    alert("Deve ser um video do Youtube!");
    conteudo = "";
  }
}

function exibirPoster(conteudo) {
  const listaFilmes = document.querySelector("#listaFilmes");
  var elementoFilme = "<img src=" + conteudo + ">";
  listaFilmes.innerHTML = listaFilmes.innerHTML + elementoFilme;
}

function exibirTrailer(conteudo) {
  const listaFilmes = document.querySelector("#listaFilmes");
  elementoFilme =
    "<iframe  width='280' height='220' margin='0 20px' src='" +
    arrayConteudo[0] +
    "embed/" +
    arrayConteudo[1] +
    "' title='YouTube video player' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe>";
  listaFilmes.innerHTML = listaFilmes.innerHTML + elementoFilme;
}

/*


function exibirPoster(conteudo) {
  const listaFilmes = document.querySelector("#listaFilmes");
  var elementoFilme = "<img src=" + filmeFavorito + ">";
  listaFilmes.innerHTML = listaFilmes.innerHTML + elementoFilme;
}
*/
