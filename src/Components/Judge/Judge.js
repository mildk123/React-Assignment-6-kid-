import React, { Component } from 'react';

export default class Judge extends Component {
    constructor() {
        super();
        this.state = {
            stars: 0,
            available: false
        }
    }


    applaud() {
        this.props.emotionUpdate();
    }


    shouldComponentUpdate(nextProps, nextState) {
        if (nextState.stars <= 5) {
            return true
        }
        return false
    }

    provideStars() {
        let { stars } = this.state;
        this.setState({
            stars: ++stars
        })

        if (this.state.stars >= 4) {
            this.props.endPerformnce()
        }

    }

    render() {
        const { stars, available } = this.state;

        return (
            <div>
                <h1 className="display-4 offset-3">~ Judge</h1>
                <button className="btn badge-pill badge-dark offset-6" type="button" onClick={this.applaud.bind(this)}>
                    Appreciate performance
                </button>
                <button className="btn badge-pill badge-info" type="button" onClick={this.provideStars.bind(this)}>
                    Provide stars
       </button>
                <br />
                <br />
                <div className="offset-5"> Kid is available: {available}

                    Stars gained: {stars}
                </div>
            </div>
        );
    }
}
