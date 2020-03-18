import React from 'react';
import PropTypes from 'prop-types';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from './../../logo.svg';

/**
 * Component for showing the header of the site.
 * @component
 * @example
 * const sitename = 'my site name'
 * return (
 *   <Header title={sitename} />
 * )
 */
const Header = ({ title }) => {
    return (
        <header className="partial header">
            <>
                <Navbar bg="light">
                    <Navbar.Brand href="/">
                    <img
                        src={logo}
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                        alt={`${title} logo`}
                    />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link href="/">Home</Nav.Link>
                            <Nav.Link href="/whoare">Who Are</Nav.Link>
                            <Nav.Link href="/contact">Contact Us</Nav.Link>
                            <Nav.Link href="/altro">Altro</Nav.Link>
                            <Nav.Link target="_blank" href="/docs">Docs [open new page]</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </>
        </header>
    );
}

Header.propTypes = {
    /**
     * Title of the site
     */
    title: PropTypes.string.isRequired,
}

Header.defaultProps = {
    title: 'Default Site title'
}

export default Header;