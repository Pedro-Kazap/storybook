import {
  CityName,
  Container,
  MainBlock,
  WeatherBox,
  MainContent,
  SecundaryInfo,
  InfoLabel,
  InfoValue,
  XMargin,
} from "../layout"

import { List } from "../List"
import PropTypes from "prop-types"


const Home = ({data}) => {
  return (
    <Container>
      <WeatherBox>
        <MainBlock>
          <CityName>
            {`${data.city},
            ${data.state} - ${data.country}`}
          </CityName>
          <MainContent>{`${data.temperature} ${data.weather}`}</MainContent>
          <SecundaryInfo>
            <XMargin>
              <InfoLabel>
                min:
                <InfoValue>{data.min}</InfoValue>
                max:
                <InfoValue>{data.max}</InfoValue>
              </InfoLabel>
            </XMargin>
            <XMargin>
              <InfoLabel>Sensação:</InfoLabel>
              <InfoValue>{data.feeling}</InfoValue>
            </XMargin>
            <XMargin>
              <InfoLabel>Vento:</InfoLabel>
              <InfoValue>{data.wind}</InfoValue>
            </XMargin>
            <XMargin>
              <InfoLabel>Humidade:</InfoLabel>
              <InfoValue>{data.humidity}</InfoValue>
            </XMargin>
          </SecundaryInfo>
        </MainBlock>
        <List data={data.nextDays} />
      </WeatherBox>
    </Container>
  )
}

Home.propTypes = {
  data: PropTypes.array,
}


export default Home
