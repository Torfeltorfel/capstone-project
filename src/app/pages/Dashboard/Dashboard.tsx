import React from 'react';
import styled from 'styled-components';
import CalendarView from '../../components/Calendar/CalendarView';
import Navigation from '../../components/Navigation/Navigation';

export default function Dashboard(): JSX.Element {
  return (
    <Container>
      {<CalendarView />}
      <Navigation />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 100vh;
  max-width: 400px;
  background-color: var(--white-background);
`;
