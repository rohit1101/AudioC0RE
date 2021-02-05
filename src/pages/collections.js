import React from "react"
import Container from "../components/Container"
import { Link, graphql } from "gatsby"

export const cityData = graphql`
  query {
    allContentfulCity {
      edges {
        node {
          id
          description
          createdAt(fromNow: true)
          name
          node_locale
        }
      }
    }
  }
`

const Collections = (cityData) => {
  const { data } = cityData
  console.log(data)
  return (
    <div>
      <Container>
        <Link to="/collections/asgard">Asgard</Link>{" "}
        <Link to="/collections/novacorp">Nova Corp</Link>{" "}
        <Link to="/collections/vormir">Vormir</Link>
      </Container>

      {/* <div>
        {data.allContentfulCity.edges.map((city) => {
          return <div key={city.node.id}>{city.node.name}</div>
        })}
      </div> */}
    </div>
  )
}

export default Collections
