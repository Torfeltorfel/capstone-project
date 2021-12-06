import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import BackButton from '../../components/Buttons/BackButton/BackButton';
import Navigation from '../../components/Navigation/Navigation';
import Tile from '../../components/Tile/Tile';

export default function Challenge(): JSX.Element {
  /*   const [challenge, setChallenge] = useState(false); */

  /*   function toggleChallenge() {
    setChallenge(!challenge);
    console.log(challenge);
  } */

  return (
    <>
      <Container>
        <ContentContainer>
          <StyledLink to="/home">
            <BackButton></BackButton>
          </StyledLink>
          <TextContainer>
            <Header>Start your Challenge</Header>
            <Description>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi
              velit temporibus animi beatae aperiam adipisci placeat.
            </Description>
          </TextContainer>

          <TileContainer>
            <Tile backgroundImageURL="src/app/components/Tile/assets/grass.jpeg">
              2 min for 15 days
            </Tile>
            <Tile backgroundImageURL="src/app/components/Tile/assets/house.jpeg">
              30 min after 30 days
            </Tile>
            <Tile backgroundImageURL="src/app/components/Tile/assets/mountains.jpeg">
              15 min after 30 days
            </Tile>
            <Tile backgroundImageURL="src/app/components/Tile/assets/waterfall.jpeg">
              30 min after 30 days
            </Tile>
            <Tile backgroundImageURL="src/app/components/Tile/assets/weeds.jpeg">
              30 min after 30 days
            </Tile>
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

const StyledLink = styled(Link)`
  align-self: flex-start;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin-bottom: 1rem;
`;

const Header = styled.h1`
  margin: 0.2rem 0.5rem;
`;

const Description = styled.p`
  margin: 0.2rem 0.5rem;
`;

const TileContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 1rem;
`;
