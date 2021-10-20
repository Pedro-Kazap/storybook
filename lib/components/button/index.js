"use strict";

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

require("./styles.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Button = function Button(_ref) {
  var label = _ref.label,
      color = _ref.color,
      onClick = _ref.onClick,
      disabled = _ref.disabled;
  return /*#__PURE__*/_react.default.createElement("button", {
    onClick: onClick,
    disabled: disabled,
    className: color
  }, label);
};

Button.defaultProps = {
  color: 'success'
};
Button.propTypes = process.env.NODE_ENV !== "production" ? {
  label: _propTypes.default.string,
  color: _propTypes.default.oneOf(['success', 'error']),
  disabled: _propTypes.default.bool,
  onClick: _propTypes.default.func
} : {};
var _default = Button;
exports.default = _default;
module.exports = exports.default;