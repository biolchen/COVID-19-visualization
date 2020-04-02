import React, {Component} from 'react';
import './index.css';

class TotalConfirmed extends Component{
    constructor(props){
        super(props);
    }

    render() {
        return(
            <div className="main">
                <h4 className="title">Total Confirmed</h4>
                <h2 className="total-count"> {this.props.confirmed} </h2>
            </div>
        )
    }
}

export default TotalConfirmed;
