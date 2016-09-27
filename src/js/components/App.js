import React from 'react';
import { Grid } from 'react-bootstrap';

import Header from './Header';

export default class App extends React.Component {

    render () {
        return (
            <Grid>
                <Header/>
                <main>
                    {this.props.children}
                </main>
            </Grid>
        );
    }

}
