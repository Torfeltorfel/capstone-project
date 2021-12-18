import React from 'react';
import styled from 'styled-components';
import CalendarView from '../../components/Calendar/CalendarView';
import Navigation from '../../components/Navigation/Navigation';

export default function Dashboard(): JSX.Element {
  return (
    <PageContainer>
      <ContentContainer>
        <StyledHeadline>Dashboard</StyledHeadline>
        <CalendarView />
      </ContentContainer>
      <Navigation activeLink="dashboard" />
    </PageContainer>
  );
}

const PageContainer = styled.div`
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

const StyledHeadline = styled.h1`
  margin: 1rem 0.5rem;
  font-family: 'Merriweather';
  font-size: var(--h1-size);
  text-transform: uppercase;
  color: var(--green-simple);
  letter-spacing: var(--letterSpacing);
`;
