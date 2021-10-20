import {WeatherBody, BuscarContainer} from "../layout"
import Home from "../info"
import Title from "../title"
import Input from "../input"
import Button from "../button"
import PropTypes from "prop-types"

const Weather = ({data}) => {
  return (
    <WeatherBody>
      <Title label="Previsão do Tempo" />
      <Home data={data} />
      <BuscarContainer>
        <Input></Input>
        <Button label="buscar" />
      </BuscarContainer>
    </WeatherBody>
  )
}

Weather.propTypes = {
  data: PropTypes.array,
}

export default Weather
