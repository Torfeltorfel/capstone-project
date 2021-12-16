import React from 'react';
import styled from 'styled-components';
import Navigation from '../../components/Navigation/Navigation';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

export default function Dashboard(): JSX.Element {
  return (
    <Container>
      <Calendar />
      <Navigation activeLink="dashboard" />
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
