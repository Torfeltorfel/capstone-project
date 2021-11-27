import { useEffect, useState } from 'react';
import React from 'react';
import styled from 'styled-components';
import useSound from 'use-sound';
import gongSound from './assets/gong-sound.wav';
import PlayIcon from './assets/PlayIcon';
import PauseIcon from './assets/PauseIcon';
import BackgroundImage from './assets/bg.jpeg';
import type { Howl as HowlType } from 'howler';

declare global {
  type Howl = HowlType;
}

type MeditationPlayerProps = {
  hours: number;
  minutes: number;
  seconds: number;
};

export default function MeditationPlayer({
  hours,
  minutes,
  seconds,
}: MeditationPlayerProps): JSX.Element {
  const [playGong] = useSound(gongSound);
  const [isPlaying, setIsPlaying] = useState(false);
  const [over, setOver] = useState(false);
  const [[h, m, s], setTime] = useState([hours, minutes, seconds]);

  function togglePlayPause() {
    setIsPlaying(!isPlaying);
    isPlaying ? '' : playGong();
  }

  function endMeditation() {
    const oldSessions = JSON.parse(localStorage.getItem('sessions') || '');
    const today = new Date();
    const currentSession = { h: hours, m: minutes, date: today };
    const allSessions = [...oldSessions, addCurrentSession];
    setOver(true),
      playGong(),
      localStorage.setItem('sessions', JSON.stringify(allSessions));
  }

  const countdown = () => {
    if (!isPlaying || over) return;
    if (h === 0 && m === 0 && s === 0) {
      endMeditation();
    }
    else if (m === 0 && s === 0) {
      setTime([h - 1, 59, 59]);
    } else if (s == 0) {
      setTime([h, m - 1, 59]);
    } else {
      setTime([h, m, s - 1]);
    }
  };

  useEffect(() => {
    const timerID = setInterval(() => countdown(), 1000);
    return () => clearInterval(timerID);
    console.log('hey');
  }, [[h, m, s]]);

  return (
    <>
      <PageContainer>
        <TotalTimeHeadline>unguided meditation</TotalTimeHeadline>
        <TotalTime>
          {hours < 1 ? `${minutes}min` : `${hours}h : ${minutes}min`}
        </TotalTime>
        <PlayButtonContainer>
          <PlayButton onClick={togglePlayPause}>
            {isPlaying ? <PauseIcon /> : <PlayIcon />}
          </PlayButton>
        </PlayButtonContainer>
        <Countdown>{`${h.toString().padStart(2, '0')}:${m
          .toString()
          .padStart(2, '0')}:${s.toString().padStart(2, '0')}`}</Countdown>
        <div>{over ? 'Meditation stopped' : ''}</div>
      </PageContainer>
    </>
  );
}

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  background-image: url(${BackgroundImage});
  background-size: cover;
  height: 100vh;
  max-width: 400px;
`;

const TotalTimeHeadline = styled.h3`
  color: var(--secondary-white);
  text-transform: uppercase;
  font-size: 12px;
  font-family: 'Open Sans';
`;

const TotalTime = styled.p`
  color: var(--secondary-white);
  text-transform: uppercase;
  font-size: 10px;
  font-family: 'Open Sans';
`;

const PlayButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 4rem solid rgba(255, 255, 255, 0.15);
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
  border: 0.5px solid var(--secondary-white);
  transition: all 0.1s ease-in-out 0s;
  text-align: center;
  &:active {
    background-color: var(--secondary-white);
  }
`;

const Countdown = styled.p`
  color: var(--secondary-white);
  font-family: 'Open Sans';
`;
