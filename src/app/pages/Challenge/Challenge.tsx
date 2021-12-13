import React from 'react';
import styled from 'styled-components';
import Button from '../../components/Buttons/Button/Button';
import Navigation from '../../components/Navigation/Navigation';
import Tile from '../../components/Tile/Tile';
/* import { getDatesBetweenDates } from '../../components/utils/getDatesBetweenDates'; */

export default function Challenge(): JSX.Element {
  const selectedEndDate = 10;
  const today = new Date();
  const endDate = new Date(today);
  endDate.setDate(endDate.getDate() + selectedEndDate);

  function getDatesBetweenDates(startDate: Date, endDate: Date) {
    let dates: Date[] = [];
    const theDate = new Date(startDate);
    console.log(theDate);
    while (theDate < endDate) {
      dates = [...dates, new Date(theDate)];
      theDate.setDate(theDate.getDate() + 1);
    }
    console.log(dates);
    return dates;
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
          <Button onClick={() => getDatesBetweenDates(today, endDate)}>
            Start Day Counter
          </Button>
          <TileContainer>
            <Tile
              backgroundImageURL="src/app/components/Tile/assets/grass.jpeg"
              sessionDuration={2}
            ></Tile>
            <Tile
              backgroundImageURL="src/app/components/Tile/assets/house.jpeg"
              sessionDuration={10}
            ></Tile>
            <Tile
              backgroundImageURL="src/app/components/Tile/assets/mountains.jpeg"
              sessionDuration={8}
            ></Tile>
            <Tile
              backgroundImageURL="src/app/components/Tile/assets/waterfall.jpeg"
              sessionDuration={5}
            ></Tile>
            <Tile
              backgroundImageURL="src/app/components/Tile/assets/weeds.jpeg"
              sessionDuration={15}
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
