import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { graphql } from 'gatsby';
import * as React from 'react';
import Layout from '../components/layout';

export const query = graphql`
query {
  wpPage(slug: {eq: "about"}) {
    aboutPageMeta {
      title
      description
      picture {
        altText
        localFile {
          childImageSharp {
            gatsbyImageData(placeholder: BLURRED)
          }
        }
      }
    }
  }
}

`;

const AboutPage = ({data: {wpPage: {aboutPageMeta}}}) => {
  const image = getImage(aboutPageMeta.picture.localFile);

  return (
    <Layout pageTitle="About Us">
      <h1>{aboutPageMeta.title}</h1>
      <p>{aboutPageMeta.description}</p>
      <GatsbyImage image={image} alt={aboutPageMeta.altText}/>
    </Layout>
  )
}

export default AboutPage;