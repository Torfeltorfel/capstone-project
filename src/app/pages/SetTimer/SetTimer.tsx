import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import BackButton from '../../components/Buttons/BackButton/BackButton';
import Button from '../../components/Buttons/Button/Button';
import useLocalStorage from '../../hooks/useLocaleStorage';
import plantIMG from './utilities/plant.png';
import monsteraImg from './utilities/monstera.png';

export default function SetTimer(): JSX.Element {
  const [duration, setDuration] = useLocalStorage(0, 'Duration');

  return (
    <>
      <PageContainer>
        <StyledLink to="/home">
          <BackButton />
        </StyledLink>
        <StyledIMG src={plantIMG}></StyledIMG>
        <Header>Set up a time</Header>
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
        <StyledMonsteraImg src={monsteraImg}></StyledMonsteraImg>
        <Link to="/timer">
          <Button>Start</Button>
        </Link>
      </PageContainer>
      <ColorContainer />
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
  overflow: hidden;
  position: relative;
  padding-bottom: 1rem;
`;

const ColorContainer = styled.div`
  height: 100vh;
  width: 100vw;
  position: absolute;
  z-index: -500;
  background: var(--white-background);
  transform: translateY(-100%);
`;

const StyledMonsteraImg = styled.img`
  height: 14rem;
  width: auto;
  position: absolute;
  transform: rotate(120deg) translateX(-18rem) translateY(-2.5rem);
`;

const StyledIMG = styled.img`
  height: 16rem;
  width: auto;
  position: absolute;
  transform: rotate(0deg) translateX(-10rem) translateY(18rem) scaleX(-1);
  filter: brightness(75%);
`;

const StyledLink = styled(Link)`
  align-self: flex-start;
  margin-left: 2rem;
  margin-top: 2rem;
`;

const Header = styled.h1`
  color: var(--grey-700);
  text-transform: lowercase;
  font-size: 1.125rem;
  font-family: 'Merriweather';
  letter-spacing: 0.1em;
`;

const TimeCircle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 3rem solid var(--grey-500);
  opacity: 0.8;
  background-color: transparent;
  border-radius: 50%;
  height: 18rem;
  width: 18rem;
  z-index: 400;
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
