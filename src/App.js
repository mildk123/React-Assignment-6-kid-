import React, { Component } from 'react';
import Kid from './Components/Kid';
import Teacher from './Components/Teacher';
import Judge from './Components/Judge';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            volume : null,
         };
    }

    ComponentWillMount(){
        this.setState({
            volume : 5,
        })
    }


    render() {
        return (
            <div>
                <Kid dressColor={'Teal'}/>
                <Teacher /> 
                <Judge />
            </div>
        );
    }
}

export default App;