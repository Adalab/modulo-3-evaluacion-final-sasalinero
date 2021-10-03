
import '../styles/App.scss';
import callToApi from '../services/api';
import { useState, useEffect } from 'react';
import CharacterList from '../components/CharacterList';
import { Route, Switch, useRouteMatch } from 'react-router-dom'
import CharacterDetail from './CharacterDetail';
import '../styles/layout/StyleApp.scss';



function App() {

  const [search, setSearch] = useState("");
  const [data, setData] = useState([])

  const routeData = useRouteMatch("/user/:id");
  const contactId = (routeData !== null) ? routeData.params.id : "";

  const selectedCharacter = data.find((contact) => contact.idDelBicho === contactId)
  console.log("selectechar:" + selectedCharacter);



  useEffect(() => {

    callToApi().then(response => {

      setData(response);
    });

  }, []);

  const handleChangeSearch = (ev) => {

    return (

      setSearch(ev.currentTarget.value)

    )
  }

  const filteredData = data.filter((contact) => contact.nombreDelBicho.toLocaleLowerCase().includes(search.toLocaleLowerCase()));



  return (
    <div>

      <form className="search" action="">
        <label htmlFor="">

          <input type="text"
            id="idDelBicho"
            value={search}
            onChange={handleChangeSearch}
          />Buscador
        </label>


      </form>
      <Switch>

        <Route path="/user/:id">
          <section>
            <CharacterDetail user={selectedCharacter} />
          </section>
        </Route>

        <Route exact path="/">
          <CharacterList dataList={filteredData} />
        </Route>

        <Route>
          <section>Oh! Página no encontrada</section>
        </Route>

      </Switch>
    </div>
  );
}

export default App;
