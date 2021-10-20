"use strict";

exports.__esModule = true;
exports.default = exports.Example = void 0;

var _react = _interopRequireDefault(require("react"));

var _notes = _interopRequireDefault(require("./notes.md"));

var _addonKnobs = require("@storybook/addon-knobs");

var _ = _interopRequireDefault(require("."));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
  title: 'Button',
  parameters: {
    notes: _notes.default
  }
};
exports.default = _default;

var Example = function Example() {
  return /*#__PURE__*/_react.default.createElement(_.default, {
    color: (0, _addonKnobs.select)('color', colorOptions, 'success'),
    onClick: (0, _addonKnobs.object)('onClick', onClickTest),
    disabled: (0, _addonKnobs.boolean)('disabled', false),
    label: (0, _addonKnobs.text)('label', 'buscar')
  });
};

exports.Example = Example;

var onClickTest = function onClickTest() {
  console.log(_notes.default);
  alert('You clicked me!');
};

var colorOptions = {
  success: 'success',
  error: 'error'
};