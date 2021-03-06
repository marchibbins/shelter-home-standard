import React from 'react';
import { Accordion, Col, Grid, Row, Panel, PanelGroup, ProgressBar } from 'react-bootstrap';
import { Link } from 'react-router';

import { URLS } from '../../config';

export default class Base extends React.Component {

    constructor (props) {
        super(props);
        this.state = {
            attributes: this.props.attributes,
            windowWidth: window.innerWidth
        };
        this.handleResize = this.handleResize.bind(this);
    }

    handleAttrClick (objIndex, valueIndex) {
        let attributes = this.state.attributes;
        attributes[objIndex].values.map(value => {
            value['active'] = false;
            return value;
        });
        attributes[objIndex].values[valueIndex].active = true;
        this.setState(attributes);
    }

    handleResize () {
        this.setState({windowWidth: window.innerWidth});
    }

    componentDidMount () {
        window.addEventListener('resize', this.handleResize);
    }

    componentWillUnmount () {
        window.removeEventListener('resize', this.handleResize);
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
            'Affordability', 'Space', 'Stability', 'Decent conditions', 'Neighbourhood'
        ];

        return (
            <article className={`dimension dimension--${this.props.slug || this.props.name.split(' ')[0].toLowerCase()}`}>
                {this.props.slug === 'lhs' &&
                <Grid>
                    <p className="dimension-strapline hidden-md hidden-lg">
                        <span className="dimension-strapline__img">
                            <span className="sr-only">{Math.round(this.props.fail)}%</span></span> of
                            all homes do not meet the Living Home Standard</p>
                    <Row>
                        <Col md={6}>
                            <h1 className="dimension-title">{this.props.name}</h1>
                            <section className="dimension-section">{this.props.intro}</section>
                        </Col>
                        <Col md={6} className="hidden-xs hidden-sm">
                            <img className="dimension-stat"
                                src="/livinghomestandard/assets/img/lhs-house-home-stat.svg"/>
                        </Col>
                    </Row>
                </Grid>}

                {this.props.slug !== 'lhs' &&
                <Grid>
                    <p className="dimension-strapline hidden-md hidden-lg">
                        <span className="dimension-strapline__img">
                            <span className="sr-only">{Math.round(this.props.fail)}%</span></span> of
                            all homes do not meet the {this.props.name.toLowerCase()} Living Home Standard</p>
                    <Row>
                        <Col md={6}>
                            <h1 className="dimension-title">{this.props.name}</h1>
                            <section className="dimension-section">{this.props.intro}</section>
                        </Col>
                        <Col md={6} className="hidden-xs hidden-sm">
                            <img className="img-responsive dimension-stat"
                                src={`/livinghomestandard/assets/img/lhs-house-${this.props.name.split(' ')[0].toLowerCase()}-stat.svg`}/>
                        </Col>
                    </Row>
                </Grid>}

                {this.props.slug === 'lhs' &&
                <Grid>
                    <Row>
                        <Col md={1}/>
                        <Col md={10}>
                            <p className="embed-responsive embed-responsive-16by9">
                                <iframe className="embed-responsive-item" src="https://www.youtube.com/embed/gLOYcuNfkJ8"></iframe>
                            </p>
                        </Col>
                        <Col md={1}/>
                    </Row>
                    <div className="dimension-explore">
                        <p>The Living Home Standard is made up of five dimensions:</p>
                        <ul className="list-unstyled">
                            {dimensions.map((dimension, i) => {
                                let slug = dimension.split(' ')[0].toLowerCase();
                                return (
                                    <Link key={i} to={`${URLS.baseUrl}/${slug}`}
                                        className={`btn btn-primary btn--${slug}`}>
                                        {dimension}</Link>
                                );
                            })}
                        </ul>
                    </div>
                </Grid>}

                {this.props.criteria &&
                <div className="dimension-criteria">
                    <Grid className="container--wide">
                        <Accordion>
                            <Panel header={this.panelHeading('Essential Criteria')}
                                className="panel--arrows col-md-6 col-lg-6" eventKey={1}>
                                <ol className="list-unstyled">
                                    {this.props.criteria.essential.map((criteria, i) => (
                                        <li key={i} className="point">{criteria}</li>
                                    ))}
                                </ol>
                            </Panel>
                            <Panel header={this.panelHeading('Tradable Criteria')}
                                className="panel--arrows col-md-6 col-lg-6"
                                    eventKey={this.state.windowWidth >= 992 ? 1 : 2}>
                                <ol className="list-unstyled">
                                    {this.props.criteria.tradeable.map((criteria, i) => (
                                        <li key={i} className={i === 0 ? 'title' : 'point'}>{criteria}</li>
                                    ))}
                                </ol>
                            </Panel>
                        </Accordion>
                    </Grid>
                </div>}

                <div className="dimension-infographic clearfix">
                    <Grid>
                        <img src={`/livinghomestandard/assets/img/${this.props.infographic1}`}
                            className="dimension-infographic__img img-responsive"/>
                        <img src={`/livinghomestandard/assets/img/${this.props.infographic2}`}
                            className="dimension-infographic__img img-responsive"/>
                    </Grid>
                    <Grid>
                        <a href={`/livinghomestandard/assets/pdf/${this.props.infographicLink}`} className="dimension-infographic__btn btn btn-outline">
                            Find out more about {this.props.name}
                        </a>
                    </Grid>
                </div>

                {this.props.slug === 'lhs' && this.props.fullLink &&
                <div className="dimension-downloads dimension-downloads--top">
                    <Grid className="container--wide">
                        <div>
                            <Col md={6}></Col>
                            <Col md={6}>
                                <a href={`/livinghomestandard/assets/pdf/${this.props.fullLink}`}
                                    className="btn btn-primary btn--download btn--full-width">
                                    Download the full report
                                </a>
                            </Col>
                        </div>
                    </Grid>
                </div>}

                <Grid className="container--wide">
                    <PanelGroup>
                        {this.state.attributes.map((panel, i) => (
                            <Panel key={i} header={this.panelHeading(panel.title, null, 'right')}
                                className="dimension-chart panel--dark panel--arrows"
                                eventKey={i} collapsible defaultExpanded={true}>
                                <Col md={6}>
                                    <ul className="list-unstyled">
                                        {panel.values.map((value, j) => (
                                            <li key={j}>
                                                <span className="sr-only">{value.label}</span>
                                                <ProgressBar now={Math.round(value.percent)} label={Math.round(value.percent) + '%'}
                                                    className={value.active ? 'active': ''}/>
                                            </li>
                                        ))}
                                    </ul>
                                </Col>
                                <Col md={6}>
                                    <div className="dimension-chart__buttons">
                                        <div className="dimension-chart__filter">Filter:</div>
                                        {panel.values.map((value, k) => (
                                            <button className={'btn' + (value.active ? ' active' : '')}
                                                key={k} onClick={this.handleAttrClick.bind(this, i, k)}>{value.label}</button>
                                        ))}
                                    </div>
                                </Col>
                            </Panel>
                        ))}
                    </PanelGroup>
                </Grid>

                {(this.props.fullLink || this.props.chapterLink) &&
                <div className="dimension-downloads">
                    <Grid className="container--wide">
                        {this.props.fullLink &&
                        <div>
                            {!this.props.chapterLink &&
                                <Col md={6}></Col>
                            }
                            <Col md={6}>
                                <a href={`/livinghomestandard/assets/pdf/${this.props.fullLink}`}
                                    className="btn btn-primary btn--download btn--full-width">
                                    Download the full report
                                </a>
                            </Col>
                        </div>}
                        {this.props.chapterLink &&
                        <Col md={6}>
                            <a href={`/livinghomestandard/assets/pdf/${this.props.chapterLink}`}
                                className="btn btn-secondary btn--download btn--full-width">
                                Download the {this.props.name.toLowerCase()} chapter
                            </a>
                        </Col>}
                    </Grid>
                </div>}

                <Grid>
                    <section className="dimension-section">{this.props.caseStudy}</section>
                </Grid>

                {this.props.extra &&
                <section className="dimension-section">{this.props.extra}</section>}

                {this.props.recommends &&
                <section className="dimension-recommends">
                    <Grid>
                        <h3 className="dimension-recommends__title">Shelter recommends</h3>
                        {this.props.recommends}
                        <p><a href="/livinghomestandard/assets/pdf/lhs_shelter_recommends.pdf" className="read-more">Read more</a></p>
                    </Grid>
                </section>}

                {this.props.digest &&
                <section className="dimension-digest">
                    <Grid>
                        <strong>Digest from:</strong>
                        {this.props.digest}
                    </Grid>
                </section>}

                {this.props.slug !== 'lhs' &&
                <div className="dimension-section dimension-explore dimension-explore--footer">
                    <Grid>
                        <h4 className="dimension-explore__title">Explore the Living Home Standard's other dimensions</h4>
                        <ul className="list-unstyled">
                            {dimensions.map((dimension, i) => {
                                if (dimension.toLowerCase() !== this.props.name.toLowerCase()) {
                                    let slug = dimension.split(' ')[0].toLowerCase();
                                    return (
                                        <Link key={i} to={`${URLS.baseUrl}/${slug}`}
                                            className={`btn btn-primary btn--${slug}`}>
                                            {dimension}</Link>
                                    );
                                }
                            })}
                        </ul>
                    </Grid>
                </div>}
            </article>
        );
    }

}
