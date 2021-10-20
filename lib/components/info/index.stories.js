"use strict";

exports.__esModule = true;
exports.default = exports.Example = void 0;

var _react = _interopRequireDefault(require("react"));

var _notes = _interopRequireDefault(require("./notes.md"));

var _addonKnobs = require("@storybook/addon-knobs");

var _ = _interopRequireDefault(require("."));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
  title: 'city info',
  parameters: {
    notes: _notes.default
  }
};
exports.default = _default;

var Example = function Example() {
  return /*#__PURE__*/_react.default.createElement(_.default, {
    data: (0, _addonKnobs.array)("array", data)
  });
};

exports.Example = Example;
var data = {
  city: "Niterói",
  state: "RJ",
  country: "Brasil",
  temperature: "20°C",
  weather: "Nublado",
  min: "16°",
  max: "25°",
  feeling: "19°",
  wind: "18km/h",
  humidity: "89%",
  nextDays: [{
    day: "Terça",
    min: "18°",
    max: "26°"
  }, {
    day: "Quarta",
    min: "18°",
    max: "28°"
  }, {
    day: "Quinta",
    min: "19°",
    max: "30°"
  }, {
    day: "Sexta",
    min: "23°",
    max: "35°"
  }, {
    day: "Sábado",
    min: "23°",
    max: "37°"
  }]
};