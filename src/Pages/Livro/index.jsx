import { useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import Header from "../../Components/Header";

import "./styles.css";

import livros from "../../livros";

function InfoLivro(){
  const [livrosLidos, setLivrosLidos] = useState(0);
  const [livrosParaLer, setLivrosParaLer] = useState(0);
  const params = useParams();

  let idLivro = params.id - 1;

  function testeUm(){
    setLivrosLidos(livrosLidos+1);
  }

  function testeDois(){
    setLivrosParaLer(livrosParaLer+1);
  }

  return(
    <>
      <Header livrosLidos={livrosLidos} livrosParaLer={livrosParaLer} />

      <div className="menu-link">
        <h1 className="titulo">Detalhes do Livro</h1>

        <Link to={"/"}>Voltar</Link>
      </div>

      <div className="detalhes-livro">
        <div className="area-imagem-livro">
          <img src={livros[idLivro].imagem} alt={livros[idLivro].nome} title={livros[idLivro].nome} />
        </div>

        <div className="informacoes-livro">
          <h2>Título: {livros[idLivro].nome}</h2>
          <p>{livros[idLivro].descricao}</p>

          <div className="area-acao">
            <button onClick={() => testeUm()}>Marcado como lido</button>
            <button onClick={() => testeDois()}>Vou ler</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default InfoLivro;