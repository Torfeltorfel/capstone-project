import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/about"></Route>
        <Route path="/"></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
