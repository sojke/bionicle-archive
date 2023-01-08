import { graphql } from 'gatsby';
import * as React from 'react';
import Subtheme from '../components/subtheme';
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
                <Subtheme subtheme={subtheme}/>
            )}
        </Layout>
    );
}

export default Subthemes;