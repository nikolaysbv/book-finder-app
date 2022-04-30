import React, { useEffect } from "react"
import SingleBook from "./SingleBook"
import { useGlobalContext } from "../contexts"

function Books() {
  const { books, isBooksLoading, errorHandler } = useGlobalContext()

  if (isBooksLoading) {
    return <h2>Loading...</h2>
  }

  if (errorHandler[0]) {
    return <h2>{errorHandler[1]}</h2>
  }

  return (
    <section className="books">
      {books.map((book) => {
        const { id } = book
        return <SingleBook key={id} book={book} />
      })}
    </section>
  )
}

export default Books
