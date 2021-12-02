import React from 'react';
import styled from 'styled-components';
import AnalyticsIcon from './assets/AnalyticsIcon';
import SittingIcon from './assets/SittingIcon';

export default function Navigation(): JSX.Element {
  return (
    <Container>
      <SittingIcon />
      <AnalyticsIcon />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 6rem;
  width: 100vw;
  background-color: var(--white);
  border-radius: 0.313rem 0.313rem 0 0;
  border-top: 0.031rem solid var(--grey-300);
`;
