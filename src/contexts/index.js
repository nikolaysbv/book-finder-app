import React, { useState, useContext, useEffect } from "react"
import { getVolumes } from "../adapters/xhr"

const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const [queryParams, setQueryParams] = useState("game") //set to empty
  const [queryCategory, setQueryCategory] = useState("")
  const [startIndex, setStartIndex] = useState(0)
  const [isGettingNewImages, setIsGettingNewImages] = useState(false)
  const [page, setPage] = useState(1)
  const [isBooksLoading, setIsBooksLoading] = useState(true)
  const [isError, setIsError] = useState(false)
  const [books, setBooks] = useState([])

  useEffect(() => {
    setIsBooksLoading(true)
    getVolumes(queryParams, queryCategory, 0)
      .then((data) => {
        setBooks(data.items)
        setIsBooksLoading(false)
      })
      .catch((error) => {
        setIsError(true)
        setIsBooksLoading(false)
      })
  }, [queryParams, queryCategory])

  useEffect(() => {
    // if (!mounted.current) {
    //   mounted.current = true
    //   return
    // }
    if (!isGettingNewImages) return
    if (isBooksLoading) return
    setPage((oldPage) => oldPage + 1)
  }, [isGettingNewImages])

  useEffect(() => {
    setIsBooksLoading(true)
    getVolumes(queryParams, queryCategory, 0)
      .then((data) => {
        setBooks(data.items)
        setIsBooksLoading(false)
      })
      .then(() => setIsGettingNewImages(false))
      .catch((error) => {
        setIsError(true)
        setIsBooksLoading(false)
      })
  }, [page])

  return (
    <AppContext.Provider
      value={{
        books,
        isBooksLoading,
        isError,
        setQueryParams,
        setQueryCategory,
        setStartIndex,
        setIsGettingNewImages,
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
