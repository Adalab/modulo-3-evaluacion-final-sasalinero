import "../styles/layout/StyleCharacterItem.scss";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserAlt } from "@fortawesome/free-solid-svg-icons";
import { faRedditAlien } from "@fortawesome/free-brands-svg-icons";

const CharacterItem = (props) => {
  const especie = props.contactData.especieDelBicho;

  const renderIconCard = () => {
    if (especie === "Alien") {
      return <FontAwesomeIcon className="alien" icon={faRedditAlien} />;
    } else return <FontAwesomeIcon className="human" icon={faUserAlt} />;
  };

  return (
    <div className="characterItem">
      <Link to={`./user/${props.contactData.idDelBicho}`}>
        <img
          className="img"
          src={props.contactData.fotoDelBicho}
          alt="imageCharacter"
        />
        <br />
        <h2 className="texto"> {props.contactData.nombreDelBicho}</h2>

        <br />
        <h2 className="especie">
          {props.contactData.especieDelBicho}
          {renderIconCard()}
        </h2>
      </Link>
    </div>
  );
};

export default CharacterItem;
