import React from 'react';
import 'react-modern-calendar-datepicker/lib/DatePicker.css';
import { Calendar } from 'react-modern-calendar-datepicker';
import styled from 'styled-components';
import './styles.css';
import useFetch from '../../hooks/useFetch';
import type { ObjectID } from 'bson';

type Session = {
  _id: ObjectID;
  session: { year: number; month: number; day: number; h: number; m: number };
};

export default function CalendarView(): JSX.Element {
  /* const sessionsLocal = JSON.parse(localStorage.getItem('sessions') || '[]'); */
  const sessions = useFetch<Session[]>('api/sessions') || [];
  const sessionArray = sessions.map((session) => {
    return session.session; /* { 
      h: session.session.h,
      m: session.session.m,
      year: session.session.year,
      month: session.session.month,
      day: session.session.day,
    }; */
  });

  return (
    <Container>
      <Header>Your Meditation sessions</Header>
      <Calendar
        value={sessionArray}
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
  height: 100vh;
`;

const Header = styled.h1`
  color: var(--font-primary-dark);
`;
