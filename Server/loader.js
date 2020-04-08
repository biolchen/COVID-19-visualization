import React, {Component} from 'react';
import LoaderImg from './assets/three-bar-loader.gif';
import './index.css';

class Loader extends Component{
    constructor(props){
        super(props);
    }

    render() {
        return(
            <div className='loader-main'>
                <img className='center' src={LoaderImg} alt='loading...' />
            </div>
        )
    }
}

export default Loader;
