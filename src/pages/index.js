import * as React from 'react';
import Layout from '../components/layout';
import { graphql } from 'gatsby';
import FeaturedBionicle from '../components/featuredBionicle';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import {homeImage, introContainer, introText, featuredContainer, form} from '../styling/home.module.css';

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
        <div className={introContainer}>
          <h1>{homePage.title}</h1>
          <div style={{display: 'flex'}}>
            <p className={introText}>{homePage.description}</p>
            <GatsbyImage className={homeImage} image={image} alt={homePage.picture.altText}/>
          </div>
        </div>
        <div className={featuredContainer}>
          {homePage.featuredBionicles.map(bionicle => 
            <FeaturedBionicle bionicle={bionicle}/>  
          )}
        </div>
        <section className={form}>
        <h2>contact</h2>
        <form name="contact" method="POST" data-netlify="true">
            <label>Your Name:</label>
            <input type="text" name="name" required={true} />
            <label>Your Email:</label>
            <input type="email" name="email" required={true} />
            <label>Message:</label>
            <textarea name="message" required={true}></textarea>
            <input type="hidden" name="form-name" value="contact" />
            <button type="submit">Send</button>
        </form>
        </section>
      </Layout>
  )
}

export default IndexPage;