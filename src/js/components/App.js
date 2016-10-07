import React from 'react';
import { Grid } from 'react-bootstrap';

import Header from './Header';
import Footer from './Footer';

export default class App extends React.Component {

    render () {
        return (
            <div>
                <Header/>
                <Grid>
                    <main>
                        {this.props.children}
                    </main>
                </Grid>
                <Footer/>
            </div>
        );
    }

}
