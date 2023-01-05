import { graphql, Link } from 'gatsby';
import * as React from 'react';
import Layout from '../components/layout';
import { GatsbyImage, getImage } from 'gatsby-plugin-image' 

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
      }
    }
  }
}`;

const BioniclePage = ({data: {allWpBionicle: {edges}}}) => {
  return (
    <Layout pageTitle="Bionicles">
      {edges.map((bionicle) => {
        const title = bionicle.node.title;
        const image = getImage(bionicle.node.bionicleMeta.picture.localFile);
        const alt = bionicle.node.bionicleMeta.picture.altText;
        let description = bionicle.node.bionicleMeta.description.slice(0, 200).split(' ');
        const shortDesc = description.filter((x,index) => index < (description.length - 1)).reduce((text, word) => text + ' ' + word,'');
        const categories = bionicle.node.subthemes.nodes;
        return (
          <div>
            <Link to='/'>
              <h2>{title}</h2>
              <GatsbyImage image={image} alt={alt}/>
            </Link>
            <h3>{categories.map(c => <span>{c.name}</span>)}</h3>
            <p>{shortDesc}<Link to='/'>... Read More</Link></p>
          </div>
        );
      })}
    </Layout>
  )
}

export default BioniclePage;