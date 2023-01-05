import * as React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import {  } from './layout.module.css';
import AnimatedLink from './animatedLink';

const Layout = ({ pageTitle, children }) => {
  const data = useStaticQuery(graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`)

  return (
    <div>
      <title>{pageTitle} | {data.site.siteMetadata.title}</title>
      <header><h1>{data.site.siteMetadata.title}</h1></header>
      <nav>
        <ul>
          <li>
            <AnimatedLink linkText="HOME" linkTo="/"/>
          </li>
          <li>
            <AnimatedLink linkText="ABOUT" linkTo="/about"/>
          </li>
          <li>
            <AnimatedLink linkText="BIONICLES" linkTo="/bionicles"/>
          </li>        
        </ul>
      </nav>
      <main>
        <h1>{pageTitle}</h1>
        {children}
      </main>
    </div>
  )
}

export default Layout;