import React from 'react';

import Base from './Base';

import data from '../../data/space';

export default class Space extends React.Component {

    render () {
        const lorem = (
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                    consequat.</p>
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

                    <h3 className="dimension-case__title">Renee's Story</h3>

                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                        cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                        proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

                    <blockquote className="dimension-blockquote">&ldquo;Lorem ipsum dolor sit amet,
                        consectetur adipisicing elit&rdquo;</blockquote>
                </div>
            );

        return (
            <Base name={data.dimension}
                fail={data.fail}
                attributes={data.attributes}
                criteria={data.criteria}
                intro={lorem}
                info={explainer}
                chapterLink="#"
                fullLink="#"
                caseStudy={caseStudy}
                recommends={lorem}
                recommendsLink="#"/>
        );
    }

}