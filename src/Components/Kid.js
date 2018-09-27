import React, { Component } from 'react';

export default class Kid extends Component {
    constructor(props) {
        super(props);
        this.state = {
            emotion: props.applaud || 'nervous',
            danceSteps: [],
            currentStepIndex: 0,
            startedPerforming: false,
            qualified : this.props.qualified,
        };

    }

    qualified() {
        this.setState({
            startedPerforming: false
        })
    }

    componentDidMount() {
        this.setState({
            danceSteps: ['step1', 'step2']
        })
    }

    componentWillReceiveProps(nextProps) {
        const furtherStepsVar = nextProps.furtherSteps        
        if (nextProps.furtherSteps !== this.props.furtherSteps) {
            this.setState({
                danceSteps: [...this.state.danceSteps, ...furtherStepsVar],
            })
        }
        else if(nextProps.qualified !== this.props.qualified){
            this.setState({
                startedPerforming: !nextProps.qualified
            })
        }
        else if (nextProps.emotion === 'happy') {
            this.setState({ emotion: nextProps.emotion, })
        }
    }



    //  furtherStepsVar was overwriting danceSteps State..
    //  since `this` is not available in below method..
    // ---------------------------------------------------------------
    // static getDerivedStateFromProps()(nextProps) {
    //     const furtherStepsVar = nextProps.furtherSteps
    //     if (furtherStepsVar.length != 0) {
    //         return {
    //             danceSteps : [...this.state.danceSteps , furtherStepsVar]
    //         }
    //     }
    //     return null
    // }

    componentWillUnmount() {
        this.props.judgeLeave(true)
    }

    render() {
        const { dressColor } = this.props;
        const { danceSteps, emotion, startedPerforming } = this.state;
        let { currentStepIndex } = this.state;

        return (
            <div>
                <div> <strong>Dress Color:</strong> {dressColor}</div>
                <div style={{ backgroundColor: dressColor, width: 50, height: 50, borderRadius: 25 }}></div>
                <div> <strong>Emotion:</strong> {emotion}</div>
                <button className="btn btn-dark" onClick={() => this.setState({ startedPerforming: true })}>Start Performance</button>
                {
                    startedPerforming &&
                    <div>
                        Current Step: {danceSteps[currentStepIndex]}
                        <button onClick={() => this.setState({ currentStepIndex: ++currentStepIndex })}>Perform Next Step</button>
                    </div>
                }
            </div>

        );
    }
}


Kid.defaultProps = {
    dressColor: 'red',
    applaud: false,
    furtherSteps: []
};