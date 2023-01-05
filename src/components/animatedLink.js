import * as React from 'react';
import { Link } from 'gatsby';
import { navLink, activeNavLink } from './layout.module.css';

const AnimatedLink = ({linkText, linkTo}) => {
    return (
        <Link activeClassName={activeNavLink} className={navLink} to={linkTo}>
            {linkText.split('').map(letter => <span>{letter}</span>)}
        </Link>
    );
}

export default AnimatedLink;