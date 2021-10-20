import styled from "styled-components"

export const Container = styled.div`
  width: 720px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
`

export const WeatherBox = styled.div`
  width: 600px;
  height: 340px;
  background-color: #fef3e4;
  color: #505050;
  padding: 15px;
  display: flex;
  flex-direction: column;
`

export const MainBlock = styled.div`
  padding: 0 15px;
  border-bottom: 1px solid #faa346;
  flex: 1;
  font-weight: bold;
  padding: 15px 40px 10px;
  margin-bottom: 15px;
`

export const SecundaryInfo = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 400px;
  font-size: 22px;
  height: 90px;
`

export const XMargin = styled.div`
  margin-right: 15px;
`

export const DaysList = styled.ul`
  display: flex;
  justify-content: space-around;
`

export const WeekDay = styled.li`
  min-width: 78px;
  font-size: 20px;
  display: flex;
  flex-direction: column;
  font-weight: bold;
  text-align: center;
`

export const CityName = styled.p`
  font-size: 18px;
`

export const MainContent = styled.p`
  font-size: 38px;
  margin: 32px 0;
`

export const InfoLabel = styled.span`
  font-weight: 300;
`

export const InfoValue = styled.span`
  font-weight: bold;
`

export const DayName = styled.span`
  /* display: block; */
`

export const TempBox = styled.div`
  display: flex;
  justify-content: space-evenly;
`
export const DayTemp = styled.span`
  color: #f99125;
  font-size: 18px;
`

export const WeatherBody = styled.body`
  margin: 0;
  height: 100vh;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background: linear-gradient(#ff7f00, #ffbb00);`

  export const BuscarContainer = styled.div`
    width: 720px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
  `
