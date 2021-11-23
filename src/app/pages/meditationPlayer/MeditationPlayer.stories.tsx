import React from 'react';
import MeditationPlayer from './MeditationPlayer';

export default {
  title: 'Page/Player',
  component: MeditationPlayer,
};

export const Play = (): JSX.Element => (
  <MeditationPlayer>Play</MeditationPlayer>
);

export const Pause = (): JSX.Element => (
  <MeditationPlayer>Pause</MeditationPlayer>
);