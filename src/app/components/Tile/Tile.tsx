import React from 'react';
import styled from 'styled-components';

type TileProps = {
  sessionDuration: number;
  backgroundImageURL: string;
  onStartChallenge: (id: string) => void;
  challengeStatus: boolean;
  id: string;
};

export default function Tile({
  sessionDuration,
  backgroundImageURL,
  onStartChallenge,
  challengeStatus,
  id,
}: TileProps): JSX.Element {
  return (
    <>
      <Container backgroundImageURL={backgroundImageURL}>
        <p>{challengeStatus}</p>
        <button
          onClick={() => {
            onStartChallenge(id);
          }}
        >
          {challengeStatus ? 'Stop Challenge' : 'Start Challenge'}
        </button>
        <TextContainer>
          <Description>{sessionDuration} Minutes a Day for 30 Days</Description>
        </TextContainer>
      </Container>
    </>
  );
}

const Container = styled.div<Partial<TileProps>>`
  border-radius: 0.75rem;
  box-shadow: var(--box-shadow);
  background-image: ${(props) => `url(${props.backgroundImageURL})`};
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  overflow: hidden;
  flex: 1;
  min-height: 12rem;
`;

const TextContainer = styled.div`
  overflow: hidden;
  padding: 0.1rem 0.4rem;
  background-color: var(--black-100);
`;

const Description = styled.p`
  margin: 0.3rem;
  font-size: 0.8rem;
  font-weight: 900;
  font-family: 'Open Sans';
  color: var(--white);
`;
