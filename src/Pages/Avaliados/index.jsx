import { Link } from "react-router-dom";
import Header from "../../Compenents/Header";

function Avaliados(props){
  console.log(props)
  return(
    <>
    <Header />
     <h1>Avaliados</h1>
     <Link to={"/"} >Home</Link>
     <Link to={"avalidos"}>Avaliados</Link>
     <Link to={"favoritos"}>Favoritos</Link>
    </>
  );
}

export default Avaliados;