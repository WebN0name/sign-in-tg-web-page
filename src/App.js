import { useEffect, useState } from "react"
import "./App.css"
import DataPickerPopup from "./components/DataPikerPopUp"
import PhoneInput from "./components/PhoneInput"
import SearchInput from "./components/SearchInput"
const cities = require("./data/cities")
const regions = require("./data/regions")
const secials = require("./data/special")

const defaultValues = {
  phone: "",
    speciality: "",
    region: "",
    city: "",
    workAddress: "",
    workPlace: "",
    name: "",
    surname: "",
    secondname: "",
    email: "",
    birthday: new Date(),
    wotkPhone: "",
}

function App() {
  const [formData, setFormData] = useState(defaultValues)

  const getInputData = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  useEffect(() => {
    console.log(formData)
  }, [formData])

  const sendFornData = () => {

  }

  return (
    <div className="App">
      <div className="wrapper">
        <div className="wrapper-padding">
          <div className="title-margin">
            <h5>Информация о пользователе в системе Фармстандарт</h5>
          </div>
          <div className="content-wrapper">
            <div className="mb-3">
              <PhoneInput
                placeHolder={"79009009090"}
                labelValue={"Номер телефона"}
                isRequired={true}
                getInputData={getInputData}
                name={"phone"}
              />
            </div>
            <div className="mb-3">
              <SearchInput
                name={"speciality"}
                isRequired={true}
                labelValue={"Специализация"}
                optionsValue={secials}
                descriptionValue={"Введите вашу специализацию"}
                placeHolder="специализация"
                getInputData={getInputData}
              />
            </div>
            <div className="mb-3">
              <SearchInput
                name={"region"}
                isRequired={true}
                labelValue={"Регион"}
                optionsValue={regions}
                descriptionValue={"Введите ваш регион"}
                placeHolder="регион"
                getInputData={getInputData}
              />
            </div>
            <div className="mb-3">
              <SearchInput
                name={"city"}
                isRequired={false}
                labelValue={"Город"}
                optionsValue={cities}
                placeHolder="город"
                getInputData={getInputData}
              />
            </div>
            <div class="mb-3">
              <label for="work-place" class="form-label">
                Рабочий адрес
              </label>
              <input type="text" class="form-control" id="work-place" name="workAddress"  onChange={(e) => {getInputData(e)}}/>
              <small className="form-text">Информация заполняется по желанию</small>
            </div>
            <div class="mb-3">
              <label for="work" class="form-label">
                Место работы
              </label>
              <input type="text" class="form-control" id="work" name="workPlace" onChange={(e) => {getInputData(e)}}/>
              <small className="form-text">Информация заполняется по желанию</small>
            </div>
            <div class="mb-3">
              <label for="name" class="form-label">
                Имя
              </label>
              <input type="text" class="form-control" id="name" placeholder="Иван" name="name" onChange={(e) => {getInputData(e)}}/>
              <small className="form-text">Информация заполняется по желанию</small>
            </div>
            <div class="mb-3">
              <label for="surname" class="form-label">
                Фамилия
              </label>
              <input type="text" class="form-control" id="surname" placeholder="Петров" name="surname" onChange={(e) => {getInputData(e)}}/>
              <small className="form-text">Информация заполняется по желанию</small>
            </div>
            <div class="mb-3">
              <label for="secondname" class="form-label">
                Отчество
              </label>
              <input type="text" class="form-control" id="secondname" placeholder="Сергеевич" name="secondname" onChange={(e) => {getInputData(e)}}/>
              <small className="form-text">Информация заполняется по желанию</small>
            </div>
            <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label">
                Адрес эл. почты
              </label>
              <input
                type="email"
                class="form-control"
                id="exampleFormControlInput1"
                placeholder="petrov.ivan@mail.ru"
                name="email"
                onChange={(e) => {getInputData(e)}}
              />
              <small className="form-text">Информация заполняется по желанию</small>
            </div>
            <div class="mb-3">
              <DataPickerPopup labelValue={"Дата рождения"} descriptionValue={"Информация заполняется по желанию"} name={'birthday'} getInputData={getInputData}/>
            </div>
            <div className="mb-3">
              <PhoneInput placeHolder={"79ХХХХХХХХХ"} labelValue={"Служебный телефон"} isRequired={false} name={'wotkPhone'}  getInputData={getInputData}/>
              <small className="form-text">Информация заполняется по желанию</small>
            </div>
            <div>
              <label class="form-label" for="1642764167055">
                Я являюсь сотрудником здравоохранения<b>*</b>
              </label>
              <div class="form-check">
                <input
                  id="agree_doctor0"
                  name="agree_doctor"
                  required=""
                  instance="SelectField"
                  class="form-check-input"
                  type="radio"
                  value={false}
                  onChange={(e) => e.currentTarget.value}
                />
                <label class="form-check-label" for="agree_doctor0">
                  Да
                </label>
              </div>
            </div>
            <div class="_4d46">
              <div class="f1ae">
                <footer class="_9bb0">
                  <button class="btn btn-primary" type="submit" onClick={() => {sendFornData()}}>
                    Отправить
                  </button>
                  <button class="btn btn-light" type="button" onClick={() => setFormData(defaultValues)}>
                    Отмена
                  </button>
                </footer>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
