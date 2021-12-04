import type { ReactNode } from 'react';
import React from 'react';
import styled from 'styled-components';

type ButtonProps = {
  children: ReactNode;
  saveTime?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  onClick?: () => void;
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
  box-shadow: var(--box-shadow);
  padding: 0.8em 2em;
  border: none;
  text-transform: uppercase;
  &:active {
    opacity: 70%;
  }
`;
