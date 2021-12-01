import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Button from '../Button/Button';

export default function SetTimer(): JSX.Element {
  const [duration, setDuration] = useState(10);

  return (
    <>
      <PageContainer>
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
  max-width: 400px;
`;

const Header = styled.h1`
  color: var(--font-primary-dark);
  text-transform: uppercase;
  font-size: 18px;
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
  font-size: 20px;
`;

const Range = styled.input`
  -webkit-appearance: none !important;
  width: 60%;
  height: 2px;
  background: var(--green-simple);
  border: none;
  outline: none;

  &::-webkit-slider-thumb {
    -webkit-appearance: none !important;
    width: 30px;
    height: 30px;
    background: #fcfcfc;
    border: 2px solid var(--green-simple);
    border-radius: 50%;
    cursor: pointer;
  }

  &::-webkit-slider-thumb:hover {
    background: var(--green-simple);
  }
`;
