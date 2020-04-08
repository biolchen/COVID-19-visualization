import React, {Component} from 'react';
import {LeftOutlined, RightOutlined} from '@ant-design/icons';
import './index.css';

class CountryConfirmed extends Component {
    constructor(props) {
        super(props);
        this.state = {
            panel: 1,
            data: this.props.data
        }
    }

    findSpaceIndex = text => {
        const pattern = /^[A-Za-z]+$/;
        for (var i = 0; i < text.length; i++) {
            if (text[i].match(pattern)) {
                return i;
            }
        }
    };

    handlerCountry = country_name => {
        this.props.handlerCountry(country_name.substring(0, this.findSpaceIndex(country_name)) ,country_name.substring(this.findSpaceIndex(country_name)));
    };

    renderCountry = () => {
        return this.state.data.map(item => {
            return (
                <>
                    <div>
                        <h3 onClick={e => this.state.panel == 1 ? this.handlerCountry(item) : null} className='country-detail'>
                            <b className='country-total'>{item.substring(0, this.findSpaceIndex(item) - 1)}</b> <span
                            className='country-name'>{item.substring(this.findSpaceIndex(item))}</span></h3>
                    </div>
                    <hr/>
                </>
            )
        })
    };

    renderTitle = () => {
        if (this.state.panel == 1) {
            return (
                <h4 className='title'>
                    Confirmed Cases by Country/Region/Sovereignty
                </h4>
            )
        } else if (this.state.panel == 2) {
            return (
                <h4 className='title'>
                    Confirmed Cases by Province/State/Dependency
                </h4>
            )
        } else {
            return (
                <h4 className='title'>
                    Confirmed Cases by US County
                </h4>
            )
        }
    };

    handlerPanelIncrease = () => {
        let filerData = [];
        if (this.state.panel == 1) {
            filerData = this.props.payload.filter(item => (item.indexOf(this.props.selectedCountry) > -1) &&
                (item.indexOf('confirmed') > -1));

        }else if(this.state.panel == 2){
            filerData = this.props.payload.filter(item => (item.indexOf('US') > -1) &&
                (item.indexOf('confirmed') > -1));
        }else {
            filerData = this.props.data;
        }
        this.setState(preState => ({
            panel: preState.panel < 3 ? Number(preState.panel + 1) : preState.panel,
            data: filerData
        }))
    }

    handlerPanelDecrease = () => {
        let filerData = [];
        if (this.state.panel == 3) {
            filerData = this.props.payload.filter(item => (item.indexOf(this.props.selectedCountry) > -1) &&
                (item.indexOf('confirmed') > -1));

        }else if(this.state.panel == 2){
            filerData = this.props.data;
        }else {
            filerData = this.props.payload.filter(item => (item.indexOf('US') > -1) &&
                (item.indexOf('confirmed') > -1));
        }
        this.setState(preState => ({
            panel: preState.panel > 1 ? Number(preState.panel - 1) : preState.panel,
            data: filerData
        }))
    }

    render() {
        return (
            <div className='main main-confirmedCountry'>
                {this.renderTitle()}
                <div className='country-list'>
                    {this.renderCountry()}
                </div>
                <div className='title'>
                    <LeftOutlined onClick={e => this.handlerPanelDecrease()} style={{float: 'left', marginLeft: 5}}/>
                    Admin {this.state.panel}
                    <RightOutlined onClick={e => this.handlerPanelIncrease()} style={{float: 'right', marginRight: 5}}/>
                </div>
            </div>
        )
    }
}

export default CountryConfirmed;
