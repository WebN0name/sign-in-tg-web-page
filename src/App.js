import "./App.css"
import DataPickerPopup from "./components/DataPikerPopUp"
import PhoneInput from "./components/PhoneInput"
import SearchInput from "./components/SearchInput"
const cities = require("./data/cities")
const regions = require("./data/regions")
const secials = require("./data/special")

function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <div className="wrapper-padding">
          <div className="title-margin">
            <h5>Информация о пользователе в системе Фармстандарт</h5>
          </div>
          <div className="content-wrapper">
            <div className="mb-3">
              <PhoneInput placeHolder={"79009009090"} labelValue={"Номер телефона"} isRequired={true} />
            </div>
            <div className="mb-3">
              <SearchInput
                isRequired={true}
                labelValue={"Специализация"}
                optionsValue={secials}
                descriptionValue={"Введите вашу специализацию"}
                placeHolder="специализация"
              />
            </div>
            <div className="mb-3">
              <SearchInput
                isRequired={true}
                labelValue={"Регион"}
                optionsValue={regions}
                descriptionValue={"Введите ваш регион"}
                placeHolder="регион"
              />
            </div>
            <div className="mb-3">
              <SearchInput isRequired={false} labelValue={"Город"} optionsValue={cities} placeHolder="город" />
            </div>
            <div class="mb-3">
              <label for="work-place" class="form-label">
                Рабочий адрес
              </label>
              <input type="text" class="form-control" id="work-place" />
              <small className="form-text">Информация заполняется по желанию</small>
            </div>
            <div class="mb-3">
              <label for="work" class="form-label">
                Место работы
              </label>
              <input type="text" class="form-control" id="work" />
              <small className="form-text">Информация заполняется по желанию</small>
            </div>
            <div class="mb-3">
              <label for="name" class="form-label">
                Имя
              </label>
              <input type="text" class="form-control" id="name" placeholder="Иван" />
              <small className="form-text">Информация заполняется по желанию</small>
            </div>
            <div class="mb-3">
              <label for="surname" class="form-label">
                Фамилия
              </label>
              <input type="text" class="form-control" id="surname" placeholder="Петров" />
              <small className="form-text">Информация заполняется по желанию</small>
            </div>
            <div class="mb-3">
              <label for="secondname" class="form-label">
                Отчество
              </label>
              <input type="text" class="form-control" id="secondname" placeholder="Сергеевич" />
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
              />
              <small className="form-text">Информация заполняется по желанию</small>
            </div>
            <div class="mb-3">
              <DataPickerPopup />
            </div>
            <div className="mb-3">
              <PhoneInput placeHolder={"79ХХХХХХХХХ"} labelValue={"Служебный телефон"} isRequired={false} />
              <small className="form-text">Информация заполняется по желанию</small>
            </div>
            <div className="mb-3">
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
                  value="Да"
                />
                <label class="form-check-label" for="agree_doctor0">
                  Да
                </label>
              </div>
            </div>
            <footer class="_9bb0">
              <button class="btn btn-primary" type="submit">
                Отправить
              </button>
              <button class="btn btn-light" type="button">
                Отмена
              </button>
            </footer>

            {/* <DataPickerPopup />
            <SearchInput
              isRequired={true}
              labelValue={"Регион"}
              optionsValue={regions}
              descriptionValue={"Введите ваш регион"}
              placeHolder="регион"
            />
            <SearchInput isRequired={false} labelValue={"Город"} optionsValue={cities} placeHolder="город" />
            <PhoneInput placeHolder={"79009009090"} labelValue={"Номер телефона"} isRequired={true} /> */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
