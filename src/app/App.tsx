import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MeditationPlayer from './pages/meditationPlayer/MeditationPlayer';

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<MeditationPlayer hours={0} minutes={10} seconds={2} />}
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
