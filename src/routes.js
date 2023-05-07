import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Pages/Home";
import Favoritos from "./Pages/Favoritos";
import Desejados from "./Pages/Desejados";
import Avaliados from "./Pages/Avaliados";
import Resenhas from "./Pages/Avaliados";
import InfoLivro from "./Pages/Livro";
import PaginaNaoEncontrada from "./Pages/404";


function Router() {
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="favoritos" element={ <Favoritos /> } />
        <Route path="desejados" element={ <Desejados /> } />
        <Route path="avaliados" element={ <Avaliados /> } />
        <Route path="resenhas" element={ <Resenhas /> } />
        <Route path="livro/:id" element={ <InfoLivro /> } />

        <Route path="*" element={ <PaginaNaoEncontrada /> } />
      </Routes>
    </BrowserRouter>
  )
}

export default Router;