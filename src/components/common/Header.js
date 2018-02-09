import React from 'react';
import { Link, IndexLink } from 'react-router';

const Header = () => {
    return (
        <nav>
            <IndexLink to="/" activeClassName="active">Home</IndexLink>
            {" | "}
            <IndexLink to="/about" activeClassName="active">About</IndexLink>
            {" | "}
            <IndexLink to="/courses" activeClassName="active">Courses</IndexLink>
            {" | "}
            <IndexLink to="/location" activeClassName="active">GeoLocation</IndexLink>
        </nav>
    );
};

export default Header;
