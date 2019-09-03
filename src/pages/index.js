import React from "react"
import Layout from "../components/layout";
import { Helmet } from 'react-helmet';
import { graphql, Link } from "gatsby";
import { css } from "@emotion/core";
import { rhythm } from "../utils/typography";

export default ({ data }) => {
  console.log(data)
  return (
  <Layout>
      <Helmet>
          <meta charSet="utf-8" />
          <title>My Title</title>
          <link rel="canonical" href="https://www.gatsbyjs.org/" />
      </Helmet>
      <h1>Amazing Pandas Eating Things</h1>
        <div>
          <h4>{data.allMarkdownRemark.totalCount} Posts</h4>
            {data.allMarkdownRemark.edges.map(({ node }) => (
              <div key={node.id}>
                <Link
                  to={node.fields.slug}
                  css={css`
                  text-decoration: none;
                  color: inherit;
                  `}
                  >
                    <h3
                      css={css`
                        margin-bottom: ${rhythm(1 / 4)};
                      `}
                    >
                      {node.frontmatter.title}{" "}
                      <span
                        css={css`
                          color: #bbb;
                        `}
                      >
                        — {node.frontmatter.date}
                      </span>
                    </h3>
                  <p>{node.excerpt}</p>
                </Link>
              </div>
            ))}
        </div>
  </Layout>
  )
}
export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`