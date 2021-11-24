import { useEffect, useState } from 'react';
import React from 'react';
import styled from 'styled-components';
import useSound from 'use-sound';
import gongSound from './assets/gong-sound.wav';

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

  const countdown = () => {
    if (!isPlaying || over) return;
    if (h === 0 && m === 0 && s === 0) setOver(true), playGong();
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
  });

  return (
    <>
      <PageContainer>
        <ExitButton>Exit</ExitButton>
        <PlayButton onClick={togglePlayPause}>
          {isPlaying ? 'Pause' : 'Play'}
        </PlayButton>
        <p>{`${h.toString().padStart(2, '0')}:${m
          .toString()
          .padStart(2, '0')}:${s.toString().padStart(2, '0')}`}</p>
        <div>{over ? "Time's up!" : ''}</div>
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
  background-color: yellow;
`;

const ExitButton = styled.button`
  align-self: flex-end;
`;

const PlayButton = styled.button`
  border-radius: 50%;
  height: 100px;
  width: 100px;
`;
