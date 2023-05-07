import { useState } from "react";

import "./styles.css";

function Header(props) {

  return (
    <header className="container">
      <div className="info-user">
        <img
          src="https://github.com/iraildafernandes.png"
          alt="Foto de perfil"
        />
        <h1>Irailda</h1>
      </div>

      <div className="info-livros-user">
        <div className="info-livros">
          <span className="qtd-livros">{props.livrosLidos}</span>
          <span>Livros lidos</span>
        </div>

        <div className="info-livros">
          <span className="qtd-livros">{props.livrosParaLer}</span>
          <span>Livros que vou ler</span>
        </div>
      </div>
    </header>
  );
}

export default Header;
