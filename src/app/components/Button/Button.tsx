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
    background-image: linear-gradient(to top, #b4bab0, #7c8278);
  }
`;
