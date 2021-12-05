import type { ReactNode } from 'react';
import React from 'react';
import styled from 'styled-components';

type TileProps = {
  children: ReactNode;
  backgroundImageURL: string;
};

export default function Tile({
  children,
  backgroundImageURL,
}: TileProps): JSX.Element {
  return (
    <Container backgroundImageURL={backgroundImageURL}>
      <TextContainer>
        <Headline>{children}</Headline>
      </TextContainer>
    </Container>
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
  min-height: 10rem;
`;

const TextContainer = styled.div`
  overflow: hidden;
  padding: 0.1rem 0.4rem;
  background-color: var(--black-700);
  opacity: 50%;
`;

const Headline = styled.h1`
  color: var(--white);
  font-size: 1rem;
  font-weight: 900;
  font-family: 'Open Sans';
`;
