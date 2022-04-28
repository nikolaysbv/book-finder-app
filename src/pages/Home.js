import React from "react"
import Form from "../components/Form"
import Books from "../components/Books"

function Home() {
  return (
    <main>
      <h1 className="title">Book Finder</h1>
      <Form />
      <Books />
    </main>
  )
}

export default Home
