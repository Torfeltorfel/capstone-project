import React from 'react';
import MeditationPlayer from './MeditationPlayer';

export default {
  title: 'Page/Player',
  component: MeditationPlayer,
};

export const Play = (): JSX.Element => (
  <MeditationPlayer hours={0} minutes={0} seconds={10} />
);

export const Pause = (): JSX.Element => (
  <MeditationPlayer hours={0} minutes={0} seconds={0} />
);
