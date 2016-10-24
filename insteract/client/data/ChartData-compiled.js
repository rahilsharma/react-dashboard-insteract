'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * Created by Rahil on 23-10-2016.
 */
var chartConfig = {
    xAxis: {
        categories: ['10/16/2016', '10/17/2016', '10/18/2016', '10/19/2016', '10/20/2016', '10/21/2016', '10/22/2016']
    },
    series: [{
        data: [29, 71, 106, 129, 12, 72, 199]
    }],
    chart: {
        backgroundColor: '#039eb2',
        height: 300,
        polar: false,
        type: 'line',
        style: {
            fontFamily: 'Roboto'

        }
    },
    title: _defineProperty({
        text: 'Records', color: 'white', fontFamily: 'Roboto'
    }, 'color', "white"),
    subtitle: _defineProperty({
        text: '16 Oct 2016 - 22 Nov 2016', color: 'white', fontFamily: 'Roboto'
    }, 'color', "white")
};

exports.default = chartConfig;

//# sourceMappingURL=ChartData-compiled.js.map