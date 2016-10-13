import React from 'react';

import Base from './Base';

import data from '../../data/stability';

export default class Stability extends React.Component {

    render () {
        const intro = (
                <div>
                    <p>Discussions around stability often referenced the extent to which people felt able to make the place they lived a ‘home’. And so this dimension covers issues ranging from the length of time people can stay in their home, to the ability to keep a pet.</p>
                    <p>Throughout our research, the public saw stability as an issue primarily affecting renters, not homeowners. Naturally, this presented some challenges in developing a measure that applies to everyone. However, the final attributes attempt to reconcile this as far as possible.</p>
                </div>
            ),
            explainer = (
                <p className="columns"><strong>Lorem ipsum dolor sit amet</strong> consectetur adipisicing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                    consequat.</p>
            ),
            caseStudy = (
                <div className="dimension-case">
                    <div className="dimension-case__img">
                        <img src="http://placehold.it/500x500/" className="img-responsive"/>
                    </div>

                    <h3 className="dimension-case__title">Amanda, Bournemouth</h3>

                    <p>The first time the landlady decided to move back in. In the second flat, the landlord put our rent up to £800 which we couldn't afford, and the third property was covered in so much damp our wardrobe fell apart. We found a new place but after three years I came home to find a sold board in the front garden. The landlord had sold to a developer and hadn't told us.</p>
                    <p>By putting as much as we could on credit cards and borrowing money from family, we moved into our little flat. The landlord has already told us he’s going to put the rent up. I can’t sleep at night worrying about the debt accrued each time, with moving and letting agent fees.</p>

                    <blockquote className="dimension-blockquote">&ldquo;We’ve rented for nearly nine years and moved five times.&rdquo;</blockquote>
                </div>
            ),
            recommends = (
                <p>Increasing stability by introducing the <strong>Stable Rental Contract</strong> as the norm for all private rented sector tenants. This contract offers 5-year tenancies with predictable rents, but also provides flexibility for tenants and landlords.</p>
            );

        return (
            <Base name={data.dimension}
                fail={data.fail}
                attributes={data.attributes}
                criteria={data.criteria}
                intro={intro}
                infographic1="domain_stability.svg"
                infographic2="domain_stability_quote.svg"
                infographicLink="#"
                info={explainer}
                chapterLink="#"
                fullLink="#"
                caseStudy={caseStudy}
                recommends={recommends}/>
        );
    }

}
