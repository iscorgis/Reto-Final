import React from 'react';
import { BrowserRouter, Routes as Switch, Route } from 'react-router-dom';
import Movies from '../src/Components/Movies/Movies.jsx';

function App() {
  return (
    <div className="App">
      {/* <BrowserRouter>
        <Switch>
          
        </Switch>
      </BrowserRouter> */}
      <Movies/>
    </div>
  );
}

export default App;
