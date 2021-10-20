import React from 'react';
import PropTypes from 'prop-types';
import './styles.css'

const Card = ({ label, disabled }) => (
  <h1 class='header' disabled={disabled}>{label}</h1>
);

Card.propTypes = {
  label: PropTypes.string,
  disabled: PropTypes.bool,
};

export default Card;
