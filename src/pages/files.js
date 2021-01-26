import React from "react"
import { graphql } from "gatsby"
import Container from "../components/Container"

const Files = (query) => {
  const { data } = query
  console.log(data)
  return (
    <Container>
      <div>
        <h2>hello this is files.</h2>
        <table>
          <thead>
            <tr>
              <th>relativePath</th>
              <th>prettySize</th>
              <th>extension</th>
              <th>birthTime</th>
            </tr>
          </thead>
          <tbody>
            {data.allFile.edges.map(({ node }, index) => (
              <tr key={index}>
                <td>{node.relativePath}</td>
                <td>{node.prettySize}</td>
                <td>{node.extension}</td>
                <td>{node.birthTime}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Container>
  )
}

export const query = graphql`
  query {
    allFile {
      edges {
        node {
          id
          base
          accessTime
          size
          name
          sourceInstanceName
          relativePath
        }
      }
    }
  }
`

export default Files
