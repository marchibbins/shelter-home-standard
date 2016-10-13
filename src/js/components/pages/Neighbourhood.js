import React from 'react';

import Base from './Base';

import data from '../../data/neighbourhood';

export default class Neighbourhood extends React.Component {

    render () {
        const intro = (
                <div>
                    <p>This dimension was introduced because the public identified their neighbourhood as being important to their understanding of home. Issues around location were originally discussed as part of affordability, as location obviously affects housing costs.  However, it became clear that neighbourhood deserved to be considered separately, as it contained other elements that people considered extremely important.</p>
                </div>
            ),
            caseStudy = (
                <div className="dimension-case">
                    <div className="dimension-case__img">
                        <img src="http://placehold.it/500x500/" className="img-responsive"/>
                    </div>

                    <h3 className="dimension-case__title">Rowena rents with her three children</h3>

                    <p>My children and I are living in our fifth private rental house. The first one, we thought would be secure, was sold after 5 years with only 3 months’ notice. The only thing we could afford was another private rental 10 miles away. I was desperate to keep the kids at the same school. The 40-mile round trip to school every day was expensive and exhausting.</p>
                    <p>I found us another rental closer to the kids’ school. The house is pretty clapped out but moving schools played havoc with the older kids’ education. I’m a single parent. All I want to do is provide a secure roof over my kids’ heads so they can concentrate on what should be a stress-free childhood, spent building a solid foundation for a successful adult life.</p>

                    <blockquote className="dimension-blockquote">&ldquo;Our future is very uncertain and I feel we have no idea where we might end up.&rdquo;</blockquote>
                </div>
            ),
            recommends = (
                <p>Improving neighbourhoods by encouraging <strong>alternative forms of housing developments</strong> which give communities more control over the quality and kinds of housing in their area.</p>
            );

        return (
            <Base name={data.dimension}
                fail={data.fail}
                attributes={data.attributes}
                criteria={data.criteria}
                intro={intro}
                infographic1="domain_neighbourhood.svg"
                infographic2="domain_neighbourhood_quote.svg"
                infographicLink="#"
                chapterLink="#"
                fullLink="#"
                caseStudy={caseStudy}
                recommends={recommends}/>
        );
    }

}
