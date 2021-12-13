import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { getDatesBetweenDates } from '../utils/getDatesBetweenDates';

type TileProps = {
  sessionDuration: number;
  backgroundImageURL: string;
};

export default function Tile({
  sessionDuration,
  backgroundImageURL,
}: TileProps): JSX.Element {
  function onClick(sessionDuration: number) {
    localStorage.setItem('Duration', JSON.stringify(sessionDuration));
    getDatesBetweenDates(sessionDuration);
  }

  return (
    <Link to="/timer" onClick={() => onClick(sessionDuration)}>
      <Container
        backgroundImageURL={backgroundImageURL}
        sessionDuration={sessionDuration}
      >
        <TextContainer>
          <Description>{sessionDuration} Minutes a Day for 30 Days</Description>
        </TextContainer>
      </Container>
    </Link>
  );
}

const Container = styled.div<TileProps>`
  border-radius: 0.75rem;
  box-shadow: var(--box-shadow);
  background-image: ${(props) => `url(${props.backgroundImageURL})`};
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  overflow: hidden;
  flex: 1;
  min-height: 12rem;
`;

const TextContainer = styled.div`
  overflow: hidden;
  padding: 0.1rem 0.4rem;
  background-color: var(--black-100);
`;

const Description = styled.p`
  margin: 0.3rem;
  font-size: 0.8rem;
  font-weight: 900;
  font-family: 'Open Sans';
  color: var(--white);
`;
