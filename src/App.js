import React, { Component } from 'react';
import Kid from './Components/Kid';
import Teacher from './Components/Teacher';
import Judge from './Components/Judge';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            volume : null,
            furtherSteps: [],
            emotion: null,
            unMountKid : false,
            judgeLeave: false
         };
    }

    ComponentWillMount(){
        this.setState({
            volume : 5,
        })
    }
    
    judgeLeave(boolean){
        console.log(boolean)
        this.setState({
            judgeLeave : boolean
        })
    }

    sendDataToKid() {
        this.setState({
            furtherSteps : ['step3', 'step4', 'step5']
        })
    }

    applaud() {
        this.setState({
            emotion : 'happy',
        })
        //Send this applaud status to Kid.js
    }


    

    render() {
        const {unMountKid} = this.state;

        return (
            <div>
                {!unMountKid &&<Kid dressColor={'Teal'} furtherSteps={this.state.furtherSteps} emotion={this.state.emotion} />}
                <Teacher sendDataToKid={this.sendDataToKid.bind(this)}/> 
                <Judge judgesApplaud={this.applaud.bind(this)}/>


                <button className="btn btn-success" onClick={() => this.setState({unMountKid : true})}>Ask the Kid to Leave the Show</button>
            </div>
        );
    }
}

export default App;