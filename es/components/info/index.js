import { CityName, Container, MainBlock, WeatherBox, MainContent, SecundaryInfo, InfoLabel, InfoValue, XMargin } from "../layout";
import { List } from "../List";
import PropTypes from "prop-types";

var Home = function Home(_ref) {
  var data = _ref.data;
  return /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement(WeatherBox, null, /*#__PURE__*/React.createElement(MainBlock, null, /*#__PURE__*/React.createElement(CityName, null, data.city + ",\n            " + data.state + " - " + data.country), /*#__PURE__*/React.createElement(MainContent, null, data.temperature + " " + data.weather), /*#__PURE__*/React.createElement(SecundaryInfo, null, /*#__PURE__*/React.createElement(XMargin, null, /*#__PURE__*/React.createElement(InfoLabel, null, "min:", /*#__PURE__*/React.createElement(InfoValue, null, data.min), "max:", /*#__PURE__*/React.createElement(InfoValue, null, data.max))), /*#__PURE__*/React.createElement(XMargin, null, /*#__PURE__*/React.createElement(InfoLabel, null, "Sensa\xE7\xE3o:"), /*#__PURE__*/React.createElement(InfoValue, null, data.feeling)), /*#__PURE__*/React.createElement(XMargin, null, /*#__PURE__*/React.createElement(InfoLabel, null, "Vento:"), /*#__PURE__*/React.createElement(InfoValue, null, data.wind)), /*#__PURE__*/React.createElement(XMargin, null, /*#__PURE__*/React.createElement(InfoLabel, null, "Humidade:"), /*#__PURE__*/React.createElement(InfoValue, null, data.humidity)))), /*#__PURE__*/React.createElement(List, {
    data: data.nextDays
  })));
};

Home.propTypes = process.env.NODE_ENV !== "production" ? {
  data: PropTypes.array
} : {};
export default Home;