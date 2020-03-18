import React, { Component } from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';

/**
 * Component for showing the Contact Us page.
 * 
 * @component
 * @example
 * return (
 *   <Contact />
 * )
 */
class Contact extends Component {
    render() {
        return (
            <div className="page">
                <Jumbotron className="contact">
                    <h2>Contact page</h2>
                    <p>This is the contact page</p>
                </Jumbotron>
            </div>
        );
    }
}

export default Contact;