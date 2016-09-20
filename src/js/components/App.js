import React from 'react';

import Header from './Header';

export default class App extends React.Component {

    render () {
        return (
            <div>
                <Header/>
                <main>
                    <h1>Home standard</h1>
                    {this.props.children}
                </main>
            </div>
        );
    }

}
