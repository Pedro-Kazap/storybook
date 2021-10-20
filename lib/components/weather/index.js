"use strict";

exports.__esModule = true;
exports.default = void 0;

var _layout = require("../layout");

var _info = _interopRequireDefault(require("../info"));

var _title = _interopRequireDefault(require("../title"));

var _input = _interopRequireDefault(require("../input"));

var _button = _interopRequireDefault(require("../button"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Weather = function Weather(_ref) {
  var data = _ref.data;
  return /*#__PURE__*/React.createElement(_layout.WeatherBody, null, /*#__PURE__*/React.createElement(_title.default, {
    label: "Previs\xE3o do Tempo"
  }), /*#__PURE__*/React.createElement(_info.default, {
    data: data
  }), /*#__PURE__*/React.createElement(_layout.BuscarContainer, null, /*#__PURE__*/React.createElement(_input.default, null), /*#__PURE__*/React.createElement(_button.default, {
    label: "buscar"
  })));
};

Weather.propTypes = process.env.NODE_ENV !== "production" ? {
  data: _propTypes.default.array
} : {};
var _default = Weather;
exports.default = _default;
module.exports = exports.default;