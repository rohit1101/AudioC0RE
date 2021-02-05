import React from "react"
import { Link } from "gatsby"
import "./Container.css"
// styles
const pageStyles = {
  color: "#232129",
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
  maxWidth: "90%",
  height: "100vh",
  margin: "0 auto",
  background: "papayawhip",
}

function Container({ children, query }) {
  console.log(query)
  return (
    <div style={pageStyles}>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div>
          <Link to="/">Home</Link>
        </div>
        <div>
          <Link to="/about">About</Link>{" "}
          <Link to="/collections">Collections</Link>
        </div>
      </div>

      {children}
    </div>
  )
}

export default Container
