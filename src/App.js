import React, { Component } from 'react';
import Kid from './Components/Kid/Kid';
import Teacher from './Components/Teacher/Teacher';
import Judge from './Components/Judge/Judge';

class App extends Component {
    constructor(props) {

        super(props);
        this.state = {
            furtherSteps: [],
            emotion: null,
            unMountKid: false,
            judgeLeave: false,
            kidQualified: false,
            showLeaveBtn: false,
        };

    }

    static getDerivedStateFromProps() {

        return {
            volume: 5,
        }

    }


    judgeLeave() {
        this.setState({
            judgeLeave: true
        })
    }

    updateSteps(furtherSteps) {
        this.setState({
            furtherSteps: furtherSteps
        })

    }

    emotionUpdate() {
        this.setState({
            emotion: 'happy',
        })
        //Send this applaud status to Kid.js
    }


    endPerformnce() {
        this.setState({
            kidQualified: true,
            showLeaveBtn: true
        })

    }





    render() {
        const { unMountKid, judgeLeave, showLeaveBtn } = this.state;

        if (judgeLeave) {
            return <div></div>
        }

        return (
            <div>
                {!unMountKid && <Kid
                    dressColor={'turquoise'}
                    furtherSteps={this.state.furtherSteps}
                    emotion={this.state.emotion}
                    kidQualified={this.state.kidQualified}
                    judgeLeave={() => this.judgeLeave()}
                    volume={this.state.volume}
                />}
                <hr />
                <Teacher
                    updateSteps={(furtherSteps) => this.updateSteps(furtherSteps)} />

                <hr />

                <Judge
                    emotionUpdate={this.emotionUpdate.bind(this)}
                    endPerformnce={() => this.endPerformnce()}
                />


                <hr />
                {showLeaveBtn && <button className="btn badge-danger offset-6 " onClick={() => this.setState({ unMountKid: true })}>| X | Leave</button>}
            </div>


        );
    }
}

export default App;