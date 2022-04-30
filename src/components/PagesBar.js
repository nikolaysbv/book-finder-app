import React from "react"
import { useGlobalContext } from "../contexts"

function PagesBar() {
  const { page, setPage, pagesAmount, isBooksLoading } = useGlobalContext()

  return (
    <div className="pages-bar">
      {page !== 1 && (
        <button
          className="btn-prev"
          onClick={() => setPage((currentPage) => currentPage - 1)}
        >
          Prev
        </button>
      )}
      {Array(pagesAmount)
        .fill()
        .map((el, i) => (
          <button key={i} className="btn-page" onClick={() => setPage(i + 1)}>
            {i + 1}
          </button>
        ))}
      {page !== pagesAmount && (
        <button
          className="btn-next"
          onClick={() => setPage((currentPage) => currentPage + 1)}
        >
          Next
        </button>
      )}
    </div>
  )
}

export default PagesBar
