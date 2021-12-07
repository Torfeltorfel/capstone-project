import React from 'react';
import styled from 'styled-components';
import ArrowIcon from './assets/ArrowIcon';
import { useNavigate } from 'react-router-dom';

export default function BackButton(): JSX.Element {
  const navigate = useNavigate();
  return (
    <Button onClick={() => navigate(-1)}>
      <ArrowIcon />
    </Button>
  );
}

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 2rem;
  min-width: 2rem;
  border: 1px solid rgba(184, 197, 172, 1.5);
  border-radius: 50%;
  background-color: transparent;
  &:active {
    opacity: 0.5;
  }
`;
