import React from 'react';
import { Accordion, Panel, ProgressBar } from 'react-bootstrap';

export default class Affordability extends React.Component {

    render () {
        return (
            <article>
                <h2>Affordability</h2>
                <Accordion defaultActiveKey={1}>
                    <Panel header="Income" eventKey={1}>
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
                    <Panel header="Tenure" eventKey={2}>
                        Lorem ipsum
                    </Panel>
                    <Panel header="Household" eventKey={3}>
                        Lorem ipsum
                    </Panel>
                </Accordion>
            </article>
        );
    }

}
