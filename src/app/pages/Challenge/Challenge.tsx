import React, { useState } from 'react';
import styled from 'styled-components';
import Button from '../../components/Buttons/Button/Button';
import Navigation from '../../components/Navigation/Navigation';
import { formatDate } from '../../components/utils/formatDates';
import { getDatesBetweenDates } from '../../components/utils/getDatesBetweenDates';

type ChallengeProps = {
  challengeStatus: boolean;
  handleChallengeStatus: () => void;
};

export default function Challenge({
  challengeStatus,
  handleChallengeStatus,
}: ChallengeProps): JSX.Element {
  const [count, setCount] = useState(5);

  function setupChallenge() {
    const dateRangeFormatted = getDatesBetweenDates(count).map((date) =>
      formatDate(date)
    );
    const challengeDays = dateRangeFormatted.reduce(
      (acc: { [key: string]: boolean }, date) => {
        acc[date] = false;
        return acc;
      },
      {}
    );
    localStorage.setItem(
      'Challenge',
      JSON.stringify({
        challengeDays,
      })
    );
  }

  function stopChallenge() {
    localStorage.removeItem('Challenge');
  }

  challengeStatus ? setupChallenge() : stopChallenge();

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
          {challengeStatus ? (
            ''
          ) : (
            <CounterContainer>
              <PlusMinusButton onClick={() => setCount((count) => count - 1)}>
                -
              </PlusMinusButton>
              <Durationfield>{count} days</Durationfield>
              <PlusMinusButton onClick={() => setCount((count) => count + 1)}>
                +
              </PlusMinusButton>
            </CounterContainer>
          )}

          <Button onClick={handleChallengeStatus}>
            {challengeStatus ? 'Stop Challenge' : 'Start Challenge'}
          </Button>
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

const CounterContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1rem;
`;

const Header = styled.h1`
  margin: 0.2rem 0.5rem;
  color: var(--green-simple);
  font-family: 'Merriweather';
  font-size: var(--h1-size);
  text-transform: uppercase;
  letter-spacing: var(--letterSpacing);
`;

const Description = styled.p`
  margin: 0.2rem 0.5rem;
  font-size: var(--p-size);
  font-family: 'Open Sans';
`;

const PlusMinusButton = styled.button`
  height: 2rem;
  width: 2rem;
  color: var(--white);
  background-image: var(--green-background);
  border: none;
  border-radius: 50%;
  font-weight: 900;
  background-color: transparent;
  &:active {
    opacity: 0.5;
  }
`;

const Durationfield = styled.p`
  color: var(--grey-900);
  font: 'Open Sans';
`;
