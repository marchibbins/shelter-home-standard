import React from 'react';
import { Col, Grid, Row } from 'react-bootstrap';

export default class Copy extends React.Component {

    render () {
        return (
            <Grid>
                <article>
                    <h1>Contact</h1>
                    <Row>
                        <Col sm={6} md={3}>
                            <div>
                                <p><img src="/livinghomestandard/assets/img/contact-campbell-robb.jpg" className="img-responsive"/></p>
                                <h3>Campbell Robb</h3>
                                <h4>Chief Executive</h4>
                                <p><a href="mailto:public_affairs@shelter.org.uk">Email</a></p>
                            </div>
                        </Col>
                        <Col sm={6} md={3}>
                            <div>
                                <p><img src="/livinghomestandard/assets/img/contact-roger-harding.jpg" className="img-responsive"/></p>
                                <h3>Roger Harding</h3>
                                <h4>Director of Communications, Policy and Campaigns</h4>
                                <p><a href="mailto:public_affairs@shelter.org.uk">Email</a></p>
                            </div>
                        </Col>
                        <Col sm={6} md={3}>
                            <div>
                                <p><img src="/livinghomestandard/assets/img/contact-hilary-burkitt.jpg" className="img-responsive"/></p>
                                <h3>Hilary Burkitt</h3>
                                <h4>Head of Research</h4>
                                <p><a href="mailto:public_affairs@shelter.org.uk">Email</a></p>
                            </div>
                        </Col>
                        <Col sm={6} md={3}>
                            <div>
                                <p><img src="/livinghomestandard/assets/img/contact-steve-akehurst.jpg" className="img-responsive"/></p>
                                <h3>Steve Akehurst</h3>
                                <h4>Head of Public Affairs</h4>
                                <p><a href="mailto:public_affairs@shelter.org.uk">Email</a></p>
                            </div>
                        </Col>
                    </Row>
                    <p>Telephone: 0344 515 1182</p>
                </article>
            </Grid>
        );
    }

}
