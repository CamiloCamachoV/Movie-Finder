import './App.css';
import React from 'react';
import SearchMovies from "./SearchMovies.js";

function App() {

  return (
    <div >
      <div className="container">
        <h1 className="title">React Movie Finder</h1>
        <SearchMovies/>
      </div>
    </div>
  );
}

export default App;
