import React, {Component} from 'react';
import {Col, Row} from 'antd';
import Header from './components/Header';
import LeftBar from './components/LeftBar';
import MapComponent from './components/Map';
import RightComponent from './components/RightBar';
import LoadingComponent from './loader';
import axios from 'axios';
import 'antd/dist/antd.css';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: false,
            result: {
                confirmed: '',
                payload: [],
                death: '',
                recovere: ''
            }
        }
    }

    componentDidMount() {
        axios
            .get('http://127.0.0.1:5000/getInitialData')
            .then(res => {
                this.setState({
                    result: res.data,
                    isLoading: true
                })
            })
            .catch(err => {
                console.log('---- error ---', err)
            });
    }

    render() {

        if (this.state.isLoading) {
            // const confirmedCountry = this.state.result.payload.filter(item => item.split(' ').length == 2 );

            const confirmedCountry = this.state.result.payload.filter((item,index) => {
                if((item.indexOf('deaths') < 0) && (item.indexOf('recovered') < 0) && (item.indexOf('confirmed') < 0)){
                    return true;
                }
                return false;
            });

            const totatDeaths = this.state.result.payload.filter(item => (item.indexOf('deaths') > -1));
            const totalRecovered = this.state.result.payload.filter(item => (item.indexOf('recovered') > -1));
            // console.log('---- death ---', totatDeaths)
            // console.log('---- recovered ----', totalRecovered);
            return (
                <div className="App">
                    <Col span={24}>
                        <Header/>
                    </Col>
                    <Row>
                        <Col span={4}>
                            <LeftBar confirmed={this.state.result.confirmed} data={confirmedCountry}/>
                        </Col>
                        <Col span={13}>
                            <MapComponent/>
                        </Col>
                        <Col span={7}>
                            <RightComponent
                                totalDeaths={totatDeaths}
                                totalRecovered={totalRecovered}
                                deaths={this.state.result.death}
                                recovered={this.state.result.recovere}
                            />
                        </Col>
                    </Row>
                </div>
            );
        }

        return <LoadingComponent/>;

    }
}


export default App;
