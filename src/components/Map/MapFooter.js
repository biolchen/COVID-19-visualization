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
                            Lancet Inf Dis Article: Here. Mobile Version: Here. Visualization: JHU CSSE. Automation Support: Esri Living Atlas team and JHU APL. Contact US. FAQ.
                            Data sources: WHO, CDC, ECDC, NHC, DXY, 1point3acres, Worldometers.info, BNO, state and national government health departments, and local media reports.  Read more in this blog.
                            Downloadable database: GitHub: Here. Feature layer: Here.
                            Confirmed cases include presumptive positive cases.
                            Recovered cases outside China are estimates based on local media reports, and may be substantially lower than the true number.
                            Active cases = total confirmed - total recovered - total deaths.
                            Point level: County level - US; Province/State level - China, Canada, Australia; Country level - other countries. All points (except for Australia) shown on the map are based on geographic centroids, and are not representative of a specific address, building or any location at a spatial scale finer than a province/state. Australian dots are located at the centroid of the largest city in each state.
                            Time Zones: lower-left corner indicator - your local time; lower-right corner plot - UTC.
                            Visit the Johns Hopkins Coronavirus Resource Center where our experts help to advance understanding of the virus, inform the public, and brief policymakers in order to guide a response, improve care, and save lives.
                            Note: All cases of COVID-19 in repatriated US citizens from the Diamond Princess are grouped together, and their location is currently designated at the ship’s port location off the coast of Japan. These individuals have been assigned to various quarantine locations (in military bases and hospitals) around the US. This grouping is consistent with the CDC.
                            *This website and its contents herein, including all data, mapping, and analysis (“Website”), copyright 2020 Johns Hopkins University, all rights reserved, is provided to the public strictly for educational and academic research purposes. The Website relies upon publicly available data from multiple sources, that do not always agree. The names of locations correspond with the official designations used by the U.S. State Department, including for Taiwan. The Johns Hopkins University hereby disclaims any and all representations and warranties with respect to the Website, including accuracy, fitness for use, and merchantability. Reliance on the Website for medical guidance or use of the Website in commerce is strictly prohibited.

                        </p>
                    </div>
                </Col>
            </Row>
        )
    }
}

export default MapFooter;
