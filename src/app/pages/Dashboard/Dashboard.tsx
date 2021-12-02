import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Button from '../../components/Button/Button';
import CalendarView from '../../components/Calendar/CalendarView';

export default function Dashboard(): JSX.Element {
  return (
    <Container>
      <CalendarView />
      <Link to="/settimer">
        <Button>Start Meditation</Button>
      </Link>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 100vh;
  max-width: 400px;
  gap: 4rem;
  background-color: var(--white-background);
`;
