import React from 'react';
import 'react-modern-calendar-datepicker/lib/DatePicker.css';
import { Calendar } from 'react-modern-calendar-datepicker';
import styled from 'styled-components';
import './styles.css';

export default function CalendarView(): JSX.Element {
  const sessions = JSON.parse(localStorage.getItem('sessions') || '[]');
  const preselectedDays2 = sessions.forEach(
    (session: {
      h?: number;
      m?: number;
      day: number;
      month: number;
      year: number;
    }) => {
      delete session.h;
      delete session.m;
      console.log(session);
    }
  );
  console.log(preselectedDays2);

  const preselectedDays = [
    {
      day: 2,
      month: 11,
      year: 2021,
    },
    {
      day: 4,
      month: 11,
      year: 2021,
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
        value={preselectedDays2}
        colorPrimary="var(--green-background)"
        calendarClassName="customCalendar"
      />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const Header = styled.h1`
  color: var(--font-primary-dark);
`;
