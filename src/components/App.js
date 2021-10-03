import "../styles/App.scss";
import callToApi from "../services/api";
import { useState, useEffect } from "react";
import CharacterList from "../components/CharacterList";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import CharacterDetail from "./CharacterDetail";
import "../styles/layout/StyleApp.scss";
import CharacterFiltered from "./CharacterFiltered";

function App() {
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);
  const [selectSpecie, setSelectSpecie] = useState("All");

  const routeData = useRouteMatch("/user/:id");
  const contactId = routeData !== null ? routeData.params.id : "";

  const selectedCharacter = data.find(
    (contact) => contact.idDelBicho === parseInt(contactId)
  );
  console.log("selectechar:" + selectedCharacter);

  useEffect(() => {
    callToApi().then((response) => {
      setData(response);
    });
  }, []);

  const handleSpecie = (ev) => {
    return setSelectSpecie(ev.currentTarget.value);
  };

  const handleChangeSearch = (ev) => {
    return setSearch(ev.currentTarget.value);
  };

  const filteredData = data
    .filter((contact) =>
      contact.nombreDelBicho
        .toLocaleLowerCase()
        .includes(search.toLocaleLowerCase())
    )
    .filter(
      (contact) =>
        selectSpecie === "All" || contact.especieDelBicho === selectSpecie
    );

  return (
    <div className="allPage">
      <Switch>
        <Route path="/user/:id">
          <section>
            <CharacterDetail bicho={selectedCharacter} />
          </section>
        </Route>

        <Route exact path="/">
          <CharacterFiltered
            search={search}
            handleChangeSearch={handleChangeSearch}
          />
          <CharacterList dataList={filteredData} />
        </Route>

        <Route>
          <section>Oh! Página no encontrada</section>
        </Route>
      </Switch>

      <label className="filtroSelect" htmlFor="">
        Filtra por especie
      </label>
      <select
        className="filtroSelectBoxText"
        name="filtroEspecie"
        id="specie"
        value={selectSpecie}
        onChange={handleSpecie}
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
        <option className="filtroSelectBox" value="Alien">
          No se sabe Alien
        </option>
      </select>
    </div>
  );
}

export default App;
