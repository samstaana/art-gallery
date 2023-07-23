import './App.css';
import Gallery from './Gallery'
import ButtonBar from './ButtonBar'
import { useState, useEffect } from "react";

function App() {
let [data, setData] = useState({})
let [artId, setArtId] = useState(1522)

  {/* State variables here... */}
  useEffect (() => {
    document.title = 'Welcome to ArtWorld!'
    fetch(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${artId}`)
    .then(response => response.json())
    .then(resData => setData(resData))
  }, [artId])

  {/* Return to JSX down here... */}

  const handleIterate = (e) => {
    setArtId(artId + Number(e.target.value))
  }

  return (
    <div className="App">
      <Gallery 
        primaryImage = { data.primaryImage }
        artDisplayName = {data.artistDisplayName }
        title = {data.title }
        medium = { data.medium }
        objectId = { data.objectId}
        culture = { data.culture } />
      <ButtonBar updateId = { handleIterate } />
    </div>
  );
}

export default App;
