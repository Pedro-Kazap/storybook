import React from 'react';
import documents from './notes.md';
import { boolean, text } from '@storybook/addon-knobs';
import Title from '.';
export default {
  title: 'title',
  parameters: {
    notes: documents
  }
};
export var Example = function Example() {
  return /*#__PURE__*/React.createElement(Title, {
    disabled: boolean('disabled', false),
    label: text('label', 'Previsão do Tempo')
  });
};