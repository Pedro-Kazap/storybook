import React from 'react';

import documents from './notes.md'

import { boolean, text } from '@storybook/addon-knobs';
import Title from '.';


export default {
  title: 'title',
  parameters: {
    notes: documents,
  },
};

export const Example = () => {
  return (
    <Title disabled={boolean('disabled', false)}
     label={text('label', 'Previsão do Tempo')}></Title>
  );
};
