import { useState } from "react"

function SingleBook({ book }) {
  const [isDescriptionExpanded, setIsDescriptionExpanded] = useState(false)

  const author = book.volumeInfo.authors
    ? book.volumeInfo.authors.join(", ")
    : "No author"
  const title = book.volumeInfo?.title || "No title"
  const subtitle = book.volumeInfo?.subtitle
  const image = book.volumeInfo?.imageLinks?.thumbnail || ""
  const desc = book.volumeInfo?.description || "No description"

  return (
    <article className="single-book">
      <h3 className="single-book__author">{author}</h3>
      <h2 className="single-book__title">{title}</h2>
      {subtitle ? <h4 className="single-book__subtitle">{subtitle}</h4> : null}
      <img src={image} alt="front cover" className="single-book__image" />
      <p className="single-book__desc">
        {desc.length <= 300
          ? desc
          : isDescriptionExpanded
          ? desc
          : desc.slice(0, 300).trim() + "..."}
        {desc.length <= 300 ? null : (
          <button
            className="desc__expand-button"
            onClick={() => setIsDescriptionExpanded((current) => !current)}
          >
            {isDescriptionExpanded ? "show less" : "show more"}
          </button>
        )}
      </p>
    </article>
  )
}

export default SingleBook
