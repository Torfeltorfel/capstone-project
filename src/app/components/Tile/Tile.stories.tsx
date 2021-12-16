import React from 'react';
import Tile from './Tile';

export default {
  title: 'Component/Tile',
  component: Tile,
};

export const Grass = (): JSX.Element => (
  <Tile
    sessionDuration={2}
    backgroundImageURL="src/app/components/Tile/assets/grass.jpeg"
    onStartChallenge={console.log}
    id="eins"
    challengeStatus={true}
  ></Tile>
);
