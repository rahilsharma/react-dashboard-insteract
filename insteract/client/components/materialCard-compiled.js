'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _redboxReact2 = require('redbox-react');

var _redboxReact3 = _interopRequireDefault(_redboxReact2);

var _reactTransformCatchErrors3 = require('react-transform-catch-errors');

var _reactTransformCatchErrors4 = _interopRequireDefault(_reactTransformCatchErrors3);

var _react2 = require('react');

var _react3 = _interopRequireDefault(_react2);

var _reactTransformHmr3 = require('react-transform-hmr');

var _reactTransformHmr4 = _interopRequireDefault(_reactTransformHmr3);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _components = {
    _component: {}
};

var _reactTransformHmr2 = (0, _reactTransformHmr4.default)({
    filename: 'C:/Users/Rahil/WebstormProjects/insteract/insteract/client/components/materialCard.js',
    components: _components,
    locals: [module],
    imports: [_react3.default]
});

var _reactTransformCatchErrors2 = (0, _reactTransformCatchErrors4.default)({
    filename: 'C:/Users/Rahil/WebstormProjects/insteract/insteract/client/components/materialCard.js',
    components: _components,
    locals: [],
    imports: [_react3.default, _redboxReact3.default]
});

function _wrapComponent(id) {
    return function (Component) {
        return _reactTransformHmr2(_reactTransformCatchErrors2(Component, id), id);
    };
} /**
   * Created by Rahil on 20-10-2016.
   */


var ReactHighcharts = require('react-highcharts');
var config = {
    xAxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    },
    series: [{
        data: [29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 295.6, 454.4]
    }],
    chart: {
        backgroundColor: '#039eb2',
        height: 300,
        polar: true,
        type: 'line',
        style: {
            fontFamily: 'Roboto'

        }
    },
    title: _defineProperty({
        text: 'Records', color: 'white', fontFamily: 'Roboto'
    }, 'color', "white"),
    subtitle: _defineProperty({
        text: 'Oct 2016 - Nov 2016', color: 'white', fontFamily: 'Roboto'
    }, 'color', "white")
};
var CardExampleWithAvatar = _wrapComponent('_component')(_react3.default.createClass({
    displayName: 'CardExampleWithAvatar',
    render: function render() {
        return _react3.default.createElement(
            'div',
            { className: 'row', style: { paddingTop: '5px' } },
            _react3.default.createElement(
                'div',
                { className: 'col-xs-12 text-center' },
                _react3.default.createElement(
                    'div',
                    { style: { height: '300px', width: '100%' } },
                    _react3.default.createElement('div', { id: 'test' })
                )
            )
        );
    },

    componentDidMount: function componentDidMount() {
        _reactDom2.default.render(_react3.default.createElement(ReactHighcharts, { config: config }), document.getElementById('test'));
    }

}));

exports.default = CardExampleWithAvatar;

//# sourceMappingURL=materialCard-compiled.js.map