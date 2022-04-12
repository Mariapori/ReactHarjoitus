import React, { useState } from 'react'
import './App.css';

function App() {
  const [henkilo, setHenkilo] = useState("");

  function AsetaHenkilo(henkilonNimi){
    setHenkilo(henkilonNimi);
    console.log("Asetettu: " + henkilonNimi);
  }

  return (
    <div className="App">
      <h1>Simple CRUD</h1>
      <div>
        <label>Nimi: </label>
        <input onChange={(e) => AsetaHenkilo(e.target.value)} value={henkilo}></input>
      </div>
    </div>
  );
}


export default App;
