import { Link } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import * as React from 'react';
import ShortDesc from './shortDesc';
import { linkText} from '../styling/home.module.css';

const FeaturedBionicle = ({bionicle}) => {
    const image = getImage(bionicle.bionicleMeta.picture.localFile);
    return (
        <div style={{marginLeft: '10px', marginRight: '10px'}}>
            <Link className={linkText} to={`bionicles/${bionicle.slug}`}>
                <h3>{bionicle.bionicleMeta.name}</h3>
                <GatsbyImage style={{height: "200px"}} image={image} alt={bionicle.bionicleMeta.picture.altText}/>
            </Link>
            <ShortDesc description={bionicle.bionicleMeta.description} slug={`bionicles/${bionicle.slug}`} length={100}/>
        </div>
    );
}

export default FeaturedBionicle;