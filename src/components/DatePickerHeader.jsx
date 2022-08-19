import { range } from "lodash"
import { getYear, getMonth } from "date-fns"

const months = [
    "январь",
    "февраль",
    "март",
    "апрель",
    "май",
    "июнь",
    "июль",
    "август",
    "сентябрь",
    "октябрь",
    "ноябрь",
    "декабрь",
  ]

export default function DatePickerHeader({ date, changeYear, changeMonth, decreaseMonth, increaseMonth }) {
    const years = range(1900, getYear(new Date()) + 1, 1)
    
    return(
        <div>
        <button
          type="button"
          class="react-datepicker__navigation react-datepicker__navigation--previous"
          aria-label="Previous Month"
          onClick={() => decreaseMonth()}
        >
          <span class="react-datepicker__navigation-icon react-datepicker__navigation-icon--previous">
            Previous Month
          </span>
        </button>
        <button
          type="button"
          class="react-datepicker__navigation react-datepicker__navigation--next"
          aria-label="Next Month"
          onClick={() => increaseMonth()}
        >
          <span class="react-datepicker__navigation-icon react-datepicker__navigation-icon--next">
            Next Month
          </span>
        </button>
        <div style={{ marginBottom: "5px" }}>
          <div style={{ fontSize: "1.1rem", fontWeight: "bold" }}>
            {months[getMonth(date)]} {getYear(date)}
          </div>
        </div>
        <div>
          <select
            value={months[getMonth(date)]}
            onChange={({ target: { value } }) => changeMonth(months.indexOf(value))}
            style={{ margin: "0 2px", padding: "5px", fontSize: "11px", fontWeight: "400" }}
          >
            {months.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
          <select
            value={getYear(date)}
            onChange={({ target: { value } }) => changeYear(value)}
            style={{ padding: "5px", fontSize: "11px", fontWeight: "400" }}
          >
            {years.map((option) => (
              <option key={option} value={option} style={{ bottom: 0 }}>
                {option}
              </option>
            ))}
          </select>
        </div>
      </div>
    )
}