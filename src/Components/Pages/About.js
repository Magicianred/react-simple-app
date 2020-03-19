import React, { Component } from 'react';
import AboutSectionMenu from './../Partials/AboutSectionMenu';
import Jumbotron from 'react-bootstrap/Jumbotron';

/**
 * Component for showing the About Page page.
 * 
 * @component
 * @example
 * return (
 *   <About />
 * )
 */
class About extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         match: props.match
    //     };
    // }

    render() {
        // let { match } = this.state;
        return (
            <div className="page">
                <Jumbotron className="page about">
                    <h2>About Us page</h2>
                    <p>This is the about us page</p>
                </Jumbotron>
                <AboutSectionMenu />
            </div>
        );
    }
}

export default About;