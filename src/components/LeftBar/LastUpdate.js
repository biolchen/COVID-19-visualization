import React, {Component} from 'react';
import './index.css';

class LastUpdate extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className='main'>
                <h5 className='title'>Last update at (M/D/YYYY)</h5>
                <h3 className='title'>3/28/2020, 9:21:05 PM</h3>
            </div>
        )
    }
}

export default LastUpdate;
