import React from "react"
import Container from "../components/Container"
import { graphql, Link } from "gatsby"

export const query = graphql`
  query {
    allContentfulCity {
      edges {
        node {
          gatsbyPath(filePath: "/collections/{contentfulCity.name}")
          name
        }
      }
    }
  }
`

function Collections(props) {
  const { data } = props
  return (
    <Container>
      {data.allContentfulCity.edges.map((item) => {
        return (
          <div>
            <Link to={item.node.gatsbyPath}>{item.node.name}</Link>
          </div>
        )
      })}
    </Container>
  )
}

export default Collections
