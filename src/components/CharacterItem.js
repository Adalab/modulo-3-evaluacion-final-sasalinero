import "../styles/layout/StyleCharacterItem.scss"
import { Link } from 'react-router-dom';

const CharacterItem = (props) => {


    return (
        <div className="characterItem">

            <Link to={`./user/${props.contactData.id}`}>


                <img className="img" src={props.contactData.fotoDelBicho} alt="imageCharacter" />
                <br />
                <h2 className="texto"> Nombre: {props.contactData.nombreDelBicho}</h2>

                <br />
                <h2>Especie: {props.contactData.especieDelBicho}</h2>

            </Link>

        </div>



    )
}

export default CharacterItem;
