// import QuranicVerses from './QuranicVerses'; // Path to your component

import axios from 'axios';
import React, { useState } from 'react';

const App = () => {
  const [query, setQuery] = useState("")
  const ask = async () => {
    setQuery(document.getElementById("query").value);

    const response = await axios.post("https://flaskdemodeploytrial001.azurewebsites.net/", query);
    console.log(response);
  }
  return (
    <div className="App">
      <div>
        <input type='text' id='query'></input>
        <button onClick={ask}> Ask Question </button>
      </div>
    </div>
  );
};

export default App;
