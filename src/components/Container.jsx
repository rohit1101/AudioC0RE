import React from "react"
import { Link } from "gatsby"
function Container({ children }) {
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/collection">Collections</Link>
      {children}
    </div>
  )
}

export default Container
