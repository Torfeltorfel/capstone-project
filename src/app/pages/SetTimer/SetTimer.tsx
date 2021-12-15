import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import BackButton from '../../components/Buttons/BackButton/BackButton';
import Button from '../../components/Buttons/Button/Button';
import useLocalStorage from '../../hooks/useLocaleStorage';

export default function SetTimer(): JSX.Element {
  const [duration, setDuration] = useLocalStorage(0, 'Duration');

  return (
    <>
      <PageContainer>
        <StyledLink to="/home">
          <BackButton />
        </StyledLink>
        <Header>Set up the Timer</Header>
        <TimeCircle>
          <Duration>{duration} Min</Duration>
        </TimeCircle>
        <Range
          type="range"
          min="0"
          max="60"
          value={duration}
          onChange={(event) => setDuration(parseInt(event.target.value))}
        ></Range>
        <Link to="/timer">
          <Button>Start</Button>
        </Link>
      </PageContainer>
    </>
  );
}

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  height: 100vh;
  width: 100vw;
  background: var(--white);
  background-size: cover;
  max-width: 25rem;
`;

const StyledLink = styled(Link)`
  align-self: flex-start;
  margin-left: 2rem;
`;

const Header = styled.h1`
  color: var(--font-primary-dark);
  text-transform: uppercase;
  font-size: 1.125rem;
  font-family: 'Merriweather';
`;

const TimeCircle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 3rem solid var(--grey-300);
  background-color: transparent;
  border-radius: 50%;
  height: 20rem;
  width: 20rem;
`;

const Duration = styled.p`
  color: var(--green-simple);
  font-family: 'Open sans';
  font-size: 1.25rem;
`;

const Range = styled.input`
  -webkit-appearance: none !important;
  width: 60%;
  height: 0.125rem;
  background: var(--green-simple);
  border: none;
  outline: none;

  &::-webkit-slider-thumb {
    -webkit-appearance: none !important;
    width: 1.875rem;
    height: 1.875rem;
    background: #fcfcfc;
    border: 0.031rem solid var(--green-simple);
    border-radius: 50%;
    cursor: pointer;
  }

  &::-webkit-slider-thumb:hover {
    background: var(--green-simple);
  }
`;
