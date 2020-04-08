import React, {Component} from 'react';
import './index.css';

class InfectedDetails extends Component {
    constructor(props) {
        super(props);
    }

    renderState = () => {
        const {totalRecovered, totalDeaths, status} = this.props;
        const data = status == 'death' ? totalDeaths : totalRecovered;
        return data.map(item => (
            <>
                <div className='list-item'>
                    <h3 className={status == 'death' ? 'normal' : 'success'}>
                        <b>{item.substring(0, this.findSpaceIndex(item) -1)}</b>
                        <span style={{color:'white'}}>{' ' + item.substring(this.findSpaceIndex(item))}</span>
                    </h3>
                    {/*<p style={{marginTop: 10, padding : 5}}></p>*/}
                </div>
                <hr/>
            </>
        ))
    };

    findSpaceIndex = text => {
        const pattern = /^[A-Za-z]+$/;
        for (var i = 0; i < text.length; i++) {
            if (text[i].match(pattern)) {
                return i;
            }
        }
    };

    render() {
        const {status, totalDeaths, totalRecovered, deaths, recovered} = this.props;
        return (
            <div className='main main-infected'>
                <h4 className='title'>Total{status == 'death' ? ' Deaths' : ' Recovered'}</h4>
                <h2 className={status == 'death' ? 'total-count danger' : 'total-count success'}>{status == 'death' ? deaths : recovered}</h2>

                <div className='infected-list'>
                    {this.renderState()}
                </div>
            </div>
        )
    }
}

export default InfectedDetails;
