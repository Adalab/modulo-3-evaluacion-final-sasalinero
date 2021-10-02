import "../styles/layout/StyleCharacterItem.scss"

const CharacterItem = (props) => {


    return (
        <div className="characterItem">


            <img className="img" src={props.contactData.fotoDelBicho} alt="imageCharacter" />
            <br />
            <h2 className="texto"> Nombre: {props.contactData.nombreDelBicho}</h2>

            <br />
            <h2>Especie: {props.contactData.especieDelBicho}</h2>



        </div>



    )
}

export default CharacterItem;
