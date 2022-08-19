import { useEffect, useRef, useState } from "react"
import Fuse from "fuse.js"

export default function SearchInput({ labelValue, optionsValue, descriptionValue, isRequired, placeHolder }) {
  const [searchValue, setSearchValue] = useState("")
  const [searchResult, setSearchResult] = useState(optionsValue)
  const [isMenuVisible, setIsMenuVisible] = useState(false)
  const inputRef = useRef(null)

  const options = {
    includeScore: true,
    minMatchCharLength: 1,
    threshold: 0.1,
    keys: ["item"],
  }

  const fuse = new Fuse(optionsValue, options)

  const handleInputChange = (e) => {
    setSearchValue(e.target.value)
  }

  useEffect(() => {
    if (searchValue === "") {
      setSearchResult(optionsValue)
    } else {
      let result = fuse.search(searchValue)
      result = result.map((item) => item.item)
      setSearchResult(result)
    }
  }, [searchValue])

  const handleFocus = () => {
    setIsMenuVisible(true)
  }

  useEffect(() => {
    if (!isMenuVisible) return

    const handleClick = (e) => {
      if (!inputRef.current.contains(e.target)) {
        setIsMenuVisible(false)
        if (!optionsValue.includes(searchValue)) setSearchValue("")
      }
    }

    document.addEventListener("click", handleClick)

    return () => {
      document.removeEventListener("click", handleClick)
    }
  }, [isMenuVisible])

  const chooseItem = (value) => {
    setSearchValue(value)
    setIsMenuVisible(false)
  }

  return (
    <div>
      <label class="form-label">{labelValue}{isRequired && (<b>*</b>)}</label>
      <div style={{ position: "relative" }} ref={inputRef}>
        <input
          name="region"
          placeholder={placeHolder}
          instance="SelectField"
          class="form-control hidden-input"
          type="text"
          value={searchValue}
          onChange={(e) => {
            handleInputChange(e)
          }}
          onFocus={() => {
            handleFocus()
          }}
        />
        <div className="search-data" style={{ display: isMenuVisible ? "block" : "none" }}>
          {searchResult.map((item) => (
            <div className="search-data-element" onClick={() => chooseItem(item)} style={{fontWeight: searchValue === item ? '700' : '400'}}>
              {item}
            </div>
          ))}
        </div>
      </div>
      {descriptionValue && (<small className="form-text">{descriptionValue}</small>)}
    </div>
  )
}
