import React, { useState } from 'react';
import styled from 'styled-components';
import Button, { ButtonAlarm } from '../../components/Buttons/Button/Button';
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
          <div>
            <Header>Challenges</Header>
            <Description>Build a habit by meditating every day.</Description>
          </div>
          {challengeStatus ? (
            <StartedChallengeContainer>
              <ChallengeHeader>Current Challenge</ChallengeHeader>
              <Durationfield>
                Challenge Started <br />
                <StyledSpan>20.12.2021 </StyledSpan>
              </Durationfield>
              <Durationfield>
                Challenge Ends <br />
                <StyledSpan>27.12.2021 </StyledSpan>
              </Durationfield>
              <Durationfield>
                Completed Days <br />
                <StyledSpan>0/7 </StyledSpan>
              </Durationfield>
              <ButtonContainer>
                <RedButton onClick={handleChallengeStatus}>
                  Stop Challenge
                </RedButton>
                <GreenButton href="/settimer">Meditate now</GreenButton>
              </ButtonContainer>
            </StartedChallengeContainer>
          ) : (
            <SetupContainer>
              <div>
                <SetupHeader>Set up a new Challenge</SetupHeader>
                <SetupSubHeader>Choose the duration</SetupSubHeader>
              </div>

              <CounterButtonContainer>
                <PlusMinusButton onClick={() => setCount((count) => count - 1)}>
                  -
                </PlusMinusButton>
                <Durationfield>{count} days</Durationfield>
                <PlusMinusButton onClick={() => setCount((count) => count + 1)}>
                  +
                </PlusMinusButton>
              </CounterButtonContainer>

              <Button onClick={handleChallengeStatus}>Start Challenge</Button>
            </SetupContainer>
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
  background-image: var(--white);
  max-width: 25rem;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  overflow-y: scroll;
  gap: 3rem;
`;

const Header = styled.h1`
  color: var(--green-simple);
  font-family: 'Merriweather';
  font-size: var(--h1-size);
  text-transform: uppercase;
  letter-spacing: var(--letterSpacing);
  margin: 0;
`;

const Description = styled.p`
  color: var(--grey-700);
  font-size: 0.8rem;
  font-family: 'Open Sans';
  font-weight: 700;
  margin: 0;
`;

const CounterButtonContainer = styled.div`
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

const SetupContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 5rem;
  gap: 3rem;
  border-radius: 1rem;
  padding: 1.5rem;
  box-shadow: var(--box-shadow);
`;

const SetupHeader = styled.h2`
  font-family: 'Merriweather';
  color: var(--green-simple);
  font-size: var(--h2-size);
  margin-bottom: 0rem;
`;

const SetupSubHeader = styled.h2`
  color: var(--grey-700);
  font-size: 0.8rem;
  font-family: 'Open Sans';
  font-weight: 700;
  margin: 0;
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
  gap: 2rem;
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
  font-size: 0.6rem;
  background-color: white;
`;

const GreenButton = styled.a`
  border-radius: 1em;
  border: 1px solid;
  border-color: var(--green-simple);
  background-image: var(--green-background);
  color: #fff;
  box-shadow: var(--box-shadow);
  padding: 0.8em 2em;
  font-size: 0.6rem;
  text-decoration: none;
  text-transform: uppercase;
  text-align: center;
  font-family: 'Open Sans';
  &:active {
    opacity: 70%;
  }
`;

const StyledSpan = styled.span`
  color: var(--black-100);
  font-weight: 900;
  font-size: 1.2rem;
`;
