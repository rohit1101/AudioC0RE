import React from "react"
import { graphql } from "gatsby"
import Container from "../../components/Container"

export default function Cities(props) {
  const { data } = props
  return (
    <Container>
      <h1>{data.contentfulCity.name}</h1>
      <h3>{data.contentfulCity.description}</h3>
      <p>{data.contentfulCity.createdAt}</p>
    </Container>
  )
}

export const query = graphql`
  query($id: String) {
    contentfulCity(id: { eq: $id }) {
      description
      createdAt(fromNow: true)
      name
    }
  }
`
