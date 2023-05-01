import "./App.css";

import Header from "./Compenents/Header";
import Link from "./Compenents/Link";

import Card from "./Compenents/Card";

import livro from "./assets/livros/livro.jpg";
import livro1 from "./assets/livros/livro1.jpg";
import livro2 from "./assets/livros/livro2.jpg";
import livro3 from "./assets/livros/livro3.jpg";
import livro4 from "./assets/livros/livro4.jpg";
import livro6 from "./assets/livros/livro6.jpg";
import livro7 from "./assets/livros/livro7.jpg";
import livro8 from "./assets/livros/livro8.jpg";
import livro9 from "./assets/livros/livro9.jpg";
import livro10 from "./assets/livros/livro10.jpg";
import livro11 from "./assets/livros/livro11.jpg";
import livro12 from "./assets/livros/livro12.jpg";

import { AiOutlineHeart, AiOutlineGift, AiOutlineStar } from "react-icons/ai";
import { SlBubble } from "react-icons/sl";

function App() {
  return (
    <>
      <Header />

      <main>
        <h2>Minha Estante</h2>
        <div className="conteudos">
          <div className="links">
            <Link link="Favoritos" img={<AiOutlineHeart size={25} />} />
            <Link link="Desejados" img={<AiOutlineGift size={25} />} />
            <Link link="Avaliados" img={<AiOutlineStar size={25} />} />
            <Link link="Resenhas" img={<SlBubble size={25} />} />
          </div>

          <div className="conteudo-livros">
            <Card
              imagem={livro}
              nomeLivro="Livro"
              classificacao="1"
            />
            <Card
              imagem={livro1}
              nomeLivro="Livro1"
              classificacao="5"
            />
            <Card
              imagem={livro2}
              nomeLivro="Livro2"
              classificacao="3"
            />
            <Card
              imagem={livro3}
              nomeLivro="Livr3"
              classificacao="3"
            />
            <Card
              imagem={livro4}
              nomeLivro="Livro4"
              classificacao="4"
            />
            <Card
              imagem={livro12}
              nomeLivro="Livro5"
              classificacao="2"
            />
            <Card
              imagem={livro6}
              nomeLivro="Livro6"
              classificacao="3"
            />
            <Card
              imagem={livro7}
              nomeLivro="Livro7"
              classificacao="3"
            />
            <Card
              imagem={livro8}
              nomeLivro="Livro8"
              classificacao="3"
            />
            <Card
              imagem={livro9}
              nomeLivro="Livro9"
              classificacao="3"
            />
          </div>
        </div>
      </main>

      <section>
        <h2>Últimas Avaliações</h2>

        <div className="conteudos">
          <div className="avaliacao">
            <Card
              imagem={livro10}
              nomeLivro="Livro10"
              classificacao="3"
            />

            <div className="avaliacao-texto">
              <h3>Como criar produtos de tecnologia que os clientes amam</h3>
              <p>
                You held me down, but I got up (HEY!). What? Wait. No, no, no,
                no. It's no big deal, it's no big deal, it's no big deal. I will
                love you unconditionally. Yeah, you take me to utopia. This is
                how we do, do do do do, this is how we do. We can dance, until
                we die, you and I, will be young forever. Come on, let your
                colours burst.{" "}
              </p>
            </div>
          </div>
          <div className="avaliacao">
            <Card
              imagem={livro11}
              nomeLivro="Livro11"
              classificacao="3"
            />

            <div className="avaliacao-texto">
              <h3>JavaScript: O Guia Definitivo</h3>
              <p>
                I'm walking on air. We'd keep all our promises be us against the
                world. This test is my own cross to bare. It's always been
                inside of you, you, you. I can feel this light that's inside of
                me. It's not even a holiday, nothing to celebrate. I'll be your
                gift, give you something good to celebrate. Do you ever feel
                already buried deep six feet under?
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
