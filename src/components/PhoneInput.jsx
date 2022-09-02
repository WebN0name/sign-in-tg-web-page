export default function PhoneInput({ placeHolder, isRequired, labelValue, descriptionValue, name,  getInputData }) {
  return (
    <div>
      <label for="phoneInput" class="form-label">
        {labelValue}
        {isRequired && <b>*</b>}
      </label>
      <div className="phone-input">
        <input type="tel" class="form-control input-phone-pagging" id="phoneInput" placeholder={placeHolder} name={name} onChange={(e) => getInputData(e)}/>
      </div>
      {descriptionValue && <small className="form-text">{descriptionValue}</small>}
    </div>
  )
}
