import React from 'react';
import { Accordion, Panel, ProgressBar } from 'react-bootstrap';

const data = [
    {
        'title': 'Affordability by household income',
        'values': [
            {label: 'Up to £9,499', percent: 60},
            {label: '£9,500–17,499', percent: 70},
            {label: '£17,500–29,999', percent: 80},
            {label: '£30,000–49,999', percent: 65},
            {label: '£50,000 or more', percent: 65}
        ]
    }
];

export default class Affordability extends React.Component {

    panelHeading (title, align = 'left') {
        return (
            <div role="presentation" className={`panel-heading--${align}`}>{title}</div>
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

                <div className="dimension-infographic full-width">
                    <img src="/dist/img/infographic1.jpg"
                        className="dimension-infographic__img img-responsive"/>
                    <img src="/dist/img/infographic2.jpg"
                        className="dimension-infographic__img img-responsive"/>
                    <button className="dimension-infographic__btn btn btn-primary btn--full-width">
                        Infographic on Affordability
                    </button>
                </div>

                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                    proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

                <Accordion className="full-width" defaultActiveKey={0}>
                    {data.map((panel, i) => (
                        <Panel key={i} header={this.panelHeading(panel.title, 'right')} eventKey={i}>
                            <ul className="list-unstyled">
                                {panel.values.map((value, j) => (
                                    <li key={j}>
                                        <span className="sr-only">{value.label}</span>
                                        <ProgressBar now={value.percent} label={value.percent + '%'}/>
                                    </li>
                                ))}
                            </ul>
                            {panel.values.map((value, k) => (
                                <button key={k} className="btn">{value.label}</button>
                            ))}
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
