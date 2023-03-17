import React from 'react';
import { BrowserRouter, Routes as Switch, Route } from 'react-router-dom';
import Movies from '../src/Components/Movies/Movies.jsx';
import Header from '../src/Components/Header/Header.jsx';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
       <Header />
        <Switch>
          <Route path="/:movieType"  element={<Movies/>} exact />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
