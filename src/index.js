import React from "react"
import { createRoot } from "react-dom/client"
import "normalize.css" // resetting css
import "./index.css"
import App from "./App"
import { AppProvider } from "./contexts"

const root = createRoot(document.getElementById("root"))
root.render(
  <React.StrictMode>
    <AppProvider>
      <App />
    </AppProvider>
  </React.StrictMode>
)
