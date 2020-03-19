import React, { Component } from 'react';
import AboutSectionMenu from './../Partials/AboutSectionMenu';
import Jumbotron from 'react-bootstrap/Jumbotron';

/**
 * Component for showing the Where Are page.
 * 
 * @component
 * @example
 * return (
 *   <WhereAre />
 * )
 */
class WhereAre extends Component {
    render() {
        return (
            <div className="page">
                <Jumbotron className="page whereare">
                    <h2>Where Are</h2>
                    <p>This is the where are page</p>
                </Jumbotron>
                <AboutSectionMenu />
            </div>
        );
    }
}

export default WhereAre;