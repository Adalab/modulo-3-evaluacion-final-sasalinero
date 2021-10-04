import "../styles/App.scss";
import callToApi from "../services/api";
import { useState, useEffect } from "react";
import CharacterList from "../components/CharacterList";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import CharacterDetail from "./CharacterDetail";
import "../styles/layout/StyleApp.scss";
import CharacterFiltered from "./CharacterFiltered";
import { Link } from "react-router-dom";

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
      <header className="header"></header>
      <Switch>
        <Route path="/user/:id">
          <section className="sectionPrincipal">
            <Link className="linkDetail" to="/">
              Volver
            </Link>
            <CharacterDetail bicho={selectedCharacter} />
          </section>
        </Route>

        <Route exact path="/">
          <CharacterFiltered
            search={search}
            handleChangeSearch={handleChangeSearch}
            selectSpecie={selectSpecie}
            handleSpecie={handleSpecie}
          />

          <CharacterList dataList={filteredData} />
        </Route>

        <Route>
          <section className="notFound">Oh! Página no encontrada</section>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
