import React from 'react';
import styled from 'styled-components';
import ArrowIcon from './assets/ArrowIcon';

export default function BackButton(): JSX.Element {
  return (
    <Button>
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
