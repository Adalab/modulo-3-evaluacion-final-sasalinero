const CharacterFiltered = (props) => {
  return (
    <div>
      <form className="busquedas" action="">
        <label htmlFor="">
          <input
            className="botonSearch"
            placeholder="Busqueda"
            type="text"
            id="idDelBicho"
            value={props.search}
            onChange={props.handleChangeSearch}
          />
        </label>
        <label className="filtroSelect" htmlFor="">
          Filtra por especie
        </label>
        <select
          className="filtroSelectBoxText"
          name="filtroEspecie"
          id="specie"
          value={props.selectSpecie}
          onChange={props.handleSpecie}
        >
          <option className="filtroSelectBox" value="All">
            Todos
          </option>
          <option className="filtroSelectBox" value="Human">
            Humano
          </option>
          <option className="filtroSelectBox" value="Alien">
            Alien
          </option>
        </select>
      </form>
    </div>
  );
};

export default CharacterFiltered;
