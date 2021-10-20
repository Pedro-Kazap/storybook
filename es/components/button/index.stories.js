import React from 'react';
import documents from './notes.md';
import { object, text, boolean, select } from '@storybook/addon-knobs';
import Button from '.';
export default {
  title: 'Button',
  parameters: {
    notes: documents
  }
};
export var Example = function Example() {
  return /*#__PURE__*/React.createElement(Button, {
    color: select('color', colorOptions, 'success'),
    onClick: object('onClick', onClickTest),
    disabled: boolean('disabled', false),
    label: text('label', 'buscar')
  });
};

var onClickTest = function onClickTest() {
  console.log(documents);
  alert('You clicked me!');
};

var colorOptions = {
  success: 'success',
  error: 'error'
};