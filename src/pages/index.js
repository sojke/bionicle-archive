import * as React from 'react';
import Layout from '../components/layout';
import {StaticImage} from 'gatsby-plugin-image';

const IndexPage = () => {
  return (
      <Layout pageTitle="Homepage">
        <p>Lorem ipsum</p>
        <StaticImage
        alt="Een Gatsby astronaut"
        src="E:/OneDrive BackUp/OneDrive/Afbeeldingen/300px-Surprised_Pikachu_HD.jpg"
        />
      </Layout>
  )
}

export default IndexPage;