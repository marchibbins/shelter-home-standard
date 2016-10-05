import React from 'react';
import update from 'react-addons-update';
import { Accordion, Panel, ProgressBar } from 'react-bootstrap';
import { Link } from 'react-router';

export default class Base extends React.Component {

    handleAttrClick (objIndex, valueIndex, event) {
        event.preventDefault();
        let toggle = this.props.attributes[objIndex].values[valueIndex].active === true ? false : true;
        this.setState({
            data: update(this.attributes.attr, {[objIndex]: {
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
        const dimensions = [
            'Affordability', 'Neighbourhood', 'Stability', 'Space', 'Decent conditions'
        ];

        return (
            <article className={`dimension dimension--${this.props.dimension.toLowerCase()}`}>
                <p className="dimension-strapline">
                    <span className="dimension-strapline__img">
                        <span className="sr-only">{this.props.fail}%</span></span> of
                    all homes do not meet the {this.props.dimension.toLowerCase()} Living Home Standard</p>

                <h1 className="dimension-title">{this.props.dimension}</h1>
                <section className="dimension-section">{this.props.intro}</section>

                <Accordion className="full-width">
                    <Panel header={this.panelHeading('Essential Criteria', 'Lorem ipsum dolor sit amet')}
                        className="dimension-criteria panel--arrows" eventKey={1}>
                        <ol className="list-unstyled">
                            {this.props.criteria.essential.map((criteria, i) => (
                                <li key={i}>{criteria}</li>
                            ))}
                        </ol>
                    </Panel>
                    <Panel header={this.panelHeading('Tradeable Criteria', 'Lorem ipsum dolor sit amet')}
                        className="dimension-criteria panel--arrows" eventKey={2}>
                        <ol className="list-unstyled">
                            {this.props.criteria.tradeable.map((criteria, i) => (
                                <li key={i}>{criteria}</li>
                            ))}
                        </ol>
                    </Panel>
                </Accordion>

                <div className="dimension-infographic full-width">
                    <img src="/dist/img/infographic1.jpg"
                        className="dimension-infographic__img img-responsive"/>
                    <img src="/dist/img/infographic2.jpg"
                        className="dimension-infographic__img img-responsive"/>
                    <button className="dimension-infographic__btn btn btn-primary">
                        Infographic on {this.props.dimension.toLowerCase()}
                        <span className="dimension-infographic__btn-small">Lorem ipsum dolor sit amet</span>
                    </button>
                </div>

                <section className="dimension-section">{this.props.info}</section>

                <Accordion className="full-width" defaultActiveKey={0}>
                    {this.props.attributes.map((panel, i) => (
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
                                        key={k} onClick={this.handleAttrClick.bind(this, i, k)}>{value.label}</button>
                                ))}
                            </div>
                        </Panel>
                    ))}
                </Accordion>

                <ul className="list-unstyled full-width">
                    <li>
                        <a href={this.props.fullLink}
                            className="btn btn-primary btn--download btn--full-width">
                            Download the full report
                        </a>
                    </li>
                    <li>
                        <a href={this.props.chapterLink}
                            className="btn btn-secondary btn--download btn--full-width">
                            Download the {this.props.dimension.toLowerCase()} chapter
                        </a>
                    </li>
                </ul>

                <section className="dimension-section">{this.props.caseStudy}</section>

                <div className="dimension-recommends full-width">
                    <h3 className="dimension-recommends__title">Shelter recommends</h3>
                    {this.props.recommends}
                    <p><a href={this.props.recommendsLink} className="read-more">Read more</a></p>
                </div>

                <div className="dimension-section">
                    <h4>Explore other dimensions</h4>
                    <ul className="list-unstyled">
                        {dimensions.map((dimension, i) => {
                            if (dimension.toLowerCase() !== this.props.dimension.toLowerCase()) {
                                return (
                                    <li key={i}>
                                        <Link to={`/${dimension.toLowerCase()}`}
                                            className="btn btn-primary">{dimension}</Link>
                                    </li>
                                );
                            }
                        })}
                    </ul>
                </div>
            </article>
        );
    }

}
