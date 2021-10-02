
import '../styles/App.scss';
import callToApi from '../services/api';
import { useState, useEffect } from 'react';
import CharacterList from '../components/CharacterList';
// import CharacterItem from '../components/CharacterItem';



function App() {
  const [data, setData] = useState([])


  useEffect(() => {

    callToApi().then(response => {

      setData(response);
    });

  }, []);

  return (
    <div  >

      <CharacterList dataList={data} />



    </div>
  );
}

export default App;
