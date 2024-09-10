function pesquisar() {
  let section = document.getElementById("resultados-pesquisa");
  console.log(section);

  let campoPesquisa = document.getElementById("campo-pesquisa").value;

  if (campoPesquisa == "") {
    section.innerHTML = "<p>Nada foi encontrado</p>";
    return;
  }

  campoPesquisa = removerAcentos(campoPesquisa.toLowerCase());

  let resultados = "";
  let titulo = "";
  let descricao = "";

  for (let dado of dados) {
    titulo = removerAcentos(dado.titulo.toLowerCase());
    descricao = removerAcentos(dado.descricao.toLowerCase());

    if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa)) {
      resultados += `
                <div class="item-resultado">
                    <h2>${dado.titulo}</h2>
                    <p class="descricao-meta">${dado.descricao}</p>
                    <p class="descricao-meta">Pertencem ao grupo dos: ${dado.categoria}</p>
                    <p class="descricao-meta">geralmente encontrados em ${dado.habitat}</p>
                    <p class="descricao-meta">atualmente: ${dado.status}</p>
                    <p class="descricao-meta">${dado.causasAmeaca}</p>
                    <img src="${dado.imagem}" alt="imagem ${dado.titulo}" width="300" height="300"><br>
                    <a href="${dado.link}" target="_blank">Mais informações</a>
                </div>
            `;
    }
  }

  if (!resultados){
    resultados = "<p>  Animal não encontrado. <br> Fora de nosso banco de dados</p>"
  }

  section.innerHTML = resultados;
}

function removerAcentos(str) {
  return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}
