import React from 'react';
import styled from 'styled-components';
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
  function setupChallenge() {
    const dateRangeFormatted = getDatesBetweenDates(1).map((date) =>
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
          <button onClick={handleChallengeStatus}>
            {challengeStatus ? 'Stop Challenge' : 'Start Challenge'}
          </button>
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
