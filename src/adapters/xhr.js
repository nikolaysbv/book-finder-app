import axios from "axios"

const googleBooksInstance = axios.create({
  baseURL: "https://www.googleapis.com/books/v1/",
  // timeout: 1000,
  headers: { "content-type": "application/json" },
})

const getVolumes = async (queryParams, queryCategory, startIndex) => {
  const response = await googleBooksInstance.get(
    `volumes?key=${
      process.env.REACT_APP_API_KEY
    }&langRestrict=en&printType=books&maxResults=30&startIndex=${startIndex}${
      queryCategory
        ? `&q=+${queryCategory}:${queryParams}`
        : `&q=${queryParams}`
    }`
  )
  return response.data
}

export { getVolumes }
