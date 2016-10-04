import React from 'react';
import update from 'react-addons-update';
import { Accordion, Panel, ProgressBar } from 'react-bootstrap';
import data from '../../data/affordability';

export default class Affordability extends React.Component {

    constructor (props) {
        super(props);
        this.state = {data};
    }

    handleClick (objIndex, valueIndex, event) {
        event.preventDefault();
        let toggle = this.state.data[objIndex].values[valueIndex].active === true ? false : true;
        this.setState({
            data: update(this.state.data, {[objIndex]: {
                values: {[valueIndex]: {
                    $merge: {active: toggle}}
                }}
            })
        });
    }

    panelHeading (title, subheading = null, align = 'left') {
        return (
            <div role="presentation" className={`panel-heading--${align}`}>
                {title}
                {subheading && <div className="panel-subheading">{subheading}</div>}
            </div>
        );
    }

    render () {
        return (
            <article className="dimension dimension--affordability">
                <p className="dimension-strapline">
                    <span className="dimension-strapline__img">
                        <span className="sr-only">43%</span></span> of
                    all homes do not meet the affordability Living Home Standard</p>

                <h1 className="dimension-title">Affordability</h1>

                <div className="dimension-section">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                        consequat.</p>

                    <p>Duis aute irure dolor in reprehenderit in voluptate velit esse
                        cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                        proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>

                <Accordion className="full-width">
                    <Panel header={this.panelHeading('Essential Criteria', 'Lorem ipsum dolor sit amet')}
                        className="dimension-criteria panel--arrows" eventKey={1}>
                        <ol className="list-unstyled">
                            <li>Lorem ipsum dolor sit amet</li>
                            <li>Ut enim ad minim veniam</li>
                            <li>Duis aute irure dolor in</li>
                            <li>Excepteur sint occaecat cupidatat non</li>
                        </ol>
                    </Panel>
                    <Panel header={this.panelHeading('Tradeable Criteria', 'Lorem ipsum dolor sit amet')}
                        className="dimension-criteria panel--arrows" eventKey={2}>
                        <ol className="list-unstyled">
                            <li>Lorem ipsum dolor sit amet</li>
                            <li>Ut enim ad minim veniam</li>
                            <li>Duis aute irure dolor in</li>
                            <li>Excepteur sint occaecat cupidatat non</li>
                        </ol>
                    </Panel>
                </Accordion>

                <div className="dimension-infographic full-width">
                    <img src="/dist/img/infographic1.jpg"
                        className="dimension-infographic__img img-responsive"/>
                    <img src="/dist/img/infographic2.jpg"
                        className="dimension-infographic__img img-responsive"/>
                    <button className="dimension-infographic__btn btn btn-primary">
                        Infographic on affordability
                        <span className="dimension-infographic__btn-small">Lorem ipsum dolor sit amet</span>
                    </button>
                </div>

                <div className="dimension-section">
                    <p><strong>Lorem ipsum dolor sit amet</strong> consectetur adipisicing elit,
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                        cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                        proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>

                <Accordion className="full-width" defaultActiveKey={0}>
                    {this.state.data.map((panel, i) => (
                        <Panel key={i} header={this.panelHeading(panel.title, null, 'right')}
                            className="dimension-chart panel--dark panel--arrows" eventKey={i}>
                            <ul className="list-unstyled">
                                {panel.values.map((value, j) => (
                                    <li key={j}>
                                        <span className="sr-only">{value.label}</span>
                                        <ProgressBar now={value.percent} label={value.percent + '%'}
                                            className={value.active ? 'active': ''}/>
                                    </li>
                                ))}
                            </ul>
                            <div className="dimension-chart__buttons">
                                <div className="dimension-chart__filter">Filter:</div>
                                {panel.values.map((value, k) => (
                                    <button className={'btn' + (value.active ? ' active' : '')}
                                        key={k} onClick={this.handleClick.bind(this, i, k)}>{value.label}</button>
                                ))}
                            </div>
                        </Panel>
                    ))}
                </Accordion>

                <ul className="list-unstyled full-width">
                    <li>
                        <button className="btn btn-primary btn--full-width">
                            Download the full report
                        </button>
                    </li>
                    <li>
                        <button className="btn btn-primary btn--full-width">
                            Download the affordability chapter
                        </button>
                    </li>
                </ul>

                <div className="dimension-section">
                    <div className="full-width">
                        <img src="http://placehold.it/500x500/" className="img-responsive"/>
                    </div>

                    <h3>Renee's Story</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                        cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                        proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    <blockquote>Lorem ipsum dolor sit amet, consectetur adipisicing elit</blockquote>
                </div>

                <div className="dimension-recommends full-width">
                    <h3 className="dimension-recommends__title">Shelter recommends</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                        consequat.</p>
                    <p><a href="#" className="read-more">Read more</a></p>
                </div>

                <div className="dimension-section">
                    <h4>Explore other dimensions</h4>
                    <ul className="list-unstyled">
                        <li><button className="btn btn-primary">Neighbourhood</button></li>
                        <li><button className="btn btn-primary">Stability</button></li>
                        <li><button className="btn btn-primary">Space</button></li>
                        <li><button className="btn btn-primary">Decent Conditions</button></li>
                    </ul>
                </div>
            </article>
        );
    }

}
