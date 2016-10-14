import React from 'react';
import { Col, Grid, Row } from 'react-bootstrap';

export default class GreatHomeDebate extends React.Component {

    render () {
        return (
            <article className="ghd">
                <Grid>
                    <h1 className="ghd__title">
                        <span className="sr-only">Great Home Debate</span>
                        <img src="/livinghomestandard/assets/img/GHD_Logo_portrait.png" className="img-responsive hidden-sm hidden-md hidden-lg"/>
                        <img src="/livinghomestandard/assets/img/GHD_Logo_landscape.png" className="img-responsive hidden-xs"/>
                    </h1>
                    <Row>
                        <Col md={6} mdPush={6}>
                            <div className="embed-responsive embed-responsive-16by9">
                                <iframe className="embed-responsive-item" src="https://www.youtube.com/embed/QQQzIfVGfTs"></iframe>
                            </div>
                        </Col>
                        <Col md={6} mdPull={6}>
                            <p>In early 2016 Shelter partnered with British Gas to launch the Great Home Debate, a nationwide conversation about what home means in Britain today.</p>
                            <p>Through our services and campaigns we’ve led the way to ensuring more people can have a place to call home. In order to have a modern vision of what it is we’re striving for, we wanted to speak to as many people as possible, to join together and help shape new standards for homes in the 21st Century.</p>
                            <p>Through thousands of conversations, we explored what makes a place feel like a home, what people prioritise when it comes to practical considerations or location and which home comforts are important to them.</p>
                            <p>The Great Home Debate kicked off at the Ideal Home Show in London, offering visitors the chance to experience a virtual home.  Through 360 degree footage, they were able to step into real people’s homes and hear what home means to them.  One family featured is living in temporary accommodation while they wait for their own place to call home.</p>
                        </Col>
                    </Row>
                </Grid>
                <div className="ghd__quote">
                    <Grid>
                        <blockquote>&ldquo;Home is the centre around which I build my life and my family. Home allows me to make choices, to protect and nurture those I love. My home gives me stability and hope for a future.&rdquo;</blockquote>
                    </Grid>
                </div>
                <Grid>
                    <h2>What does home mean to you?</h2>
                    <p><strong>By Renee Stephenson, 18, London</strong></p>
                    <p>For sixteen frightening months, my family were homeless. My single mother taught us kids that our ‘home’ was in our love for each other, not the sordid temporary accommodation we had found ourselves in.</p>
                    <p><a href="#" className="read-more">Read more</a></p>
               </Grid>
            </article>
        );
    }

}
