const CharacterFiltered = (props) => {
  return (
    <form className="search" action="">
      <label htmlFor="">
        <input
          type="text"
          id="idDelBicho"
          value={props.search}
          onChange={props.handleChangeSearch}
        />
        Buscador
      </label>
    </form>
  );
};

export default CharacterFiltered;
