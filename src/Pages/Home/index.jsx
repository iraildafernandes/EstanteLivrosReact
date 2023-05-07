import { Link } from "react-router-dom";

import "./styles.css";

import Header from "../../Compenents/Header";
import LinkRota from "../../Compenents/LinkRota";
import Card from "../../Compenents/Card";

import livro10 from "../../assets/livros/livro10.jpg";
import livro11 from "../../assets/livros/livro11.jpg";

import { AiOutlineHeart, AiOutlineGift, AiOutlineStar } from "react-icons/ai";
import { SlBubble } from "react-icons/sl";

import livros from "../../livros";


function Home() {
  return (
    <>
      <Header />

      <main>
        <h2>Minha Estante</h2>
        <div className="conteudos">
          <div className="menu-links">
            <LinkRota to={"favoritos"}>
              <AiOutlineHeart size={25} />
              Favoritos
            </LinkRota>

            <LinkRota to={"desejados"}>
              <AiOutlineGift size={25} />
              Desejados
            </LinkRota>

            <LinkRota to={"avaliados"}>
             <AiOutlineStar size={25} />
             Avaliados
            </LinkRota>

            <LinkRota to={"resenhas"}>
             <SlBubble size={25} />
             Resenhas
            </LinkRota>
          </div>

          <div className="conteudo-livros">
            {livros.map(book => ( 
              <Link to={`livro/${book.id}`} params={{ parametros: "hello" }}>
                <Card key={book.id} imagem={book.imagem} nomeLivro={book.nome} />
              </Link>
            ))}
          </div>
        </div>
      </main>

      <section>
        <h2>Últimas Avaliações</h2>

        <div className="conteudos">
          <div className="avaliacao">
            <Card
              imagem={livro10}
              nomeLivro="Como criar produtos de tecnologia que os clientes amam"
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
                colours burst.
              </p>
            </div>
          </div>
          <div className="avaliacao">
            <Card
              imagem={livro11}
              nomeLivro="JavaScript O Guia Definitivo"
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

export default Home;
