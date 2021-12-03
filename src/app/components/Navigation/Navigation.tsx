import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import AnalyticsIcon from './assets/AnalyticsIcon';
import HomeIcon from './assets/HomeIcon';
import SittingIcon from './assets/SittingIcon';

type NavigationProps = {
  activeLink?: 'home' | 'dashboard';
};

export default function Navigation({
  activeLink,
}: NavigationProps): JSX.Element {
  return (
    <Container>
      <Link to={'/home'}>
        <HomeIcon
          stroke={
            activeLink === 'home' ? 'var(--green-simple)' : 'var(--grey-700)'
          }
        />
      </Link>
      <Link to={'/settimer'}>
        <SittingIcon stroke={'var(--grey-700)'} />
      </Link>
      <Link to={'/dashboard'}>
        <AnalyticsIcon
          stroke={
            activeLink === 'dashboard'
              ? 'var(--green-simple)'
              : 'var(--grey-700)'
          }
        />
      </Link>
    </Container>
  );
}

const Container = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 5rem;
  max-height: 5rem;
  width: 100vw;
  max-width: 25rem;
  background-color: var(--white);
  border-radius: 0.313rem 0.313rem 0 0;
  border-top: 0.031rem solid var(--grey-300);
`;
