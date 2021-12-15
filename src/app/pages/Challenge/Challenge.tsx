import React, { useState } from 'react';
import styled from 'styled-components';
import Navigation from '../../components/Navigation/Navigation';
import Tile from '../../components/Tile/Tile';

export default function Challenge(): JSX.Element {
  const [challengeStarted, setChallengeStarted] = useState(false);
  function handleChange() {
    setChallengeStarted(!challengeStarted);
  }

  return (
    <>
      <Container>
        <ContentContainer>
          <TextContainer>
            <Header>Challenges</Header>
            <Description>
              These challenges help you to start your meditation habit.
            </Description>
          </TextContainer>
          <TileContainer>
            <Tile
              backgroundImageURL="src/app/components/Tile/assets/grass.jpeg"
              sessionDuration={2}
              onStartChallenge={handleChange}
              challengeStatus={challengeStarted}
            ></Tile>
            <Tile
              backgroundImageURL="src/app/components/Tile/assets/house.jpeg"
              sessionDuration={10}
              onStartChallenge={handleChange}
              challengeStatus={challengeStarted}
            ></Tile>
          </TileContainer>
        </ContentContainer>
        <Navigation activeLink="challenge" />
      </Container>
    </>
  );
}

const Container = styled.div`
  display: grid;
  grid-template-rows: auto 3.75rem;
  height: 100vh;
  max-width: 100vw;
  background-image: var(--white-background);
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  overflow-y: scroll;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin: 1rem 0;
`;

const Header = styled.h1`
  margin: 0.2rem 0.5rem;
  font-family: 'Merriweather';
  font-size: var(--h1-size);
  text-transform: uppercase;
  color: var(--green-simple);
`;

const Description = styled.p`
  margin: 0.2rem 0.5rem;
  font-size: var(--p-size);
  font-family: 'Open Sans';
`;

const TileContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 1rem;
`;
