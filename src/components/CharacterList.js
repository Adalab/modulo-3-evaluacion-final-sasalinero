
import CharacterItem from '../components/CharacterItem';
import "../styles/layout/StyleCharacterList.scss";



const CharacterList = (props) => {

    const renderList = () => {
        //Este map va a recorer cada uno de los contactos. Data es la variable de estado qeu esta en App y la hemos traido por props
        return props.dataList.map((person, index) => {
            return (

                <li className="characterList" key={index}>
                    <CharacterItem
                        contactData={person}
                    />
                </li>
            )
        }

        )
    }

    return (

        <ul className="gridContainer"> {renderList()}</ul>

    )
}
export default CharacterList;