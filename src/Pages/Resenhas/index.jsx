import { Link } from "react-router-dom";
import Header from "../../Components/Header";
import "./styles.css";

function Resenhas(){
  return(
    <>
    <Header />
      <div className="menu-link">
        <h1 className="titulo">Resenhas</h1>

        <Link to={"/"}>Voltar</Link>
      </div>

      <h2 className="construcao">Em Construção!</h2>
    </>
  );
}

export default Resenhas;