import React from 'react';
import MeditationPlayer from './MeditationPlayer';

export default {
  title: 'Page/Player',
  component: MeditationPlayer,
};

export const Play = (): JSX.Element => (
  <MeditationPlayer handleChallengeStatus={console.log} />
);

export const Pause = (): JSX.Element => (
  <MeditationPlayer handleChallengeStatus={console.log} />
);
