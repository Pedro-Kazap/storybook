import React from "react";
import documents from "./notes.md";
import List from ".";
export default {
  title: "List",
  parameters: {
    notes: documents
  }
};
export var Example = function Example() {
  return /*#__PURE__*/React.createElement(List, {
    data: data.nextDays
  });
};
var data = {
  city: "Niterói",
  state: "RJ",
  country: "Brasil",
  temperature: "20°C",
  weather: "Nublado",
  min: "16°",
  max: "25°",
  feeling: "19°",
  wind: "18km/h",
  humidity: "89%",
  nextDays: [{
    day: "Terça",
    min: "18°",
    max: "26°"
  }, {
    day: "Quarta",
    min: "18°",
    max: "28°"
  }, {
    day: "Quinta",
    min: "19°",
    max: "30°"
  }, {
    day: "Sexta",
    min: "23°",
    max: "35°"
  }, {
    day: "Sábado",
    min: "23°",
    max: "37°"
  }]
};