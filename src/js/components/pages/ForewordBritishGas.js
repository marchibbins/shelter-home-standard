import React from 'react';
import { Col, Grid, Row } from 'react-bootstrap';

export default class ForewordBritishGas extends React.Component {

    render () {
        return (
            <Grid>
                <article>
                    <h1>Foreword</h1>
                    <h3>Sarwjit Sambhi</h3>
                    <h4>Managing Director, UK Home, British Gas</h4>
                    <Row>
                        <Col md={5} mdPush={7}>
                            <img className="img-responsive"
                                src="/livinghomestandard/assets/img/foreword-sawjit-sambhi.jpg"/>
                        </Col>
                        <Col md={7} mdPull={5}>
                            <p>At British Gas we share a belief with Shelter, that everyone should have a safe, decent and warm place to call home. Working together for four years, we’ve raised over £1million and helped to improve living standards for thousands of families.</p>
                            <p>Our shared focus has been on improving standards in the private rented sector. We’re proud of all we have achieved together by pooling our expertise and knowledge.</p>
                            <ul>
                                <li>We’ve successfully campaigned to improve electrical and carbon monoxide safety standards in England, Scotland and Wales.</li>
                                <li>And we’ve worked with Shelter in England and Wales to protect renters from retaliatory eviction - when landlords evict tenants for drawing attention to the problems in their property.</li>
                                <li>Funding from the British Gas Energy Trust has also enabled training on fuel poverty and energy debt for all Shelter’s advisers as well as funding for fifteen Shelter specialists who can provide tailored, free and impartial advice on how to stay out of debt.</li>
                            </ul>
                            <p>Home is central to everything we do, because it’s vital to our customers. Our engineers make 9 million visits to their homes every year, whether that is to install insulation, repair boilers or conduct gas and electrical safety checks. They’re also working hard to bring homes in to the 21st century with smart meters and remote-controlled heating.</p>
                            <p>We know from our Connected Home business that technology is transforming homes and the way people live. But we also know that in too many parts of Britain people are not happy to call where they live “home”. So we need to do more to improve the standard of homes for everyone.</p>
                            <p>We saw the development of the Living Home Standard as a powerful opportunity to do just this. We’ve been able to learn more from our customers about what’s important to them in a home, and with Shelter have produced something that has the potential to help everyone have a safe, decent and warm place to call home.</p>
                       </Col>
                   </Row>
                </article>
            </Grid>
        );
    }

}
