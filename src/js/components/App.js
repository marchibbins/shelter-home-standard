import React from 'react';

export default class App extends React.Component {

    render () {
        return (
            <main>
                <h1>Home standard</h1>
                {this.props.children}
            </main>
        );
    }

}
