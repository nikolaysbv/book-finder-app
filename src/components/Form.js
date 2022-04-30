import { useRef, useEffect } from "react"
import { BiSearchAlt2 } from "react-icons/bi"
import { useGlobalContext } from "../contexts"

function Form() {
  const searchValue = useRef()
  const searchCategory = useRef()
  const {
    setQueryParams,
    setQueryCategory,
    searchPlaceholder,
    setSearchPlaceholder,
    setPrevQueryParams,
    queryParams,
    setPrevQueryCategory,
    queryCategory,
  } = useGlobalContext()

  const handleSubmit = (e) => {
    e.preventDefault()
    const newQueryParams = searchValue.current.value
    const newQueryCategory = searchCategory.current.value
    if (!newQueryParams) return
    setQueryCategory(newQueryCategory)
    setQueryParams(newQueryParams)
  }

  const handleCategoryChange = () => {
    let newPlaceholder
    switch (searchCategory.current.value) {
      case "intitle":
        newPlaceholder = "i.e. The Lord Of The Rings"
        break
      case "inauthor":
        newPlaceholder = "i.e. Tolkien"
        break
      case "inpublisher":
        newPlaceholder = "i.e. William Morrow"
        break
      case "subject":
        newPlaceholder = "i.e. Fiction"
        break
      case "isbn":
        newPlaceholder = "i.e. 9780618517657"
        break
      default:
        newPlaceholder = "Try name, author, subject, ISBN..."
        break
    }
    setSearchPlaceholder(newPlaceholder)
  }

  return (
    <section className="form-section">
      <form className="form" onSubmit={handleSubmit}>
        <select
          name="search-type"
          id="search-type-select"
          className="form__select"
          ref={searchCategory}
          onChange={handleCategoryChange}
        >
          <option value="">Any</option>
          <option value="intitle">Title</option>
          <option value="inauthor">Author</option>
          <option value="inpublisher">Publisher</option>
          <option value="subject">Subject</option>
          <option value="isbn">ISBN</option>
        </select>
        <input
          type="text"
          placeholder={searchPlaceholder}
          className="form__input"
          ref={searchValue}
        />
        <button className="form__submit" type="submit">
          <BiSearchAlt2 />
        </button>
      </form>
    </section>
  )
}

export default Form
