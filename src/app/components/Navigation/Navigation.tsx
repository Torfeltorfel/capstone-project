import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import AnalyticsIconThin from './assets/AnalyticsIconThin';
import HomeIconThin from './assets/HomeIcon';
import SittingIcon from './assets/SittingIcon';

export default function Navigation(): JSX.Element {
  return (
    <Container>
      <Link to="/">
        <HomeIconThin />
      </Link>
      <Link to="/settimer">
        <SittingIcon />
      </Link>
      <Link to="dashboard">
        <AnalyticsIconThin />
      </Link>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 6rem;
  width: 100vw;
  max-width: 25rem;
  background-color: var(--white);
  border-radius: 0.313rem 0.313rem 0 0;
  border-top: 0.031rem solid var(--grey-300);
`;
