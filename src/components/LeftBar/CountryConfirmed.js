import React, {Component} from 'react';
import {LeftOutlined, RightOutlined} from '@ant-design/icons';
import './index.css';

class CountryConfirmed extends Component {
    constructor(props) {
        super(props);
    }

    renderCountry = () => {
        console.log('--- confirmed country ----', this.props.data);
        return this.props.data.map(item => {
            return (
                <>
                    <div>
                        <h3 className='country-detail'><b className='country-total'></b> <span
                            className='country-name'>{item}</span></h3>
                    </div>
                    <hr/>
                </>
            )
        })
    };

    render() {
        return (
            <div className='main'>
                <h4 className='title'>Confirmed Cases by Country/Region/Sovereignty</h4>
                <div className='country-list'>
                    {this.renderCountry()}
                </div>
                <div className='title'>
                    <LeftOutlined style={{float: 'left', marginLeft: 5}}/>
                    Admin 1
                    <RightOutlined style={{float: 'right', marginRight: 5}}/>
                </div>
            </div>
        )
    }
}

export default CountryConfirmed;
