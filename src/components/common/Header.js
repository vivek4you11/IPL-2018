import React from 'react';
import { Link, IndexLink } from 'react-router';

const Header = () => {
    return (
        <nav>
            <IndexLink to="/" activeClassName="active"><span>Home</span></IndexLink>
            <span>{" | "}</span>
            <IndexLink to="/about" activeClassName="active"><span>About</span></IndexLink>
            <span>{" | "}</span>
            <IndexLink to="/courses" activeClassName="active"><span>Courses</span></IndexLink>
            <span>{" | "}</span>
            <IndexLink to="/location" activeClassName="active"><span>Location</span></IndexLink>
            <span>{" | "}</span>
            <IndexLink to="/contact" activeClassName="active"><span>Contact</span></IndexLink>
          </nav>
    );
};

export default Header;
