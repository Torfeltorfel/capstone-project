import React from 'react';
import '@amir04lm26/react-modern-calendar-date-picker/lib/DatePicker.css';
import { Calendar } from '@amir04lm26/react-modern-calendar-date-picker';
import './CalendarView.css';
import styled from 'styled-components';
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
    return session.session;
  });

  return (
    <Container>
      <Header>Your Meditation sessions</Header>
      <Calendar
        value={sessionArray}
        colorPrimary="var(--green-background)"
        calendarClassName="calendar"
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

const Header = styled.h2`
  margin: 0.1rem 0.5rem;
  font-family: 'Open Sans';
  font-size: var(--h2-size);
  text-transform: uppercase;
  color: var(--grey-700);
`;
