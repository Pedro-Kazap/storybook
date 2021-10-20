import { WeatherBody, BuscarContainer } from "../layout";
import Home from "../info";
import Title from "../title";
import Input from "../input";
import Button from "../button";
import PropTypes from "prop-types";

var Weather = function Weather(_ref) {
  var data = _ref.data;
  return /*#__PURE__*/React.createElement(WeatherBody, null, /*#__PURE__*/React.createElement(Title, {
    label: "Previs\xE3o do Tempo"
  }), /*#__PURE__*/React.createElement(Home, {
    data: data
  }), /*#__PURE__*/React.createElement(BuscarContainer, null, /*#__PURE__*/React.createElement(Input, null), /*#__PURE__*/React.createElement(Button, {
    label: "buscar"
  })));
};

Weather.propTypes = process.env.NODE_ENV !== "production" ? {
  data: PropTypes.array
} : {};
export default Weather;