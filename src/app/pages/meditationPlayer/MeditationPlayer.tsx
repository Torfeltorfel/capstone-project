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
import BackButton from '../../components/Buttons/BackButton/BackButton';
import postSession from '../../components/utils/postSession';

declare global {
  type Howl = HowlType;
}

type MeditationPlayerProps = {
  handleChallengeStatus: () => void;
};

export default function MeditationPlayer({
  handleChallengeStatus,
}: MeditationPlayerProps): JSX.Element {
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
      markSessionInChallenge();
  }

  function markSessionInChallenge() {
    const data = JSON.parse(localStorage.getItem('Challenge') || '[]');
    const challengeDays = data.challengeDays;
    const today = new Date();
    const todayFormatted = today.toISOString().split('T')[0];
    const challengeDaysUpdated = {
      ...data.challengeDays,
      [todayFormatted]: true,
    };
    localStorage.setItem('Challenge', JSON.stringify(challengeDaysUpdated));
    const keys = Object.keys(challengeDays);
    const lastEntry = keys[keys.length - 1];
    todayFormatted >= lastEntry
      ? handleChallengeStatus()
      : console.log('not identical');
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
        <BackButtonContainer>
          <BackButton />
        </BackButtonContainer>
        <HeaderContainer>
          <TotalTimeHeadline>unguided meditation</TotalTimeHeadline>
          <TotalTime>{sessionDuration} min</TotalTime>
        </HeaderContainer>
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

const BackButtonContainer = styled.div`
  align-self: flex-start;
  margin-left: 2rem;
  margin-top: 2rem;
`;

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
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
