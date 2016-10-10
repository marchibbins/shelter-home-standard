import React from 'react';
import { Accordion, Col, Grid, Row, Panel, PanelGroup, ProgressBar } from 'react-bootstrap';
import { Link } from 'react-router';

export default class Base extends React.Component {

    constructor (props) {
        super(props);
        this.state = {
            attributes: this.props.attributes,
            windowWidth: window.innerWidth
        };
    }

    handleAttrClick (objIndex, valueIndex, event) {
        event.preventDefault();
        let attributes = this.state.attributes,
            attr = attributes[objIndex].values[valueIndex];
        attr.active = attr.active === true ? false : true;
        this.setState(attributes);
    }

    handleResize () {
        this.setState({windowWidth: window.innerWidth});
    }

    componentDidMount () {
        window.addEventListener('resize', this.handleResize.bind(this));
    }

    componentWillUnmount () {
        window.removeEventListener('resize', this.handleResize.bind(this));
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
            'Affordability', 'Stability', 'Neighbourhood', 'Security', 'Decent conditions'
        ];

        return (
            <article className={`dimension dimension--${this.props.slug || this.props.name.split(' ')[0].toLowerCase()}`}>
                <Grid>
                    {this.props.fail &&
                    <p className="dimension-strapline hidden-md hidden-lg">
                        <span className="dimension-strapline__img">
                            <span className="sr-only">{this.props.fail}%</span></span> of
                        all homes do not meet the {this.props.name.toLowerCase()} Living Home Standard</p>}
                    <Row>
                        <Col md={6}>
                            <h1 className="dimension-title">{this.props.name}</h1>
                            <section className="dimension-section">{this.props.intro}</section>
                        </Col>
                        <Col md={6} className="hidden-xs hidden-sm">
                            <img className="dimension-stat"
                                src={`/dist/img/${this.props.name.split(' ')[0].toLowerCase()}-full-stat.jpg`}/>
                        </Col>
                    </Row>
                </Grid>

                {this.props.criteria &&
                <div className="dimension-criteria">
                    <Grid className="container--wide">
                        <Accordion>
                            <Panel header={this.panelHeading('Essential Criteria', 'Lorem ipsum dolor sit amet')}
                                className="panel--arrows col-md-6 col-lg-6" eventKey={1}>
                                <ol className="list-unstyled">
                                    {this.props.criteria.essential.map((criteria, i) => (
                                        <li key={i}>{criteria}</li>
                                    ))}
                                </ol>
                            </Panel>
                            <Panel header={this.panelHeading('Tradeable Criteria', 'Lorem ipsum dolor sit amet')}
                                className="panel--arrows col-md-6 col-lg-6"
                                    eventKey={this.state.windowWidth >= 992 ? 1 : 2}>
                                <ol className="list-unstyled">
                                    {this.props.criteria.tradeable.map((criteria, i) => (
                                        <li key={i}>{criteria}</li>
                                    ))}
                                </ol>
                            </Panel>
                        </Accordion>
                    </Grid>
                </div>}

                {!this.props.criteria &&
                <Grid>
                    <div className="dimension-explore">
                        <ul className="list-unstyled">
                            {dimensions.map((dimension, i) => {
                                let slug = dimension.split(' ')[0].toLowerCase();
                                return (
                                    <Link key={i} to={`/${dimension.toLowerCase()}`}
                                        className={`btn btn-primary btn--${slug}`}>
                                        {dimension}</Link>
                                );
                            })}
                        </ul>
                    </div>
                </Grid>}

                <div className="dimension-infographic">
                    <img src="/dist/img/infographic1.jpg"
                        className="dimension-infographic__img img-responsive"/>
                    <img src="/dist/img/infographic2.jpg"
                        className="dimension-infographic__img img-responsive"/>
                    <button className="dimension-infographic__btn btn btn-outline">
                        Infographic on {this.props.name.toLowerCase()}
                        <span className="dimension-infographic__btn-small">Lorem ipsum dolor sit amet</span>
                    </button>
                </div>

                <Grid>
                    <section className="dimension-section">{this.props.info}</section>
                </Grid>

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
                                                <ProgressBar now={value.percent} label={value.percent + '%'}
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
                        <Col md={6}>
                            <a href={this.props.fullLink}
                                className="btn btn-primary btn--download btn--full-width">
                                Download the full report
                            </a>
                        </Col>}
                        {this.props.chapterLink &&
                        <Col md={6}>
                            <a href={this.props.chapterLink}
                                className="btn btn-secondary btn--download btn--full-width">
                                Download the {this.props.name.toLowerCase()} chapter
                            </a>
                        </Col>}
                    </Grid>
                </div>}

                <Grid>
                    <section className="dimension-section">{this.props.caseStudy}</section>
                </Grid>

                <section className="dimension-recommends">
                    <Grid>
                        <h3 className="dimension-recommends__title">Shelter recommends</h3>
                        {this.props.recommends}
                        <p><a href={this.props.recommendsLink} className="read-more">Read more</a></p>
                    </Grid>
                </section>

                <div className="dimension-section dimension-explore">
                    <Grid>
                        <h4 className="dimension-explore__title">Explore other dimensions</h4>
                        <ul className="list-unstyled">
                            {dimensions.map((dimension, i) => {
                                if (dimension.toLowerCase() !== this.props.name.toLowerCase()) {
                                    let slug = dimension.split(' ')[0].toLowerCase();
                                    return (
                                        <Link key={i} to={`/${dimension.toLowerCase()}`}
                                            className={`btn btn-primary btn--${slug}`}>
                                            {dimension}</Link>
                                    );
                                }
                            })}
                        </ul>
                    </Grid>
                </div>
            </article>
        );
    }

}
