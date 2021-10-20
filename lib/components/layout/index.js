"use strict";

exports.__esModule = true;
exports.XMargin = exports.WeekDay = exports.WeatherBox = exports.WeatherBody = exports.TempBox = exports.SecundaryInfo = exports.MainContent = exports.MainBlock = exports.InfoValue = exports.InfoLabel = exports.DaysList = exports.DayTemp = exports.DayName = exports.Container = exports.CityName = exports.BuscarContainer = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13, _templateObject14, _templateObject15, _templateObject16;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { if (!raw) { raw = strings.slice(0); } strings.raw = raw; return strings; }

var Container = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteralLoose(["\n  width: 720px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  margin: 0 auto;\n"])));

exports.Container = Container;

var WeatherBox = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteralLoose(["\n  width: 600px;\n  height: 340px;\n  background-color: #fef3e4;\n  color: #505050;\n  padding: 15px;\n  display: flex;\n  flex-direction: column;\n"])));

exports.WeatherBox = WeatherBox;

var MainBlock = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteralLoose(["\n  padding: 0 15px;\n  border-bottom: 1px solid #faa346;\n  flex: 1;\n  font-weight: bold;\n  padding: 15px 40px 10px;\n  margin-bottom: 15px;\n"])));

exports.MainBlock = MainBlock;

var SecundaryInfo = _styledComponents.default.div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteralLoose(["\n  display: flex;\n  flex-wrap: wrap;\n  width: 400px;\n  font-size: 22px;\n  height: 90px;\n"])));

exports.SecundaryInfo = SecundaryInfo;

var XMargin = _styledComponents.default.div(_templateObject5 || (_templateObject5 = _taggedTemplateLiteralLoose(["\n  margin-right: 15px;\n"])));

exports.XMargin = XMargin;

var DaysList = _styledComponents.default.ul(_templateObject6 || (_templateObject6 = _taggedTemplateLiteralLoose(["\n  display: flex;\n  justify-content: space-around;\n"])));

exports.DaysList = DaysList;

var WeekDay = _styledComponents.default.li(_templateObject7 || (_templateObject7 = _taggedTemplateLiteralLoose(["\n  min-width: 78px;\n  font-size: 20px;\n  display: flex;\n  flex-direction: column;\n  font-weight: bold;\n  text-align: center;\n"])));

exports.WeekDay = WeekDay;

var CityName = _styledComponents.default.p(_templateObject8 || (_templateObject8 = _taggedTemplateLiteralLoose(["\n  font-size: 18px;\n"])));

exports.CityName = CityName;

var MainContent = _styledComponents.default.p(_templateObject9 || (_templateObject9 = _taggedTemplateLiteralLoose(["\n  font-size: 38px;\n  margin: 32px 0;\n"])));

exports.MainContent = MainContent;

var InfoLabel = _styledComponents.default.span(_templateObject10 || (_templateObject10 = _taggedTemplateLiteralLoose(["\n  font-weight: 300;\n"])));

exports.InfoLabel = InfoLabel;

var InfoValue = _styledComponents.default.span(_templateObject11 || (_templateObject11 = _taggedTemplateLiteralLoose(["\n  font-weight: bold;\n"])));

exports.InfoValue = InfoValue;

var DayName = _styledComponents.default.span(_templateObject12 || (_templateObject12 = _taggedTemplateLiteralLoose(["\n  /* display: block; */\n"])));

exports.DayName = DayName;

var TempBox = _styledComponents.default.div(_templateObject13 || (_templateObject13 = _taggedTemplateLiteralLoose(["\n  display: flex;\n  justify-content: space-evenly;\n"])));

exports.TempBox = TempBox;

var DayTemp = _styledComponents.default.span(_templateObject14 || (_templateObject14 = _taggedTemplateLiteralLoose(["\n  color: #f99125;\n  font-size: 18px;\n"])));

exports.DayTemp = DayTemp;

var WeatherBody = _styledComponents.default.body(_templateObject15 || (_templateObject15 = _taggedTemplateLiteralLoose(["\n  margin: 0;\n  height: 100vh;\n  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',\n    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',\n    sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  background: linear-gradient(#ff7f00, #ffbb00);"])));

exports.WeatherBody = WeatherBody;

var BuscarContainer = _styledComponents.default.div(_templateObject16 || (_templateObject16 = _taggedTemplateLiteralLoose(["\n    width: 720px;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    margin: 0 auto;\n  "])));

exports.BuscarContainer = BuscarContainer;