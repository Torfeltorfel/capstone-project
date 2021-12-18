import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SetTimer from './pages/SetTimer/SetTimer';
import Dashboard from './pages/Dashboard/Dashboard';
import MeditationPlayer from './pages/meditationPlayer/MeditationPlayer';
import Home from './pages/Home/Home';
import Challenge from './pages/Challenge/Challenge';
import useLocalStorage from './hooks/useLocaleStorage';

function App(): JSX.Element {
  const [challengeStarted, setChallengeStarted] = useLocalStorage(
    false,
    'ChallengeStatus'
  );

  function handleChange() {
    setChallengeStarted(!challengeStarted);
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/settimer" element={<SetTimer />} />
        <Route
          path="/timer"
          element={<MeditationPlayer handleChallengeStatus={handleChange} />}
        />
        <Route
          path="/challenge"
          element={
            <Challenge
              challengeStatus={challengeStarted}
              handleChallengeStatus={handleChange}
            />
          }
        ></Route>
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
