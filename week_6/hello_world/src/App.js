import React from 'react';
import './App.css';

function App() {
  const nameFirst_Last = 'Lawrie Carly';
  const nameFirst = "Lawrie"
  const age = 30;

  return (
    <div className="headerContainer">
      <h1 className="title">{nameFirst_Last}</h1>
      <h2>{nameFirst}'s Portfolio</h2>

    </div>
  );
}

export default App;
