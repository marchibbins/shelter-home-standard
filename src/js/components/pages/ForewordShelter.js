import React from 'react';
import { Col, Grid, Row } from 'react-bootstrap';

export default class ForewordShelter extends React.Component {

    render () {
        return (
            <Grid>
                <article>
                    <h1>Foreword</h1>
                    <h2>Campbell Robb, Chief Executive, Shelter</h2>
                    <Row>
                        <Col md={5} mdPush={7}>
                            <img className="img-responsive"
                                src="/livinghomestandard/assets/img/foreword-campbell-robb.jpg"/>
                        </Col>
                        <Col md={7} mdPull={5}>
                            <p>In early 2016 we set out to have thousands of conversations with people across the UK about what home meant to them. Although we’ve been championing the importance of home since 1966, we wanted to mark our 50th anniversary by reconnecting society with a united vision that we need to strive for more than a roof over our heads. Because while a roof is a necessity, it’s far from enough.</p>
                            <p>In our modern and sometimes disconnected society, we wanted to see whether it was possible to have a shared sense of home. We wanted to build a common understanding that home is bigger than bricks and mortar. That home is crucial both to our wellbeing and a foundation from which we can build and live our lives. Working in partnership with British Gas, our Great Home Debate enabled us to have thousands of conversations with people across the UK about what makes a place a home. We gained a rich understanding of what home means to people today and underpinned by extensive research by Ipsos MORI were able to collaborate with the public to form the Living Home Standard.</p>
                            <p>With the Living Wage as our inspiration, we wanted something that would raise the bar for homes in this country. Developed by the public for the public, this ground-breaking piece of work amplifies Shelter’s vision of a home for everyone, bringing together for the first time space, affordability, neighbourhood, decent conditions and stability. We’ve been able to take a holistic look at home, and provide an ambitious but realistic definition of what the British public believe everyone needs from a home in order to live rather than just get by.</p>
                            <p>It’s really important that we’ve redefined home together, as increasing the number of homes that meet this standard will need a collective effort. Our history shows change is possible, but this work shows we have more to do. We hope that this will enable us to unite the country and rise to the challenge of bringing a home for everyone back in reach - from young people starting out and families settling down to those planning or in retirement.</p>
                            <p>We have developed the standard as a shared understanding of what the British public need in a home and will undertake an annual measure to show how many people live in homes that meet it so we can track progress on a national and regional scale. We are also very keen to collaborate with others to scope projects that kick-start its direct application to homes and hope this will also inspire independent initiatives.</p>
                            <p>We know that together we can create meaningful change for future generations. We’re calling on the government to work in partnership with the public, private and non-profit sectors and increase the number of homes that meet the standard. We believe that a country as great as Britain can and should see everyone living in a place they can truly call home.</p>
                        </Col>
                    </Row>
                </article>
            </Grid>
        );
    }

}
