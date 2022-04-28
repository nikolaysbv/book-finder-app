import { useRef, useState } from "react"
import { BiSearchAlt2 } from "react-icons/bi"
import { useGlobalContext } from "../contexts"

function Form() {
  const searchValue = useRef()
  const searchCategory = useRef()

  const { setQueryParams, setQueryCategory } = useGlobalContext()

  const handleSubmit = (e) => {
    e.preventDefault()
    const newQueryParams = searchValue.current.value
    const newQueryCategory = searchCategory.current.value
    setQueryCategory(newQueryCategory)
    setQueryParams(newQueryParams)
  }

  return (
    <section className="form-section">
      <form className="form" onSubmit={handleSubmit}>
        <select
          name="search-type"
          id="search-type-select"
          className="form__select"
          ref={searchCategory}
        >
          <option value="">Any</option>
          <option value="intitle">Title</option>
          <option value="inauthor">Author</option>
          <option value="inpublisher">Publisher</option>
          <option value="subject">Subject</option>
          <option value="isbn">ISBN</option>
        </select>
        <input type="text" className="form__input" ref={searchValue} />
        <button className="form__submit" type="submit">
          <BiSearchAlt2 />
        </button>
      </form>
    </section>
  )
}

export default Form
