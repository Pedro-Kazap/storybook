"use strict";

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

require("./styles.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Input = function Input(_ref) {
  var onChange = _ref.onChange,
      disabled = _ref.disabled,
      className = _ref.className;
  return /*#__PURE__*/_react.default.createElement("input", {
    onChange: onChange,
    disabled: disabled,
    className: className
  });
};

Input.defaultProps = {
  color: "success"
};
Input.propTypes = process.env.NODE_ENV !== "production" ? {
  className: _propTypes.default.string,
  disabled: _propTypes.default.bool,
  onChange: _propTypes.default.func
} : {};
var _default = Input;
exports.default = _default;
module.exports = exports.default;