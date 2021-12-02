import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Button from '../Button/Button';

export default function SuccessOverlay(): JSX.Element {
  return (
    <Container>
      <Modal>
        <Header>finished</Header>
        <Link to="/dashboard">
          <Button>view dashboard</Button>
        </Link>
      </Modal>
    </Container>
  );
}

const Container = styled.div`
  position: fixed;
  height: 100vh;
  width: 100vw;
  max-width: 350px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: transparent;
`;

const Modal = styled.div`
  height: 80vh;
  width: 80vw;
  border-radius: 10px;
  box-shadow: 0 4px 6px hsla(0, 0%, 0%, 0.2);
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Header = styled.h1`
  color: #333438;
  font-weight: 300;
  text-transform: uppercase;
  margin-bottom: 6rem;
`;
