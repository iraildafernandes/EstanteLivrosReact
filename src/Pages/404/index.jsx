import { Link } from "react-router-dom";
import "./styles.css";

function PaginaNaoEncontrada(){
  return(
    <div className="pagina-erro">
      <h1>Página Não Encontrada!</h1>
      <Link to="/">Home</Link>
    </div>
  );
}

export default PaginaNaoEncontrada;