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
                        <h1 style={{color: 'white', textAlign:'center'}}><b>{this.props.totalRegions}</b></h1>
                        <p style={{textAlign:'center', marginTop: -5, fontSize:12}}> countries/regions </p>
                    </div>
                </Col>
                <Col span={20}>
                    <div className='outer-main'>
                        <p className='overall-desc'>
                            Author: Liang Chen
                        </p>
                    </div>
                </Col>
            </Row>
        )
    }
}

export default MapFooter;
