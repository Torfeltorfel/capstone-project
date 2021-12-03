import React from 'react';
import 'react-modern-calendar-datepicker/lib/DatePicker.css';
import { Calendar } from 'react-modern-calendar-datepicker';
import styled from 'styled-components';
import './styles.css';

export default function CalendarView(): JSX.Element {
  const sessions = JSON.parse(localStorage.getItem('sessions') || '[]');
  return (
    <Container>
      <Header>Your Meditation sessions</Header>
      <Calendar
        value={sessions}
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
