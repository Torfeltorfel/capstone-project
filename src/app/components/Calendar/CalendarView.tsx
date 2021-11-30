import React from 'react';
import 'react-modern-calendar-datepicker/lib/DatePicker.css';
import { Calendar } from 'react-modern-calendar-datepicker';
import styled from 'styled-components';

export default function CalendarView(): JSX.Element {
  const preselectedDays = [
    {
      year: 2021,
      month: 10,
      day: 2,
    },
    {
      year: 2021,
      month: 10,
      day: 15,
    },
    {
      year: 2021,
      month: 10,
      day: 30,
    },
  ];

  return (
    <Container>
      <Header>Your Meditation sessions</Header>
      <Calendar
        value={preselectedDays}
        colorPrimary="var(--green-background)"
      />
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

const Header = styled.h1`
  color: var(--font-primary-dark);
`;
