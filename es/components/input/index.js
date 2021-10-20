import React from "react";
import PropTypes from "prop-types";
import "./styles.css";

var Input = function Input(_ref) {
  var onChange = _ref.onChange,
      disabled = _ref.disabled,
      className = _ref.className;
  return /*#__PURE__*/React.createElement("input", {
    onChange: onChange,
    disabled: disabled,
    className: className
  });
};

Input.defaultProps = {
  color: "success"
};
Input.propTypes = process.env.NODE_ENV !== "production" ? {
  className: PropTypes.string,
  disabled: PropTypes.bool,
  onChange: PropTypes.func
} : {};
export default Input;