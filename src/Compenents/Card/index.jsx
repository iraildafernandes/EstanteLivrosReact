import { useState } from "react";
import "./styles.css";

import { AiFillStar, AiOutlineStar } from "react-icons/ai";

function Card(props) {

  return (
    <div className="card">
      <img src={props.imagem} alt={props.nomeLivro} title={props.nomeLivro} />

      <div className="classificacao">
        <span>
          <AiFillStar color="yellow" />
          <AiFillStar color="yellow" />
          <AiFillStar color="yellow" />
          <AiFillStar color="yellow" />
          <AiFillStar color="yellow" />
        </span>
      </div>
    </div>
  );
}

export default Card;
