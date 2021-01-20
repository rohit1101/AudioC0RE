import React from "react"
import { Link } from "gatsby"
function Container({ children }) {
  return (
    <div style={{ maxWidth: "90%", margin: "0 auto", background: "slategray" }}>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div>
          <Link to="/">Home</Link>
        </div>
        <div>
          <Link to="/about">About</Link>{" "}
          <Link to="/collection">Collections</Link>
        </div>
      </div>

      {children}
    </div>
  )
}

export default Container
