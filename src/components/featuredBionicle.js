import { Link } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import * as React from 'react';
import ShortDesc from './shortDesc';

const FeaturedBionicle = ({bionicle}) => {
    const image = getImage(bionicle.bionicleMeta.picture.localFile);
    return (
        <div>
            <Link to={`bionicles/${bionicle.slug}`}>
                <h3>{bionicle.bionicleMeta.name}</h3>
                <GatsbyImage image={image} alt={bionicle.bionicleMeta.picture.altText}/>
            </Link>
            <ShortDesc description={bionicle.bionicleMeta.description} slug={`bionicles/${bionicle.slug}`} length={100}/>
        </div>
    );
}

export default FeaturedBionicle;