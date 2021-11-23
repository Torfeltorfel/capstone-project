import type { ReactNode } from 'react';
import React from 'react';
import styled from 'styled-components';

type MeditationPlayerProps = {
  children: ReactNode;
};

export default function MeditationPlayer({
  children,
}: MeditationPlayerProps): JSX.Element {
  return (
    <>
      <PageContainer>
        <PlayButton>{children}</PlayButton>
      </PageContainer>
    </>
  );
}

const PageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  background-color: yellow;
`;

const PlayButton = styled.button`
  border-radius: 50%;
  height: 100px;
  width: 100px;
`;
