import type { ReactNode } from 'react';
import React from 'react';
import styled from 'styled-components';

type ButtonProps = {
  children: ReactNode;
  onClick?: () => void;
};

export default function Button({
  children,
  onClick,
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

export const ButtonRed = styled(StyledButton)`
  border: 0.063rem solid;
  border-color: var(--red-500);
  background: transparent;
  color: red;
`;
