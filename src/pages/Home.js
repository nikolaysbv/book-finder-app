import React from "react"
import Form from "../components/Form"
import Books from "../components/Books"
import PagesBar from "../components/PagesBar"
import Footer from "../components/Footer"

function Home() {
  return (
    <main>
      <h1 className="title">Book Finder</h1>
      <Form />
      <PagesBar />
      <Books />
      <PagesBar />
      <Footer />
    </main>
  )
}

export default Home
