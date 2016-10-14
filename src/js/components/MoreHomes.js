import React from 'react';
import { Grid } from 'react-bootstrap';

import { URLS } from '../config';

export default class MoreHomes extends React.Component {

    render () {
        return (
            <div className="dimension-morehomes">
                <Grid>
                    <h3>How have house prices changed in your lifetime?</h3>
                    <p><a className="btn btn-primary" href={URLS.morehomes}>Find out here</a></p>
                </Grid>
            </div>
        );
    }

}
