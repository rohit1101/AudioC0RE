import React from "react"
import { graphql, Link } from "gatsby"
import Container from "../../components/Container"

export default function Cities(props) {
  console.log(props)
  return (
    <Container>
      <Link to="/collections/asgard">Asgard</Link>{" "}
      <Link to="/collections/novacorp">Nova Corp</Link>{" "}
      <Link to="/collections/vormir">Vormir</Link>
    </Container>
  )
}

export const query = graphql`
  query {
    allContentfulCity {
      nodes {
        createdAt
        id
        name
        description
      }
    }
  }
`
