import React from 'react';

import Base from './Base';

import data from '../../data/affordability';

export default class Affordability extends React.Component {

    render () {
        const intro = (
                <div>
                    <p>Affordability was consistently rated by the public as among the most important aspects of an acceptable home. And it was also the dimension that saw the largest number of people fall short of the standard.</p>
                    <p>To create a measure for affordability, we looked at the impact of housing costs on people’s lives. We asked the public to tell us what trade-offs people should not have to make in order to pay their rent or mortgage.</p>
                </div>
            ),
            caseStudy = (
                <div className="dimension-case">
                    <div className="dimension-case__img">
                        <img src="/livinghomestandard/assets/img/casestudy-affordability.jpg" className="img-responsive"/>
                    </div>

                    <h3 className="dimension-case__title">Lou lives in a one bedroom flat with her two children</h3>

                    <p>After my marriage ended, I could only afford to rent a one bedroom flat. My younger daughter stays here part time, but mainly lives with her dad because we’re so cramped. It was partly for financial reasons that my boyfriend moved in.</p>
                    <p>I work with people with complex care needs, such as brain injuries or MS. I’m largely self-employed, and I normally work between 30 – 45 hours a week. I’d like to go and do some training to better myself and earn more money but how can I do that? I’m so disappointed that even when I work so hard I still find it hard just to make ends meet.</p>

                    <blockquote className="dimension-blockquote">&ldquo;I couldn’t afford to buy my son a birthday present this year because I was scraping the bottom of the barrel to pay the rent.&rdquo;</blockquote>
                </div>
            ),
            recommends = (
                <p>Improving affordability by building <strong>250,000 new homes</strong> a year of which half are affordable.</p>
            );

        return (
            <Base name={data.dimension}
                fail={data.fail}
                attributes={data.attributes}
                criteria={data.criteria}
                intro={intro}
                infographic1="domain_affordability.svg"
                infographic2="domain_affordability_quote.svg"
                chapterLink="living_home_standard_excerpt_affordability.pdf"
                fullLink="living_home_standard_full_report.pdf"
                caseStudy={caseStudy}
                recommends={recommends}/>
        );
    }

}
