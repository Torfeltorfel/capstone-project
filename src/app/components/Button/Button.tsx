import type { ReactNode } from 'react';
import React from 'react';
import styled from 'styled-components';

type ButtonProps = {
  children: ReactNode;
};
export default function Button({ children }: ButtonProps): JSX.Element {
  return <StyledButton>{children}</StyledButton>;
}

const StyledButton = styled.button`
  border-radius: 1em;
  background-image: var(--primary-green);
  color: var(--white);
  padding: 0.8em 2em;
  border: none;
  text-transform: uppercase;
`;
