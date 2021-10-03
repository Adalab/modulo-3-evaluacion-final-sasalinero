const CharacterFiltered = (props) => {
  return (
    <form className="search" action="">
      <label htmlFor="">
        <input
          className="input"
          type="text"
          id="idDelBicho"
          value={props.search}
          onChange={props.handleChangeSearch}
        />
      </label>
    </form>
  );
};

export default CharacterFiltered;
