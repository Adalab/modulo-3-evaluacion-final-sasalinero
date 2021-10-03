
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  
  faSkullCrossbones, faHeart,
} from "@fortawesome/free-solid-svg-icons";
import '../styles/layout/StyleCharacterDetails.scss';

const CharacterDetail = (props) => {
  return (
    <div>
      <img
        className="img"
        src={props.bicho.fotoDelBicho}
        alt="imageCharacterBicho"
      />
      <br />
      <h2 className="texto"> Nombre: {props.bicho.nombreDelBicho}</h2>
      <br />
      <h2>Especie: {props.bicho.especieDelBicho}</h2>
      <br />
      <h2>Episodios:{props.bicho.episodiosDelBicho}</h2>
      <br />
      <h2> <FontAwesomeIcon className ={ props.bicho.estadoDelBicho=== "Alive" ? "heart" : "dead"} icon={ props.bicho.estadoDelBicho=== "Dead" ? faSkullCrossbones : faHeart}
          />{props.bicho.estadoDelBicho}</h2>




         
      
    
    </div>
  );
};

export default CharacterDetail;
