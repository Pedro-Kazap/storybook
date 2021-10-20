"use strict";

exports.__esModule = true;
exports.default = exports.List = void 0;

var _layout = require("../layout");

var List = function List(_ref) {
  var data = _ref.data;
  return /*#__PURE__*/React.createElement(_layout.DaysList, null, data.map(function (item) {
    return /*#__PURE__*/React.createElement(_layout.WeekDay, null, /*#__PURE__*/React.createElement(_layout.DayName, null, item.day), /*#__PURE__*/React.createElement(_layout.TempBox, null, /*#__PURE__*/React.createElement(_layout.DayTemp, null, item.min), /*#__PURE__*/React.createElement(_layout.DayTemp, null, item.max)));
  }));
};

exports.List = List;
var _default = List;
exports.default = _default;