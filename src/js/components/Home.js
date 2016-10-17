import React from 'react';

import Base from './pages/Base';
import Digest from './Digest';

import data from '../data/lhs';

export default class Home extends React.Component {

    render () {
        const intro = (
                <div>
                    <p>The Living Home Standard has been created by the public, for the public, to define what an acceptable home should provide. It looks at what we should all be able to expect from our home in order to secure our wellbeing and provide a foundation from which we can build and live our lives.</p>
                    <p>The Standard is the product of nine months of research undertaken by Ipsos MORI on behalf of Shelter and British Gas, and involved discussion groups, workshops and quantitative surveys as well as an online community. The result is a list of 39 attributes which define the Living Home Standard, split between essentials that all homes must meet and tradables which take account of differing needs and priorities between households.  It is a standard that applies to all homes, irrespective of their tenure, size or age.</p>
                </div>
            ),
            caseStudy = (
                <div className="dimension-case">
                    <div className="dimension-case__img hidden-xs hidden-sm">
                        <img src="/livinghomestandard/assets/img/great-home-debate.jpg"/>
                    </div>
                    <div className="dimension-case__img">
                        <img src="/livinghomestandard/assets/img/GHD_Logo_landscape.png"/>
                    </div>

                    <h3 className="dimension-case__title">The Great Home Debate</h3>

                    <p><strong>In early 2016, Shelter partnered with British Gas to launch the Great Home Debate – a nationwide conversation about what home means in Britain today.</strong></p>

                    <p>We wanted to speak to as many people as possible to help us shape new standards for homes in the 21st Century. Through thousands of conversations, we explored what makes a place feel like a home and what people prioritise when it comes to things like size and location.</p>

                    <img src="/livinghomestandard/assets/img/great-home-debate.jpg" className="img-responsive hidden-md hidden-lg"/>
                </div>
            );

        return (
            <Base name={data.dimension}
                fail={data.fail}
                slug="lhs"
                intro={intro}
                infographic1="home_map.svg"
                infographic2="home_stats.svg"
                infographicLink="lhs_topline_results.pdf"
                attributes={data.attributes}
                fullLink="living_home_standard_full_report.pdf"
                caseStudy={caseStudy}
                digest={<Digest/>}/>
        );
    }

}
