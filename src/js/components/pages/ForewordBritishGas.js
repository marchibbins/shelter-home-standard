import React from 'react';
import { Col, Grid, Row } from 'react-bootstrap';

export default class ForewordBritishGas extends React.Component {

    render () {
        return (
            <Grid>
                <article>
                    <h1>Foreword</h1>
                    <h2>Sarwjit Sambhi, Managing Director, UK Home, British Gas</h2>
                    <Row>
                        <Col md={5} mdPush={7}>
                            <img className="img-responsive"
                                src="/livinghomestandard/assets/img/foreword-sawjit-sambhi.jpg"/>
                        </Col>
                        <Col md={7} mdPull={5}>
                            <p>At British Gas we share a belief with Shelter, that we should all have a safe, decent and warm place to call home. Working together for four years, we’ve raised over &pound;1million and helped to improve living standards for thousands of families.</p>
                            <p>Our focus has been on improving standards in the private rented sector and we’re proud of all we have achieved together through sharing our expertise and knowledge.</p>
                            <ul>
                                <li>We’ve successfully campaigned to improve electrical and carbon monoxide safety standards in England, Scotland and Wales.</li>
                                <li>And we’ve worked with Shelter in England and Wales to protect renters from retaliatory eviction &mdash; when landlords evict tenants for drawing attention to the problems in their property.</li>
                                <li>Funding from the British Gas Energy Trust has also enabled training on fuel poverty and energy debt for all Shelter’s advisers as well as funding for fifteen specialist Shelter advisers who can provide tailored, free and impartial advice on how to stay out of debt.</li>
                            </ul>
                            <p>Home is central to our work as it’s vital to our customers. Our engineers make 9 million visits to their homes every year, whether that is to install insulation or smart meters, repair boilers, or conduct gas and electrical safety checks.  So we know that having a warm home is really important to them. We know from our work around the Connected Home that technology is transforming homes and the way people live. We also know that there are too many places in Britain where people are not happy to call home. So we need to do more to improve the standard of homes for everyone. </p>
                            <p>We saw the development of the Living Home Standard as a powerful opportunity to do just this. As well as building on our partnership with Shelter, we’ve been able to learn more from our customers about what’s important to them in a home and together produce something that has the potential to help us all have a safe, decent and warm place to call home. </p>
                       </Col>
                   </Row>
                </article>
            </Grid>
        );
    }

}
