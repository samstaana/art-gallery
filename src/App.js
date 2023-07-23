import './App.css';
import Gallery from './Gallery'
import ButtonBar from './ButtonBar'
import { useState, useEffect } from "react";

function App() {
let [date, setData] = useState({})
let [artId, setArtId] = useState(350000)

  {/* State variables here... */}
  useEffect (() => {
    document.title = 'Welcome to ArtWorld!'
    fetch(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${artId}`)
    .then(response => response.json())
    .then(resData => setData(resData))
  }, [artId])

  {/* Return to JSX down here... */}

  return (
    <div className="App">
      <Gallery />
      <ButtonBar />
    </div>
  );
}

export default App;
