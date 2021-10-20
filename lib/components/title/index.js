"use strict";

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

require("./styles.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Card = function Card(_ref) {
  var label = _ref.label,
      disabled = _ref.disabled;
  return /*#__PURE__*/_react.default.createElement("h1", {
    class: "header",
    disabled: disabled
  }, label);
};

Card.propTypes = process.env.NODE_ENV !== "production" ? {
  label: _propTypes.default.string,
  disabled: _propTypes.default.bool
} : {};
var _default = Card;
exports.default = _default;
module.exports = exports.default;