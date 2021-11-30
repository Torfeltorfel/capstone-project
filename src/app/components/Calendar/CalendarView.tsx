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
      <h1>Your Meditation sessions</h1>
      <Calendar value={preselectedDays} />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
