import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSkullCrossbones,
  faHeart,
  faQuestion,
} from "@fortawesome/free-solid-svg-icons";
// import "../styles/core/variables.scss";
import "../styles/layout/StyleCharacterDetails.scss";
import "../styles/layout/StyleCharacterItem.scss";

const CharacterDetail = (props) => {
  const estado = props.bicho.estadoDelBicho;

  const renderIcon = () => {
    if (estado === "Alive") {
      return <FontAwesomeIcon className="heart" icon={faHeart} />;
    } else if (estado === "Dead") {
      return <FontAwesomeIcon className="dead" icon={faSkullCrossbones} />;
    } else return <FontAwesomeIcon className="unknown" icon={faQuestion} />;
  };

  return (
    <div className="styleCharacterDetail">
      <img
        className="img"
        src={props.bicho.fotoDelBicho}
        alt="imageCharacterBicho"
      />
      <br />
      <h2 className="texto"> Nombre:</h2>{" "}
      <h2 className="nombreReal">{props.bicho.nombreDelBicho}</h2>
      <br />
      <h2>Especie: {props.bicho.especieDelBicho}</h2>
      <br />
      <h2>Episodios:{props.bicho.episodiosDelBicho}</h2>
      <br />
      <h2>
        Estado: {props.bicho.estadoDelBicho}
        {renderIcon()}
      </h2>
    </div>
  );
};

export default CharacterDetail;
