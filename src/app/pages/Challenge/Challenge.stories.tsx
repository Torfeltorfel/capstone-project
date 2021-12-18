import React from 'react';
import Challenge from './Challenge';

export default {
  title: 'Page/Challenge',
  component: Challenge,
};

export const Default = (): JSX.Element => (
  <Challenge challengeStatus={true} handleChallengeStatus={console.log} />
);
