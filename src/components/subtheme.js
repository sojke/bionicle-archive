import { Link } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import * as React from 'react';
import {subthemeContainer} from '../styling/subthemes.module.css';

const subtheme = ({subtheme}) => {
    const image = getImage(subtheme.node.subthemeMeta.logo.localFile);
    const alt = subtheme.node.subthemeMeta.logo.altText;
    const title = subtheme.node.name;
    const bionicles = subtheme.node.bionicles.nodes;
    return (
        <div className={subthemeContainer}>
            <h2>{title}</h2>
            <GatsbyImage image={image} alt={alt}/>
            {bionicles.map(bionicle => 
                <Link style={{textDecoration: 'none', color: 'white'}} to={`/bionicles/${bionicle.slug}`}>
                    <h3>{bionicle.title}</h3>
                </Link>
            )}
        </div>
    );
}

export default subtheme;