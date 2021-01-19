import React, { Component } from 'react';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image'


class About extends Component {
     
    render() {
        

        return (

            <div id="about">
                <div className="row">
                    <Col sm={4}>
                        <Image src="holder.js/171x180" rounded />
                    </Col>
                    <Col sm={8}>
                        <div className="row">
                            <h2>About Me</h2>
                            <p>Here I am placing information about myself.</p>
                        </div>
                        <div className="row">
                            <h2>Let's Get In Touch</h2>
                            <p>
                                <div>Christina Flores</div>
                                <div>Tucson, AZ</div>
                                <div>https://github.com/cdflori</div>
                            </p>
                        </div>
                    </Col>
                </div>
            </div>
        )
    }

}

export default About; 