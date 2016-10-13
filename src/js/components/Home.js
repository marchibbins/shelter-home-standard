import React from 'react';

import Base from './pages/Base';
import Digest from './Digest';

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
                </div>
            ),
            lorem = (
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                    consequat.</p>
            ),
            caseStudy = (
                <div className="dimension-case">
                    <div className="dimension-case__img hidden-xs hidden-sm">
                        <img src="http://placehold.it/500x200/"/>
                    </div>
                    <div className="dimension-case__img">
                        <img src="/livinghomestandard/assets/img/ghd-logo.jpg"/>
                    </div>

                    <h3 className="dimension-case__title">The Great Home Debate</h3>

                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                        cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                        proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

                    <p><a href="#" className="read-more">Read more</a></p>

                    <img src="http://placehold.it/500x200/" className="img-responsive hidden-md hidden-lg"/>
                </div>
            );

        return (
            <Base name={data.dimension}
                fail={data.fail}
                slug="lhs"
                attributes={data.attributes}
                intro={intro}
                info={lorem}
                fullLink="#"
                caseStudy={caseStudy}
                digest={<Digest/>}/>
        );
    }

}
