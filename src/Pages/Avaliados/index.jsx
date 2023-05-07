import { Link } from "react-router-dom";
import Header from "../../Components/Header";
import "./styles.css";

function Avaliados(){
  return(
    <>
    <Header />
      <div className="menu-link">
        <h1 className="titulo">Livros Favoritos</h1>

        <Link to={"/"}>Voltar</Link>
      </div>

      <h2 className="construcao">Em Construção!</h2>
    </>
  );
}

export default Avaliados;