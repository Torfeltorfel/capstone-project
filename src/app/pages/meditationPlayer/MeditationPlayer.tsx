import type { ReactNode } from 'react';
import { useState } from 'react';
import React from 'react';
import styled from 'styled-components';
import useSound from 'use-sound';
import gongSound from './assets/gong-sound.wav';

type MeditationPlayerProps = {
  children: ReactNode;
};

export default function MeditationPlayer({
  children,
}: MeditationPlayerProps): JSX.Element {
  const [play] = useSound(gongSound);
  const [isPlaying, setIsPlaying] = useState(false);

  function togglePlayPause() {
    setIsPlaying(!isPlaying);
    isPlaying ? play() : '';
  }

  return (
    <>
      <PageContainer>
        <ExitButton>Exit</ExitButton>
        <PlayButton onClick={togglePlayPause}>{children}</PlayButton>
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
