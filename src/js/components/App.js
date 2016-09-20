import React from 'react';
import { Link } from 'react-router';

export default class App extends React.Component {

    render () {
        return (
            <main>
                <h1>Home standard</h1>
                <nav>
                    <Link to='/'>Home</Link>
                        <br/>
                    <Link to='/affordability'>Affordability</Link>
                        <br/>
                    <Link to='/decency'>Decency</Link>
                        <br/>
                    <Link to='/neighbourhood'>Neighbourhood</Link>
                        <br/>
                    <Link to='/space'>Space</Link>
                        <br/>
                    <Link to='/stability'>Stability</Link>
                </nav>
                {this.props.children}
            </main>
        );
    }

}
