import React, {Component} from 'react';
import CanvasJSReact from '../../assets/canvasjs.react';
import './index.css'
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

class Graph extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const {graphData} = this.props;
        let data = [];
        if (graphData.length > 0) {
            data = graphData.map(item => {
                const date = new Date(item.attributes.Last_Update);
                return {
                    x: new Date(date.getFullYear(), date.getMonth() + 1, date.getDate()),
                    y: item.attributes.Confirmed
                }
            });
        }
        const options = {
            animationEnabled: true,
            title: {
                // text: "Monthly Sales - 2017"
            },
            axisX: {
                valueFormatString: "MMM"
            },
            axisY: {
                title: "Sales (in USD)",
                includeZero: false
            },
            height: 200,
            width: 420,
            theme: "dark1",
            data: [{
                yValueFormatString: "#,###",
                xValueFormatString: "DD-MMMM-YYYY",
                type: "spline",
                dataPoints: data
            }]
        };
        return (
            <div className='main' style={{height: 50, width: 400}}>
                {data.length > 0 ?
                    < CanvasJSChart options={options} className='graph-canvas'
                    />
                    : 'Loading..'
                }
            </div>
        )
    }
}

export default Graph;
