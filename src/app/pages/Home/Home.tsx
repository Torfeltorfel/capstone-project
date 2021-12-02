import React from 'react';
import styled from 'styled-components';
import Navigation from '../../components/Navigation/Navigation';
import BackgroundImage from './assets/mountains.jpeg';

export default function Home(): JSX.Element {
  return (
    <PageContainer>
      <ContentContainer>
        <Header>Welcome back</Header>
      </ContentContainer>
      <Navigation />
    </PageContainer>
  );
}

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 100vh;
  max-width: 25rem;
  background-image: url(${BackgroundImage});
  background-size: cover;
`;

const ContentContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100vw;
`;

const Header = styled.h1`
  font-family: 'Merryweather';
  font-size: var(--h1-size);
  margin-top: 5rem;
`;
