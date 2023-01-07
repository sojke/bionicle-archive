import * as React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import {  } from '../styling/layout.module.css';
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
    <>
      <title>{pageTitle} | {data.site.siteMetadata.title}</title>
      <nav>
        <header>{data.site.siteMetadata.title}</header>
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
        {children}
      </main>
      <footer>
        
      </footer>
    </>
  )
}

export default Layout;