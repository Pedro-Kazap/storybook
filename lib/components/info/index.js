"use strict";

exports.__esModule = true;
exports.default = void 0;

var _layout = require("../layout");

var _List = require("../List");

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Home = function Home(_ref) {
  var data = _ref.data;
  return /*#__PURE__*/React.createElement(_layout.Container, null, /*#__PURE__*/React.createElement(_layout.WeatherBox, null, /*#__PURE__*/React.createElement(_layout.MainBlock, null, /*#__PURE__*/React.createElement(_layout.CityName, null, data.city + ",\n            " + data.state + " - " + data.country), /*#__PURE__*/React.createElement(_layout.MainContent, null, data.temperature + " " + data.weather), /*#__PURE__*/React.createElement(_layout.SecundaryInfo, null, /*#__PURE__*/React.createElement(_layout.XMargin, null, /*#__PURE__*/React.createElement(_layout.InfoLabel, null, "min:", /*#__PURE__*/React.createElement(_layout.InfoValue, null, data.min), "max:", /*#__PURE__*/React.createElement(_layout.InfoValue, null, data.max))), /*#__PURE__*/React.createElement(_layout.XMargin, null, /*#__PURE__*/React.createElement(_layout.InfoLabel, null, "Sensa\xE7\xE3o:"), /*#__PURE__*/React.createElement(_layout.InfoValue, null, data.feeling)), /*#__PURE__*/React.createElement(_layout.XMargin, null, /*#__PURE__*/React.createElement(_layout.InfoLabel, null, "Vento:"), /*#__PURE__*/React.createElement(_layout.InfoValue, null, data.wind)), /*#__PURE__*/React.createElement(_layout.XMargin, null, /*#__PURE__*/React.createElement(_layout.InfoLabel, null, "Humidade:"), /*#__PURE__*/React.createElement(_layout.InfoValue, null, data.humidity)))), /*#__PURE__*/React.createElement(_List.List, {
    data: data.nextDays
  })));
};

Home.propTypes = process.env.NODE_ENV !== "production" ? {
  data: _propTypes.default.array
} : {};
var _default = Home;
exports.default = _default;
module.exports = exports.default;