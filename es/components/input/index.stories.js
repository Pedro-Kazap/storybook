import React from 'react';
import documents from './notes.md';
import { boolean, text } from '@storybook/addon-knobs';
import Input from '.';
export default {
  title: 'Input',
  parameters: {
    notes: documents
  }
};
export var Example = function Example() {
  return /*#__PURE__*/React.createElement(Input, {
    disabled: boolean("disabled", false),
    onChange: onChangeTest,
    className: text("class")
  });
};

var onChangeTest = function onChangeTest() {
  console.log('sad');
};