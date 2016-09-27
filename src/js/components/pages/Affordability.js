import React from 'react';
import { Accordion, Panel, ProgressBar } from 'react-bootstrap';

export default class Affordability extends React.Component {

    panelHeading (title, align = 'left') {
        return (
            <div className={`panel-heading--${align}`}>
                <h4 role="presentation" className="panel-title">
                    <a role="tab">{title}</a>
                </h4>
            </div>
        );
    }

    render () {
        return (
            <article>
                <h1 className="dimension-title">
                    <img src="/dist/img/affordability-logo.jpg"
                        className="dimension-title__img"/> Affordability</h1>

                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                    proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

                <img src="/dist/img/affordability-stat.jpg" className="dimension-img img-responsive"/>

                <Accordion className="full-width">
                    <Panel header={this.panelHeading('Essential Criteria')} eventKey={1}>
                        <ol className="list-unstyled">
                            <li>Lorem ipsum dolor sit amet</li>
                            <li>Ut enim ad minim veniam</li>
                            <li>Duis aute irure dolor in</li>
                            <li>Excepteur sint occaecat cupidatat non</li>
                        </ol>
                    </Panel>
                    <Panel header={this.panelHeading('Tradeable Criteria')} eventKey={2}>
                        <ol className="list-unstyled">
                            <li>Lorem ipsum dolor sit amet</li>
                            <li>Ut enim ad minim veniam</li>
                            <li>Duis aute irure dolor in</li>
                            <li>Excepteur sint occaecat cupidatat non</li>
                        </ol>
                    </Panel>
                </Accordion>

                <p><img src="http://placehold.it/250x250/" className="img-responsive"/></p>
                <p><img src="http://placehold.it/250x250/" className="img-responsive"/></p>

                <Accordion className="full-width" defaultActiveKey={1}>
                    <Panel header={this.panelHeading('Affordability by household income', 'right')} eventKey={1}>
                        <ul className="list-unstyled">
                            <li>
                                <h4>Value A</h4>
                                <ProgressBar now={60} label={'60%'} srOnly/>
                            </li>
                            <li>
                                <h4>Value B</h4>
                                <ProgressBar now={70} label={"70%"} srOnly/>
                            </li>
                            <li>
                                <h4>Value C</h4>
                                <ProgressBar now={80} label={"80%"} srOnly/>
                            </li>
                            <li>
                                <h4>Value D</h4>
                                <ProgressBar now={65} label={"65%"} srOnly/>
                            </li>
                        </ul>
                    </Panel>
                    <Panel header={this.panelHeading('Affordability by tenure', 'right')} eventKey={2}>
                        Lorem ipsum
                    </Panel>
                    <Panel header={this.panelHeading('Affordability by age', 'right')} eventKey={3}>
                        Lorem ipsum
                    </Panel>
                    <Panel header={this.panelHeading('Affordability by social group', 'right')} eventKey={4}>
                        Lorem ipsum
                    </Panel>
                    <Panel header={this.panelHeading('Affordability by other', 'right')} eventKey={5}>
                        Lorem ipsum
                    </Panel>
                </Accordion>

                <ul className="list-unstyled full-width">
                    <li>
                        <button className="btn btn-primary">
                            Download the full report
                        </button>
                    </li>
                    <li>
                        <button className="btn btn-primary">
                            Download the affordability chapter
                        </button>
                    </li>
                </ul>

                <h3>Renee's Story</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                    proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

                <p><img src="http://placehold.it/500x500/" className="img-responsive"/></p>

                <blockquote>Lorem ipsum dolor sit amet, consectetur adipisicing elit</blockquote>

                <h3>Shelter recommends</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                    consequat.</p>
                <p><a href="#">Read more</a></p>

                <ul className="list-unstyled">
                    <li><button className="btn btn-primary">Neighbourhood</button></li>
                    <li><button className="btn btn-primary">Stability</button></li>
                    <li><button className="btn btn-primary">Space</button></li>
                    <li><button className="btn btn-primary">Decent Conditions</button></li>
                </ul>
            </article>
        );
    }

}
