import React from 'react';

export default class Teacher extends React.Component {
    sendDataToKid() {
        const furtherSteps = ['step3', 'step4', 'step5']
        //Send this data to Kid.js
    }
    render() {
        return (
            <button className="btn btn-outline-danger" onClick={this.sendDataToKid}>Get Help From Teacher</button>
        );
    }
}