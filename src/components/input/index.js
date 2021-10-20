import React from "react"
import PropTypes from "prop-types"
import "./styles.css"

const Input = ({onChange, disabled, className}) => (
  <input
    onChange={onChange}
    disabled={disabled}
    className={className}
  ></input>
)

Input.defaultProps = {
  color: "success",
}

Input.propTypes = {
  className: PropTypes.string,
  disabled: PropTypes.bool,
  onChange: PropTypes.func,
}

export default Input
