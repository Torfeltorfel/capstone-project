import React, { useState } from 'react';
import styled from 'styled-components';

export default function SetTimer(): JSX.Element {
  const [duration, setDuration] = useState(10);

  return (
    <>
      <PageContainer>
        <TimeContainer>
          <p>{duration} Min</p>
        </TimeContainer>
        <Range
          type="range"
          min="0"
          max="60"
          value={duration}
          onChange={(event) => setDuration(parseInt(event.target.value))}
        ></Range>
      </PageContainer>
    </>
  );
}

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  background-image: linear-gradient(
    to top,
    rgba(255, 255, 255, 0.5),
    rgba(243, 241, 239, 1)
  );
  background-size: cover;
  max-width: 400px;
`;

const TimeContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 4rem solid rgba(255, 255, 255, 0.927);
  background-color: transparent;
  border-radius: 50%;
  height: 20rem;
  width: 20rem;
`;

const Range = styled.input`
  -webkit-appearance: none !important;
  width: 420px;
  height: 2px;
  background: rgba(158, 169, 151, 1);
  border: none;
  outline: none;

  &::-webkit-slider-thumb {
    -webkit-appearance: none !important;
    width: 30px;
    height: 30px;
    background: #fcfcfc;
    border: 2px solid rgba(184, 197, 172, 1.5);
    border-radius: 50%;
    cursor: pointer;
  }

  &::-webkit-slider-thumb:hover {
    background: rgba(184, 197, 172, 1.5);
  }
`;
