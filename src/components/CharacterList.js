import CharacterItem from "../components/CharacterItem";
// import "../styles/core/variables.scss";
import "../styles/layout/StyleCharacterList.scss";

const CharacterList = (props) => {
  const renderList = () => {
    //Este map va a recorer cada uno de los contactos. Data es la variable de estado qeu esta en App y la hemos traido por props

    if (props.dataList.length > 0) {
      return props.dataList.map((person, index) => {
        return (
          <li className="characterList" key={index}>
            <CharacterItem contactData={person} />
          </li>
        );
      });
    } else {
      return (
        <h2 className="textoNoencontrado">
          "No hay ningún personaje que conincida con la palabra"
        </h2>
      );
    }
  };

  return <ul className="gridContainer"> {renderList()}</ul>;
};
export default CharacterList;
