/**
 * Created by Rahil on 20-10-2016.
 */
import React from 'react';
import ReactDOM from 'react-dom';
const ReactHighcharts = require('react-highcharts');
var config = {
    xAxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    },
    series: [{
        data: [29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 295.6, 454.4]
    }],
    chart: {
        backgroundColor: '#039eb2',
        height:300,
        polar: true,
        type: 'line',
        style: {
            fontFamily: 'Roboto',

        }
    },
    title:{
        text:'Records',color:'white',fontFamily: 'Roboto',
        color: "white"
    },
    subtitle:{
        text:'Oct 2016 - Nov 2016',color:'white',fontFamily: 'Roboto',
        color: "white"
    },
};
const CardExampleWithAvatar = React.createClass({
    render(){
        return (

                <div className="row" style={{paddingTop:'5px'}}>
                    <div className="col-xs-12 text-center" >
                        <div style={{height: '300px', width: '100%'}}>
                            <div id="test"></div>
                        </div>
                    </div>
                </div>

        )
    },
    componentDidMount: function () {
        ReactDOM.render(React.createElement(ReactHighcharts, {config: config}), document.getElementById('test'));
    }

});

export default CardExampleWithAvatar;