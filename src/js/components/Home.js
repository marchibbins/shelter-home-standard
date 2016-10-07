import React from 'react';

import Base from './pages/Base';

import data from '../data/lhs';

export default class Home extends React.Component {

    render () {
        const intro = (
                <div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                        consequat.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                        consequat.</p>
                    <p className="dimension-strapline">
                        <span className="dimension-strapline__img">
                            <span className="sr-only">{data.fail}%</span></span> of
                    all homes do not meet the Living Home Standard</p>
                </div>
            ),
            lorem = (
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                    consequat.</p>
            ),
            caseStudy = (
                <div>
                    <img src="/dist/img/ghd-logo.jpg" className="img-responsive"/>

                    <h3>The Great Home Debate</h3>

                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                        cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                        proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

                    <p><a href="#" className="read-more">Read more</a></p>

                    <img src="http://placehold.it/500x200/" className="img-responsive"/>
                </div>
            );

        return (
            <Base name={data.dimension}
                slug="lhs"
                attributes={data.attributes}
                intro={intro}
                info={lorem}
                fullLink="#"
                caseStudy={caseStudy}
                recommends={lorem}
                recommendsLink="#"/>
        );
    }

}
