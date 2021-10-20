import { DayName, DaysList, DayTemp, TempBox, WeekDay } from "../layout"

export const List = ({data}) => {
  return (
    <DaysList>
      {data.map((item) => (
        <WeekDay>
          <DayName>{item.day}</DayName>
          <TempBox>
            <DayTemp>{item.min}</DayTemp>
            <DayTemp>{item.max}</DayTemp>
          </TempBox>
        </WeekDay>
      ))}
    </DaysList>
  )
}

export default List
