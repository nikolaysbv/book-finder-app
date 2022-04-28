import React, { useEffect } from "react"
import SingleBook from "./SingleBook"
import { useGlobalContext } from "../contexts"

function Books() {
  const { books, isBooksLoading, setStartIndex, setIsGettingNewImages } =
    useGlobalContext()

  const getMoreBooks = () => {
    if (
      window.innerHeight + window.scrollY >=
      document.body.scrollHeight - 750
    ) {
      setIsGettingNewImages(true)
      console.log("now")
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", getMoreBooks)
    return () => window.removeEventListener("scroll", getMoreBooks)
  }, [])

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
