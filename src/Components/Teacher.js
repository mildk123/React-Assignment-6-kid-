import React from 'react';

export default class Teacher extends React.Component {


    render() {
        const {sendDataToKid} = this.props;
        return (
            <button className="btn btn-outline-danger" onClick={sendDataToKid}>Get Help From Teacher</button>
        );
    }
}