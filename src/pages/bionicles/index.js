import { graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import * as React from 'react';
import Bionicle from '../../components/bionicle';
import Layout from '../../components/layout';
import {introContainer, searchbar} from '../../styling/bionicles.module.css'

export const query = graphql`
query {
  allWpBionicle {
    edges {
      node {
        bionicleMeta {
          picture {
            localFile {
              childImageSharp {
                gatsbyImageData(placeholder: BLURRED)
              }
            }
            altText
          }
          description
          name
        }
        title
        subthemes {
          nodes {
            name
          }
        }
        slug
      }
    }
  }
  wpPage(slug: {eq: "bionicles"}) {
    bioniclesPageMeta {
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
}`;

const BioniclePage = ({data: {allWpBionicle: {edges}, wpPage: {bioniclesPageMeta}}}) => {
  const image = getImage(bioniclesPageMeta.picture.localFile);
  const [filter, setFilter] = React.useState("");

  return (
    <Layout pageTitle="Bionicles">
      <div className={introContainer}>
        <h1>{bioniclesPageMeta.title}</h1>
        <p>{bioniclesPageMeta.description}</p>
        <GatsbyImage style={{height: "450px"}} image={image}/>
      </div>
      <input className={searchbar} type='text' placeholder='Search for bionicles' onChange={(event) => {setFilter(event.target.value)}}></input>
      {edges.filter(b => b.node.title.toLowerCase().slice(0, filter.length) === filter.toLowerCase() || b.node.bionicleMeta.name.toLowerCase().slice(0, filter.length) === filter.toLowerCase() || b.node.title.toLowerCase().replace(" ","").slice(0, filter.length) === filter.toLowerCase() )
        .map(bionicle =>
          <Bionicle bionicle={bionicle} alt={bioniclesPageMeta.picture.altText}/>
        )
      }
    </Layout>
  )
}

export default BioniclePage;