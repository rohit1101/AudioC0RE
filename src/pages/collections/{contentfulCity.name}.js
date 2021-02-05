import React from "react"
import { graphql, Link } from "gatsby"
import Container from "../../components/Container"

export default function Cities(props) {
  const { data } = props
  return (
    <Container>
      <h1>{data.contentfulCity.name}</h1>
    </Container>
  )
}

export const query = graphql`
  query($id: String) {
    contentfulCity(id: { eq: $id }) {
      description
      createdAt
      name
    }
  }
`
