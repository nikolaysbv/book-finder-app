import React, { useState, useContext, useEffect } from "react"
import { getVolumes } from "../adapters/xhr"

const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const [queryParams, setQueryParams] = useState("martin")
  const [prevQueryParams, setPrevQueryParams] = useState("")
  const [queryCategory, setQueryCategory] = useState("")
  const [prevQueryCategory, setPrevQueryCategory] = useState("")
  const [searchPlaceholder, setSearchPlaceholder] = useState(
    "Try name, author, subject, ISBN..."
  )
  const [isBooksLoading, setIsBooksLoading] = useState(true)
  const [errorHandler, setErrorHandler] = useState([false, ""])
  const [books, setBooks] = useState([])
  const [page, setPage] = useState(1)
  const [pagesAmount, setPagesAmount] = useState(1)

  useEffect(() => {
    setIsBooksLoading(true)
    setErrorHandler([false, ""])
    const startIndex = (page - 1) * 30
    getVolumes(queryParams, queryCategory, startIndex)
      .then((data) => {
        console.log(data.items)
        if (!data.items) {
          setBooks([])
          setErrorHandler([
            true,
            "No books found. Please review your search phrase.",
          ])
        }
        if (
          prevQueryParams !== queryParams ||
          prevQueryCategory !== queryCategory
        ) {
          console.log("now")
          setPagesAmount(Math.ceil(data.totalItems / 30))
        }
        setPrevQueryParams(queryParams)
        setPrevQueryCategory(queryCategory)
        setBooks(data.items)
        setIsBooksLoading(false)
      })
      .catch((error) => {
        setErrorHandler([true, error.response.data.error.message])
        setIsBooksLoading(false)
      })
  }, [queryParams, queryCategory, page])

  return (
    <AppContext.Provider
      value={{
        books,
        isBooksLoading,
        errorHandler,
        queryParams,
        setQueryParams,
        queryCategory,
        setQueryCategory,
        searchPlaceholder,
        setSearchPlaceholder,
        page,
        setPage,
        pagesAmount,
        setPrevQueryParams,
        setPrevQueryCategory,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppProvider }
