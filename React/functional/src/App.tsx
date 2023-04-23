import { useEffect, useState } from 'react';
import './App.css';
import { fetchSampleAdress, fetchData } from './api/fetchData';
import Foldable from './FoldableUseCase';
import Functor from './FunctorUseCase';
import Monad from './MonadUseCase';
import { Collection } from './types';

function App() {
  const [data, setData] = useState<Collection>({collectionId: 0,savedProperties: []});
  const [address, setAddress] = useState<string>('');

  useEffect(() => {
    fetchData().then(result => {
      setData(result.data);
    });
    fetchSampleAdress().then(result => {
      setAddress(result.data);
    })
  },[]);

  return (
    <div className="App">
      <Foldable data={data}/>
      <Functor data={address}/>
      <Monad data={address}/>
    </div>
  );
}

export default App;
