import { useEffect, useRef, useState } from "react"
import DatePicker from "react-datepicker"
import DatePickerHeader from "./DatePickerHeader"
import ru from "date-fns/esm/locale/ru/index.js"
import CalendarIcon from "../icons/calendarIcon"

export default function DataPickerPopup() {
  const [isOpen, setIsOpen] = useState(false)
  const [startDate, setStartDate] = useState(new Date())
  const inputRef = useRef(null)
  const pickerRef = useRef(null)

  function padTo2Digits(num) {
    return num.toString().padStart(2, "0")
  }

  function formatDate(date) {
    return [padTo2Digits(date.getDate()), padTo2Digits(date.getMonth() + 1), date.getFullYear()].join("-")
  }

  const datePickerOpen = () => {
    setIsOpen(true)
  }

  useEffect(() => {
    if (!isOpen) return

    const handleClick = (e) => {
      if (!inputRef.current.contains(e.target) && !pickerRef.current.contains(e.target)) {
        setIsOpen(false)
      }
    }

    document.addEventListener("click", handleClick)

    return () => {
      document.removeEventListener("click", handleClick)
    }
  }, [isOpen])

  return (
    <div>
      <label for="date" class="form-label">
        Дата рождения
      </label>
      <div class="input-group" style={{position: 'relative'}} onClick={() => datePickerOpen()} ref={inputRef}>
        <input
          type="text"
          id="date"
          class="form-control"
          aria-label="Amount (to the nearest dollar)"
          placeholder="__-__-____"
          value={formatDate(startDate)}
        />
        <div class="input-group-text">
          <CalendarIcon />
        </div>
        <div className="custom-data-picker-container" ref={pickerRef}>
        <DatePicker
          className="datePicker"
          selected={startDate}
          onChange={(date) => {
            setStartDate(date)
            setIsOpen(false)
          }}
          open={isOpen}
          locale={ru}
          renderCustomHeader={({ date, changeYear, changeMonth, decreaseMonth, increaseMonth }) => (
            <DatePickerHeader
              date={date}
              changeYear={changeYear}
              changeMonth={changeMonth}
              decreaseMonth={decreaseMonth}
              increaseMonth={increaseMonth}
            />
          )}
        />
      </div>
      </div>
      <small className="form-text">Информация заполняется по желанию</small>
    </div>
  )
}
