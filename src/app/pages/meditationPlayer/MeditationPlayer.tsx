import { useEffect, useState } from 'react';
import React from 'react';
import styled from 'styled-components';
import useSound from 'use-sound';
import gongSound from './assets/gong-sound.wav';
import PlayIcon from './assets/PlayIcon';
import PauseIcon from './assets/PauseIcon';
import BackgroundImage from './assets/bg.jpeg';
import type { Howl as HowlType } from 'howler';
import SuccessOverlay from '../../components/SuccessOverlay/SuccessPage';
import { Link } from 'react-router-dom';
import BackButton from '../../components/Buttons/BackButton/BackButton';
import postSession from '../../components/utils/postSession';

declare global {
  type Howl = HowlType;
}

export default function MeditationPlayer(): JSX.Element {
  const sessionDuration = JSON.parse(localStorage.getItem('Duration') || '[]');
  const [playGong] = useSound(gongSound);
  const [isPlaying, setIsPlaying] = useState(false);
  const [over, setOver] = useState(false);
  const [[m, s], setTime] = useState([sessionDuration, 0]);

  function togglePlayPause() {
    setIsPlaying(!isPlaying);
    isPlaying ? '' : playGong();
  }

  function endMeditation() {
    const fullDate = new Date();
    const day = fullDate.getDate();
    const month = fullDate.getMonth() + 1;
    const year = fullDate.getFullYear();
    const currentSession = {
      m: sessionDuration,
      year: year,
      month: month,
      day: day,
    };
    setOver(true),
      playGong(),
      postSession(currentSession, '/api/sessions'),
      checkOffInChallenge();
  }

  function checkOffInChallenge() {
    const data = JSON.parse(localStorage.getItem('twoMin') || '[]');
    const challengeDays = data.challengeDays;
    const today = new Date();
    const formatted = today.toISOString().split('T')[0];
    const challengeDays2 = { ...challengeDays, [formatted]: true };
    localStorage.setItem('twoMin', JSON.stringify(challengeDays2));
  }

  const countdown = () => {
    if (!isPlaying || over) return;
    if (m === 0 && s === 0) {
      endMeditation();
    } else if (s == 0) {
      setTime([m - 1, 59]);
    } else {
      setTime([m, s - 1]);
    }
  };

  useEffect(() => {
    const timerID = setInterval(() => countdown(), 1000);
    return () => clearInterval(timerID);
  }, [[m, s]]);

  return (
    <>
      <PageContainer>
        <StyledLink to="/settimer">
          <BackButton />
        </StyledLink>
        <TotalTimeHeadline>unguided meditation</TotalTimeHeadline>
        <TotalTime>{sessionDuration} min</TotalTime>
        <PlayButtonContainer>
          <PlayButton onClick={togglePlayPause}>
            {isPlaying ? <PauseIcon /> : <PlayIcon />}
          </PlayButton>
        </PlayButtonContainer>
        <Countdown>{`${m.toString().padStart(2, '0')}:${s
          .toString()
          .padStart(2, '0')} minutes`}</Countdown>
        {over ? <SuccessOverlay /> : ''}
      </PageContainer>
    </>
  );
}

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;

  height: 100%;
  width: 100%;
  background-image: url(${BackgroundImage});
  background-size: cover;
  height: 100vh;
  max-width: 25rem;
`;

const StyledLink = styled(Link)`
  align-self: flex-start;
  margin-left: 2rem;
`;

const TotalTimeHeadline = styled.h3`
  color: var(--white);
  text-transform: uppercase;
  font-size: 0.75rem;
  font-family: 'Open Sans';
`;

const TotalTime = styled.p`
  color: var(--white);
  text-transform: uppercase;
  font-size: 0.625rem;
  font-family: 'Open Sans';
`;

const PlayButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 4rem solid var(--grey-100);
  background-color: transparent;
  border-radius: 50%;
  height: 20rem;
  width: 20rem;
`;

const PlayButton = styled.button`
  border-radius: 50%;
  height: 4rem;
  width: 4rem;
  background-color: transparent;
  border: 0.031rem solid var(--white);
  transition: all 0.1s ease-in-out 0s;
  text-align: center;
  &:active {
    background-color: var(--white);
  }
`;

const Countdown = styled.p`
  color: var(--white);
  font-family: 'Open Sans';
`;
function formatDates(arg0: Date) {
  throw new Error('Function not implemented.');
}
