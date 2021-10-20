import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

var Button = function Button(_ref) {
  var label = _ref.label,
      color = _ref.color,
      onClick = _ref.onClick,
      disabled = _ref.disabled;
  return /*#__PURE__*/React.createElement("button", {
    onClick: onClick,
    disabled: disabled,
    className: color
  }, label);
};

Button.defaultProps = {
  color: 'success'
};
Button.propTypes = process.env.NODE_ENV !== "production" ? {
  label: PropTypes.string,
  color: PropTypes.oneOf(['success', 'error']),
  disabled: PropTypes.bool,
  onClick: PropTypes.func
} : {};
export default Button;