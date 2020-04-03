import React, {Component} from 'react';
import {Row, Col} from 'antd';
import './index.css';

class MapFooter extends Component{
    constructor(props){
        super(props);
    }

    render() {
        return(
            <Row>
                <Col span={4}>
                    <div className='outer-main'>
                        <h1 style={{color: 'white', textAlign:'center'}}><b>177</b></h1>
                        <p style={{textAlign:'center', marginTop: -5, fontSize:12}}> countries/regions </p>
                    </div>
                </Col>
                <Col span={20}>
                    <div className='outer-main'>
                        <p className='overall-desc'>
                            Data sources: WHO, CDC, ECDC, NHC, DXY, 1point3acres, Worldometers.info, BNO, state and national government health departments, and local media reports. 
                        </p>
                    </div>
                </Col>
            </Row>
        )
    }
}

export default MapFooter;
