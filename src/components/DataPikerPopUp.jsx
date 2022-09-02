import { useEffect, useRef, useState } from "react"
import DatePicker from "react-datepicker"
import DatePickerHeader from "./DatePickerHeader"
import ru from "date-fns/esm/locale/ru/index.js"
import CalendarIcon from "../icons/calendarIcon"

export default function DataPickerPopup({labelValue, descriptionValue, name, getInputData}) {
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
        {labelValue}
      </label>
      <div class="input-group" style={{ position: "relative" }} onClick={() => datePickerOpen()} ref={inputRef}>
        <input
          type="text"
          id="date"
          class="form-control"
          aria-label="Amount (to the nearest dollar)"
          placeholder="__-__-____"
          value={formatDate(startDate)}
        />
        <span class="input-group-text">
          <CalendarIcon />
        </span>
        <div className="custom-data-picker-container" ref={pickerRef}>
          <DatePicker
            className="datePicker"
            selected={startDate}
            onChange={(date) => {
              setStartDate(date)
              getInputData({target: {name, value: date}})
              setIsOpen(false)
            }}
            open={isOpen}
            locale={ru}
            fixedHeight
            name={name}
            renderCustomHeader={({ date, changeYear, changeMonth, decreaseMonth, increaseMonth }) => (
              <DatePickerHeader
                getPopupContainer={(trigger) => trigger.parentElement}
                className="react-datepicker-wrapper"
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
      {descriptionValue && (<small className="form-text">{descriptionValue}</small>)}
    </div>
  )
}
