import React from 'react';

import Base from './Base';

import data from '../../data/space';

export default class Space extends React.Component {

    render () {
        const intro = (
                <div>
                    <p>Our research showed that people primarily thought about their space needs in two ways. Firstly, in terms of having space for things like storage and cooking. And secondly, in relation to social requirements, such as having space to spend time with others.</p>
                    <p>Not having enough space was thought to have a negative impact on relationships and cause stress. Adequate space was felt to be crucial for wellbeing.</p>
                </div>
            ),
            caseStudy = (
                <div className="dimension-case">
                    <div className="dimension-case__img">
                        <img src="/livinghomestandard/assets/img/casestudy-space.jpg" className="img-responsive"/>
                    </div>

                    <h3 className="dimension-case__title">April lives in a two bedroom maisonette with her fiancé and their three children</h3>

                    <p>We share a bedroom with the two younger children so we have a cot and a single bed as well as our double bed.  My son sleeps in the small bedroom. It would make a huge difference to us to get a bigger place.</p>
                    <p>My partner works as a landscape gardener and earns the minimum wage.  Even if we could find somewhere that would accept part Housing Benefit, we can’t save the money we would need to move, because we would need a month’s rent upfront as well as the deposit and letting agent’s admin fees. It’s horrible, I’ve cried myself to sleep sometimes, just thinking I can’t give my children what they need.</p>

                    <blockquote className="dimension-blockquote">&ldquo;The children are on top of each other all the time. They argue a lot and I think being so crowded together is the main cause.&rdquo;</blockquote>
                </div>
            ),
            recommends = (
                <p>Creating more space by introducing <strong>minimum space standards</strong> for all new developments.</p>
            );

        return (
            <Base name={data.dimension}
                fail={data.fail}
                attributes={data.attributes}
                criteria={data.criteria}
                intro={intro}
                infographic1="domain_space.svg"
                infographic2="domain_space_quote.svg"
                infographicLink="#"
                chapterLink="#"
                fullLink="#"
                caseStudy={caseStudy}
                recommends={recommends}/>
        );
    }

}
