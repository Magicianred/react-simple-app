import React, { Component } from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';

/**
 * Component for showing the Home page.
 * 
 * @component
 * @example
 * return (
 *   <Home />
 * )
 */
class Home extends Component {
    render() {
        return (
            <div className="page">
                <Jumbotron className="page home">
                    <h2>Home page</h2>
                    <p>This is the home page</p>
                </Jumbotron>
            </div>
        );
    }
}

export default Home;