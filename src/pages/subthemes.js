import { graphql } from 'gatsby';
import * as React from 'react';
import Categorie from '../components/categorie';
import Layout from '../components/layout';

export const query = graphql`
query {
    allWpSubtheme {
      edges {
        node {
          bionicles {
            nodes {
              title
              slug
            }
          }
          name
          subthemeMeta {
            logo {
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
    }
  }  
`

const Subthemes = ({data: {allWpSubtheme: {edges}}}) => {
    return (
        <Layout pageTitle='Subthemes'>
            {edges.map(subtheme => 
                <Categorie subtheme={subtheme}/>
            )}
        </Layout>
    );
}

export default Subthemes;