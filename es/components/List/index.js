import { DayName, DaysList, DayTemp, TempBox, WeekDay } from "../layout";
export var List = function List(_ref) {
  var data = _ref.data;
  return /*#__PURE__*/React.createElement(DaysList, null, data.map(function (item) {
    return /*#__PURE__*/React.createElement(WeekDay, null, /*#__PURE__*/React.createElement(DayName, null, item.day), /*#__PURE__*/React.createElement(TempBox, null, /*#__PURE__*/React.createElement(DayTemp, null, item.min), /*#__PURE__*/React.createElement(DayTemp, null, item.max)));
  }));
};
export default List;