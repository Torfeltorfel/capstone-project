import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SetTimer from './pages/SetTimer/SetTimer';
import Dashboard from './pages/Dashboard/Dashboard';
import MeditationPlayer from './pages/meditationPlayer/MeditationPlayer';
import Home from './pages/Home/Home';
import Challenge from './pages/Challenge/Challenge';

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/settimer" element={<SetTimer />} />
        <Route path="/timer" element={<MeditationPlayer />} />
        <Route path="/challenge" element={<Challenge />}></Route>
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
