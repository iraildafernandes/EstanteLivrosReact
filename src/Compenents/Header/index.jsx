import "./styles.css";

function Header() {
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
          <span className="qtd-livros">130</span>
          <span>Livros lidos</span>
        </div>

        <div className="info-livros">
          <span className="qtd-livros">60</span>
          <span>Livros que vou ler</span>
        </div>
      </div>
    </header>
  );
}

export default Header;
