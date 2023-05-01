import "./styles.css";

function Link(props) {

  return(
    <a href="/">
     {props.img}
      {props.link}
    </a>
  )
}

export default Link;