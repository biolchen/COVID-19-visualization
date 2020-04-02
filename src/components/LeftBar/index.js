import React, {Component} from 'react';
import TotalConfirmed from './TotalConfirmed';
import CountryConfirmed from './CountryConfirmed';
import LastUpdate from './LastUpdate';

class Index extends Component{
    constructor(props){
        super(props);
    }

    render() {
        return(
            <div>
                <TotalConfirmed {...this.props}/>
                <CountryConfirmed {...this.props}/>
                <LastUpdate/>
            </div>
        )
    }
}

export default Index;
