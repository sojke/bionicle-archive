import { graphql, navigate } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import * as React from 'react'
import Layout from '../../components/layout'
import { listInList, backButton, bionicleContainer, infoList } from '../../styling/bionicles.module.css'

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
      <div className={bionicleContainer}>
      <button className={backButton} onClick={() => navigate(-1)}>Go Back</button>
      <GatsbyImage image={image} alt={bionicle.picture.altText}/>
      <p>{bionicle.description}</p>
      <ul className={infoList}>
        <li><span>name: </span>{bionicle.name}</li>
        <li><span>species: </span><ul className={listInList}>{bionicle.species.map(s => <li>{s}</li>)}</ul></li>
        <li><span>factions: </span><ul className={listInList}>{bionicle.factions.map(f => <li>{f}</li>)}</ul></li>
        <li><span>home: </span><ul className={listInList}>{bionicle.home.map(h => <li>{h}</li>)}</ul></li>
        <li><span>element: </span>{bionicle.element}</li>
        <li><span>mask: </span>{bionicle.mask}</li>
        <li><span>colors: </span>{bionicle.colors}</li>
        <li><span>year: </span>{bionicle.year}</li>
        <li><span>parts: </span>{bionicle.parts}</li>
      </ul>
      </div>
    </Layout>
  )
}

export default BioniclePage;