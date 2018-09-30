// import React from 'react';

// export default class Teacher extends React.Component {


//     render() {
//         const { sendDataToKid } = this.props;
//         return (
//             <div>
//                 <h1 className="display-4">~ Teacher</h1>
//                 <button className="btn btn-outline-danger" onClick={sendDataToKid}>Get Help From Teacher</button>
//             </div>
//         );
//     }
// }

import React, { Component } from 'react';

export default class Teacher extends Component {
    sendDataToKid() {
        const furtherSteps = ['step3', 'step4', 'step5']
        //Send this data to Kid.js
        this.props.updateSteps(furtherSteps)

    }

    render() {
        return (
            <div>
                <h1 className="display-4 offset-3">~ Teacher</h1>
            <button onClick={this.sendDataToKid.bind(this)} className="btn btn-outline-warning offset-7">Get Help From Teacher</button>
            </div>
        );
    }
}
