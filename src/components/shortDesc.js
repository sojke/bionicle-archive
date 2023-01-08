import { Link } from 'gatsby';
import * as React from 'react';

const ShortDesc = ({description, slug, length}) => {
    const descArray = description.slice(0, length).split(' ');
    const shortDesc = descArray.filter((x,index) => index < (descArray.length - 1)).reduce((text, word) => text + ' ' + word,'');
    return (
        <p>{shortDesc}<Link to={slug}>... Read More</Link></p>
    );
}

export default ShortDesc;