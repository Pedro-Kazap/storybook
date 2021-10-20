"use strict";

exports.__esModule = true;
exports.default = exports.Example = void 0;

var _react = _interopRequireDefault(require("react"));

var _notes = _interopRequireDefault(require("./notes.md"));

var _addonKnobs = require("@storybook/addon-knobs");

var _ = _interopRequireDefault(require("."));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
  title: 'title',
  parameters: {
    notes: _notes.default
  }
};
exports.default = _default;

var Example = function Example() {
  return /*#__PURE__*/_react.default.createElement(_.default, {
    disabled: (0, _addonKnobs.boolean)('disabled', false),
    label: (0, _addonKnobs.text)('label', 'Previsão do Tempo')
  });
};

exports.Example = Example;