import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import BackButton from '../../components/Buttons/BackButton/BackButton';
import Button from '../../components/Buttons/CTAgreen/CTAgreen';
import Navigation from '../../components/Navigation/Navigation';

export default function Challenge(): JSX.Element {
  return (
    <Container>
      <ContentContainer>
        <StyledLink to="/home">
          <BackButton></BackButton>
        </StyledLink>
        <Header>Your 30 days Challenge</Header>
        <Description>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi
          velit temporibus animi beatae aperiam adipisci placeat.
        </Description>
        <Button>Start Challenge</Button>
      </ContentContainer>

      <Navigation activeLink="challenge" />
    </Container>
  );
}

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: grid;
  grid-template-rows: auto 5rem;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  padding: 2rem;
`;

const StyledLink = styled(Link)`
  align-self: flex-start;
`;

const Header = styled.h1``;

const Description = styled.p``;
