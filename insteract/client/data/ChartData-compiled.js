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
        categories: ['Jan', 'Feb', 'Mar', 'Apr']
    },
    series: [{
        data: [29.9, 71.5, 106.4, 129.2]
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
        text: '20 Oct 2016 - 20 Nov 2016', color: 'white', fontFamily: 'Roboto'
    }, 'color', "white")
};

exports.default = chartConfig;

//# sourceMappingURL=ChartData-compiled.js.map