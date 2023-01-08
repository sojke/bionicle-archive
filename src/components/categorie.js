import { Link } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import * as React from 'react';

const Categorie = ({subtheme}) => {
    const image = getImage(subtheme.node.subthemeMeta.logo.localFile);
    const alt = subtheme.node.subthemeMeta.logo.altText;
    const title = subtheme.node.name;
    const bionicles = subtheme.node.bionicles.nodes;
    return (
        <div>
            <h2>{title}</h2>
            <GatsbyImage image={image} alt={alt}/>
            {bionicles.map(bionicle => 
                <Link to={`/bionicles/${bionicle.slug}`}>{bionicle.title}</Link>
            )}
        </div>
    );
}

export default Categorie;