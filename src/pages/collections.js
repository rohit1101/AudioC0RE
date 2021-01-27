import React from "react"
import Container from "../components/Container"
import { Link } from "gatsby"

// const query = graphql``

const Collections = () => (
  <Container>
    <Link to="/collections/asgard">Asgard</Link>{" "}
    <Link to="/collections/novacorp">Nova Corp</Link>{" "}
    <Link to="/collections/vormir">Vormir</Link>
  </Container>
)

export default Collections
