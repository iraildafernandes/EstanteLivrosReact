import { Link } from "react-router-dom";
import Header from "../../Components/Header";
import Card from "../../Components/Card";

import "./styles.css";

import livros from "../../livros.js";

function Favoritos(){
  return(
    <>
      <Header />

      <div className="menu-link">
        <h1 className="titulo">Livros Favoritos</h1>

        <Link to={"/"}>Voltar</Link>
      </div>

      <div className="favoritos">
        {livros.map(livro => (
          livro.favorito ? ( <Card key={livro.id} imagem={livro.imagem} nomeLivro={livro.nome} /> ) : ""
        ))}
      </div>
    </>
  );
}

export default Favoritos;