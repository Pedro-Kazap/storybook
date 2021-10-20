import React from 'react';

import documents from './notes.md'

import {array } from '@storybook/addon-knobs';
import Weather from "."


export default {
  title: 'app',
  parameters: {
    notes: documents,
  },
};

export const Example = () => {
  return (
    <Weather
      data={array("array", data)}
    />
  )
};

const data = {
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
  nextDays: [
    {
      day: "Terça",
      min: "18°",
      max: "26°",
    },
    {
      day: "Quarta",
      min: "18°",
      max: "28°",
    },
    {
      day: "Quinta",
      min: "19°",
      max: "30°",
    },
    {
      day: "Sexta",
      min: "23°",
      max: "35°",
    },
    {
      day: "Sábado",
      min: "23°",
      max: "37°",
    },
  ],
}
