
import '../styles/App.scss';
import callToApi from '../services/api';
import { useState, useEffect } from 'react';
import CharacterList from '../components/CharacterList';
import { Route, Switch } from 'react-router-dom'
import CharacterDetail from './CharacterDetail';



function App() {
  const [data, setData] = useState([])


  useEffect(() => {

    callToApi().then(response => {

      setData(response);
    });

  }, []);

  return (

    <div >

      <Switch>

        <Route path="/user/:id">
          <section>
            {/* <CharacterDetail characterDataDetail= /> */}
          </section>

        </Route>
        <Route exact path="/"> <CharacterList dataList={data} />

        </Route>

        <Route>
          <section>Oh! Página no encontrada</section>

        </Route>
      </Switch>


    </div>
  );
}

export default App;
