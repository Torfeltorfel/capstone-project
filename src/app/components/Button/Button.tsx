import type { ReactNode } from 'react';
import React from 'react';
import styled from 'styled-components';

type ButtonProps = {
  children: ReactNode;
  saveTime?: (event: any) => void;
};
export default function Button({
  children,
  saveTime,
}: ButtonProps): JSX.Element {
  return <StyledButton onClick={saveTime}>{children}</StyledButton>;
}

const StyledButton = styled.button`
  border-radius: 1em;
  background-image: linear-gradient(
    to top,
    rgba(184, 197, 172, 1.5),
    rgba(158, 169, 151, 1)
  );
  color: #fff;
  box-shadow: 0 4px 6px hsla(0, 0%, 0%, 0.2);
  padding: 0.8em 2em;
  border: none;
  text-transform: uppercase;
  &:active {
    opacity: 70%;
  }
`;
