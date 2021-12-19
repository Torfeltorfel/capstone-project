import React, { useState } from 'react';
import styled from 'styled-components';
import Button, {
  ButtonAlarm,
  StyledButton,
} from '../../components/Buttons/Button/Button';
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
            <>
              <CounterHeader>Choose the duration</CounterHeader>
              <CounterContainer>
                <PlusMinusButton onClick={() => setCount((count) => count - 1)}>
                  -
                </PlusMinusButton>
                <Durationfield>{count} days</Durationfield>
                <PlusMinusButton onClick={() => setCount((count) => count + 1)}>
                  +
                </PlusMinusButton>
              </CounterContainer>
            </>
          )}
          {challengeStatus ? (
            <StartedChallengeContainer>
              <ChallengeHeader>Current Challenge</ChallengeHeader>
              <Durationfield>
                Challenge Started <br />
                <StyledSpan>19.12.2021 </StyledSpan>
              </Durationfield>
              <Durationfield>
                Challenge Ends <br />
                <StyledSpan>26.12.2021 </StyledSpan>
              </Durationfield>
              <Durationfield>
                Completed Days <br />
                <StyledSpan>0/7 </StyledSpan>
              </Durationfield>
              <ButtonContainer>
                <RedButton onClick={handleChallengeStatus}>
                  Stop Challenge
                </RedButton>
                <GreenButton>Meditate now</GreenButton>
              </ButtonContainer>
            </StartedChallengeContainer>
          ) : (
            <Button onClick={handleChallengeStatus}>Start Challenge</Button>
          )}
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
  background-image: var(--white);
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

const StartedChallengeContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 1.5rem;
  border-color: var(--grey-700);
  border-radius: 1.5rem;
  box-shadow: var(--box-shadow);
  background-color: var(--grey-100);
`;

const ChallengeHeader = styled.h3`
  font-family: 'Merriweather';
  color: var(--green-700);
  font-weight: 700;
  letter-spacing: var(--letterSpacing);
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: transparent;
`;

const CounterHeader = styled.h2`
  color: var(--grey-900);
  font-size: 0.8rem;
  font-family: 'Open Sans';
  font-weight: 500;
  text-transform: lowercase;
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
  color: var(--grey-700);
  font-weight: 900;
  font-family: 'Open Sans';
  text-transform: uppercase;
  font-size: 0.8rem;
`;

const RedButton = styled(ButtonAlarm)`
  font-size: 0.7rem;
  background-color: white;
`;

const GreenButton = styled(StyledButton)`
  font-size: 0.7rem;
`;

const StyledSpan = styled.span`
  color: var(--black-100);
  font-weight: 900;
  font-size: 1.2rem;
`;
