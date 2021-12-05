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
    <Container>
      <ContentContainer>
        <StyledLink to="/home">
          <BackButton></BackButton>
        </StyledLink>
        <Header>Start your Challenge</Header>
        <Description>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi
          velit temporibus animi beatae aperiam adipisci placeat.
        </Description>
      </ContentContainer>
      <TileContainer>
        <Tile background-image="house">2 min for 15 days</Tile>
        <Tile background-image="grass">30 min after 30 days</Tile>
        <Tile background-image="mountain">30 min after 30 days</Tile>
        <Tile background-image="waterfall">30 min after 30 days</Tile>
        <Tile background-image="weeds">30 min after 30 days</Tile>
      </TileContainer>

      <Navigation activeLink="challenge" />
    </Container>
  );
}

const Container = styled.div`
  height: 100vh;
  max-width: 100vw;
  padding: 1rem;
  overflow-x: hidden;
  background-image: var(--white-background);
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 2rem;
`;

const StyledLink = styled(Link)`
  align-self: flex-start;
`;

const TileContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 2rem;
`;

const Header = styled.h1`
  margin: 0.5rem 1rem;
`;

const Description = styled.p`
  margin: 0.2rem 0.5rem;
`;
