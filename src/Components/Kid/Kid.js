import React, { Component } from 'react';

export default class Kid extends Component {
    constructor(props) {
        super(props);
        this.state = {
            emotion: 'nervous',
            currentStepIndex: 0,
            startPerforming: false,
            kidQualified: false,
        };

    }

    componentDidUpdate(props, prevState) {
        if (this.props.kidQualified != props.kidQualified) {
            this.setState({
                startPerforming: false
            })
        }
    }


    componentDidMount() {
        setTimeout(() => {
            this.setState({
                danceSteps: ['step1', 'step2']
            })

        }, 100)
    }


    static getDerivedStateFromProps(nextProps, prevState) {
        const newSteps = nextProps.furtherSteps;
        const oldSteps = prevState.danceSteps;

        if (newSteps.length > 2 && oldSteps.length < 5) {
            return {
                danceSteps: [...oldSteps, ...newSteps],
                startPerforming: true
            }

        } else if (nextProps.emotion) {
            return {
                emotion: 'Happy :)'
            }
        }

        return true
    }

    componentWillUnmount() {
        this.props.judgeLeave()
    }

    render() {
        const { dressColor, volume } = this.props;
        const { danceSteps, emotion, startPerforming } = this.state;
        let { currentStepIndex } = this.state;

        return (
            <div>
                <h1 className="display-4 offset-3">~ Kid</h1>
                
                <div className="offset-4">
                    <strong>Dress Color:</strong> {dressColor}
                </div>
                
               
                <div className="offset-4">
                    <strong>Emotion:</strong> {emotion}
                </div>

                <div className="offset-4">
                    <strong>Volume:</strong> {volume}
                </div>

                <div className="offset-7" style={{ backgroundColor: dressColor, width: 200, height: 100, borderRadius: 15 }}></div>

                {startPerforming &&
                    <div>
                    <button className="btn btn-info offset-4" onClick={() => this.setState({ currentStepIndex: ++currentStepIndex })}>Perform Next Step</button>
                        <span className="bg-badge-light offset-2 ">Current Step: |{danceSteps[currentStepIndex]}|</span>
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