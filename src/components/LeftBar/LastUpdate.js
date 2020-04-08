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
                <h3 className='title'>{this.props.lastUpdated}</h3>
            </div>
        )
    }
}

export default LastUpdate;
