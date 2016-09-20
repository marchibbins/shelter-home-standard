import React from 'react';
import { Accordion, Panel } from 'react-bootstrap';

export default class Affordability extends React.Component {

    render () {
        return (
            <article>
                <h2>Affordability</h2>
                <Accordion defaultActiveKey={1}>
                    <Panel header="Income" eventKey={1}>
                        Lorem ipsum
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
