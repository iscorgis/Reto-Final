import React from 'react';
import { BrowserRouter, Routes as Switch, Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/:topTen" element={<Movies/> } exact />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
