import React, { Component } from 'react';

export default class Judge extends React.Component {
    constructor() {
        super();
        this.state = { stars: 0, available: false }
    }

    applaud() {
        //Send this applaud status to Kid.js
    }

    provideStars() {
        let { stars } = this.state;

        this.setState({ stars: ++stars })
    }

    render() {
        const { stars, available } = this.state;

        return (
            <div>
                <button className="btn btn-outline-success" type="button" onChange={this.applaud}>
                    Appreciate performance
           </button>
                <button className="btn btn-outline-warning" type="button" onChange={this.provideStars}>
                    Provide stars
       </button>

                Kid is available: {available}

                Stars gained: {stars}
            </div>
        );
    }
}
