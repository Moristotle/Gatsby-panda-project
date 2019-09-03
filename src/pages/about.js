import React from "react";
import { Helmet } from 'react-helmet';
import { graphql } from "gatsby";
import Layout from "../components/layout";

export default ({ data }) => (
  <Layout>
      <Helmet>
        <meta charSet="utf-8" />
        <title>My Title</title>
        <link rel="canonical" href="https://www.gatsbyjs.org/" />
      </Helmet>
    <h1>About { data.site.siteMetadata.title }</h1>
    <p>
      We're the only site running on your computer dedicated to showing the best
      photos and videos of pandas eating lots of food.
    </p>
  </Layout>
)
export const query = graphql`
query {
  site {
    siteMetadata {
      title
    }
  }
}
`