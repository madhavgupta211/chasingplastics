import React from "react"
import logo from "./logo.svg"
import "./App.css"
import { HashRouter as Router } from "react-router-dom"
import Main from "./Components/Main/mainComponent"

function App() {
  return (
    <Router>
      <div className="App">
        <Main />
      </div>
    </Router>
  )
}

export default App
