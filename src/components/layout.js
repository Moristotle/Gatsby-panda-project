import React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import styles from '../styles/layout.module.css';
import { rhythm } from "../utils/typography";

const ListLink = props => (
    <li className={styles.links}>
        <Link to={props.to}>{props.children}</Link>
    </li>
)
export default ({ children }) => {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  )
  return (
      <>
        <header className={styles.header} 
          style={{padding: `${rhythm(2)}`, paddingTop: `${rhythm(1.5)}`}}>
            <Link to="/" className={styles.Link}>
                <h3 className={styles.title}>
                  {data.site.siteMetadata.title}
                </h3>
            </Link>
            <ListLink to="/about">About</ListLink>
        </header>
        <div className={styles.layout} 
            style={{padding: `${rhythm(2)}`, paddingTop: `${rhythm(1.5)}`}}>
            {children}  
        </div>
    </>
  )

}
/*
import React from "react"
import { css } from "@emotion/core"
import { Link } from "gatsby"
import { rhythm } from "../utils/typography";
export default ({ children }) => (
  <div
    css={css`
      margin: 0 auto;
      max-width: 700px;
      padding: ${rhythm(2)};
      padding-top: ${rhythm(1.5)};
    `}
  >
    <Link to={`/`}>
      <h3
        css={css`
          margin-bottom: ${rhythm(2)};
          display: inline-block;
          font-style: normal;
        `}
      >
        Pandas Eating Lots
      </h3>
    </Link>
    <Link
      to={`/about/`}
      css={css`
        float: right;
      `}
    >
      About
    </Link>
    {children}
  </div>
)
*/