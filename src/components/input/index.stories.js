import React from 'react';

import documents from './notes.md'

import { boolean, text } from '@storybook/addon-knobs';
import Input from '.';


export default {
  title: 'Input',
  parameters: {
    notes: documents,
  },
};

export const Example = () => {
  return (
    <Input
      disabled={boolean("disabled", false)}
      onChange={onChangeTest}
      className={text("class")}
    ></Input>
  )
};


const onChangeTest = () => {
  console.log('sad')
};
