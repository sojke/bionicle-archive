import * as React from 'react';
import Layout from '../components/layout';
import { graphql } from 'gatsby';
import FeaturedBionicle from '../components/featuredBionicle';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

export const query = graphql`
query {
  wpPage(slug: {eq: "home"}) {
    homePageMeta {
      featuredBionicles {
        ... on WpBionicle {
          id
          slug
          bionicleMeta {
            name
            description
            picture {
              localFile {
                childImageSharp {
                  gatsbyImageData(placeholder: BLURRED)
                }
              }
              altText
            }
          }
        }
      }
      description
      title
      picture {
        localFile {
          childImageSharp {
            gatsbyImageData(placeholder: BLURRED)
          }
        }
        altText
      }
    }
  }
}
`

const IndexPage = ({data : { wpPage : {homePageMeta : homePage}}}) => {
  const image = getImage(homePage.picture.localFile);

  return (
      <Layout pageTitle="Homepage">
        <h1>{homePage.title}</h1>
        <p>{homePage.description}</p>
        <GatsbyImage image={image} alt={homePage.picture.altText}/>
        <div>
          {homePage.featuredBionicles.map(bionicle => 
            <FeaturedBionicle bionicle={bionicle}/>  
          )}
        </div>
      </Layout>
  )
}

export default IndexPage;