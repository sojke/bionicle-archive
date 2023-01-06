import { graphql, navigate } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import * as React from 'react'
import Layout from '../../components/layout'
import { listInList } from '../../styling/bionicles.module.css'

export const query = graphql`
  query ($id: String) {
    wpBionicle(id: {eq: $id}) {
      bionicleMeta {
        colors
        description
        element
        factions
        home
        mask
        name
        parts
        picture {
          localFile {
            childImageSharp {
              gatsbyImageData(placeholder: BLURRED)
            }
          }
          altText
        }
        species
        year
      }
      subthemes {
        nodes {
          name
        }
      }
      title
    }
  }`

const BioniclePage = ({data: {wpBionicle: {bionicleMeta: bionicle}}, data}) => {
  bionicle.title = data.wpBionicle.title;
  bionicle.subthemes = data.wpBionicle.subthemes.nodes;
  const image = getImage(bionicle.picture.localFile);
  return (
    <Layout pageTitle={bionicle.title}>
      <button onClick={() => navigate(-1)}>Go Back</button>
      <GatsbyImage image={image} alt={bionicle.picture.altText}/>
      <p>{bionicle.descripption}</p>
      <ul>
        <li><span>name: </span>{bionicle.name}</li>
        <li><span>species: </span><ul className={listInList}>{bionicle.species.map(s => <li>{s}</li>)}</ul></li>
        <li><span>factions: </span><ul className={listInList}>{bionicle.factions.map(f => <li>{f}</li>)}</ul></li>
        <li></li>
      </ul>
    </Layout>
  )
}

export default BioniclePage;