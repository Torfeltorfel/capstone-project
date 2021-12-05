import type { ReactNode } from 'react';
import React from 'react';
import styled from 'styled-components';

type ButtonProps = {
  children: ReactNode;
  onClick?: () => void;
  color?: string;
  inOutLine?: string;
};

export default function Button({
  children,
  onClick,
  color,
  inOutLine,
}: ButtonProps): JSX.Element {
  return <StyledButton onClick={onClick}>{children}</StyledButton>;
}

const StyledButton = styled.button`
  border-radius: 1em;
  background-image: var(--green-background);
  color: #fff;
  box-shadow: var(--box-shadow);
  padding: 0.8em 2em;
  border: none;
  text-transform: uppercase;
  &:active {
    opacity: 70%;
  }
`;
