import React, {Component} from 'react';
import './index.css';

class Map extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className='main-map'>
                <h1 className='map-header'>World Map</h1>
            </div>
        )
    }
}
export default Map;
