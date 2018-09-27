import React, { Component } from 'react';

export default class Judge extends Component {
    constructor() {
        super();
        this.state = {
            stars: 0,
            available: false
        }
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
        if(this.state.stars >= 4){
            this.props.trueQualified()
        }
    }

    render() {
        const { stars, available } = this.state;
        const { judgesApplaud } = this.props;

        return (
            <div>
                <button className="btn btn-outline-success" type="button" onClick={judgesApplaud}>
                    Appreciate performance
           </button>
                <button className="btn btn-outline-warning" type="button" onClick={this.provideStars.bind(this)}>
                    Provide stars
       </button>

                Kid is available: {available}

                Stars gained: {stars}
            </div>
        );
    }
}
