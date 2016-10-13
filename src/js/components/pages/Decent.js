import React from 'react';

import Base from './Base';

import data from '../../data/decent';

export default class Decent extends React.Component {

    render () {
        const intro = (
                <div>
                    <p>All aspects of wellbeing can be severely compromised by poor conditions, in the most extreme cases putting lives at risk.</p>
                    <p>The public were quick to reach a consensus on many aspects of decency, although coming to an agreement on the exact definitions of what is and is not acceptable was sometimes the source of intense debate.</p>
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

                    <h3 className="dimension-case__title">Hayley is a single mum and full time police officer</h3>

                    <p>I struggled to find somewhere for us to live as lots of agents don’t like that I’m a single mum. So when I found this property I jumped at it, even though it was clear that some repair work needed doing. My estate agents assured me the work would be completed. The front door had a glass panel missing, every curtain was covered in mould and the guttering needed replacing.</p>
                    <p>My landlord made some basic improvements but three years on, the guttering has not been fixed and there’s still mould in every room. I am struggling as a result of all the extra costs this house is causing but I don’t have the finances to move.</p>

                    <blockquote className="dimension-blockquote">&ldquo;I pay £650 a month for the pleasure of living in a house that is not fit for purpose.&rdquo;</blockquote>
                </div>
            ),
            recommends = (
                <p>Tackling poor conditions by ensuring local authorities have the resources to <strong>stamp out rogue landlords and improve conditions</strong> in the private rented sector.</p>
            );

        return (
            <Base name={data.dimension}
                fail={data.fail}
                attributes={data.attributes}
                criteria={data.criteria}
                intro={intro}
                info={explainer}
                chapterLink="#"
                fullLink="#"
                caseStudy={caseStudy}
                recommends={recommends}/>
        );
    }

}
