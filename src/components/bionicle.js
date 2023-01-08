import { GatsbyImage, getImage } from 'gatsby-plugin-image' ;
import { Link } from 'gatsby';
import * as React from 'react';
import ShortDesc from './shortDesc';

const Bionicle = ({bionicle}) => {
    const title = bionicle.node.title;
    const image = getImage(bionicle.node.bionicleMeta.picture.localFile);
    const alt = bionicle.node.bionicleMeta.picture.altText;
    const description = bionicle.node.bionicleMeta.description;
    const categories = bionicle.node.subthemes.nodes;
    const slug = bionicle.node.slug;
    return (
        <div>
            <Link to={slug}>
                <h2>{title}</h2>
            <GatsbyImage image={image} alt={alt}/>
            </Link>
            <h3>{categories.map((c,index) => <span>{(index < categories.length-1) ? c.name +  " - " : c.name}</span>)}</h3>
            <ShortDesc description={description} slug={slug} length={200}/>
        </div>
    );
}

export default Bionicle;