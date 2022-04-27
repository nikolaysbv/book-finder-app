import React from "react"

function App() {
  return (
    <main>
      <h1 className="title">Book Finder App</h1>
      <section className="form">
        <form>
          <h2 className="form__title">Try anything</h2>
          <input type="text" className="form__input" />
        </form>
      </section>
      <section className="books"></section>
    </main>
  )
}

export default App
