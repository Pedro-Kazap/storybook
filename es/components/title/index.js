import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

var Card = function Card(_ref) {
  var label = _ref.label,
      disabled = _ref.disabled;
  return /*#__PURE__*/React.createElement("h1", {
    class: "header",
    disabled: disabled
  }, label);
};

Card.propTypes = process.env.NODE_ENV !== "production" ? {
  label: PropTypes.string,
  disabled: PropTypes.bool
} : {};
export default Card;