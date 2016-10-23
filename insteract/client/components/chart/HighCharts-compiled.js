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

var _components = {
    _component: {}
};

var _reactTransformHmr2 = (0, _reactTransformHmr4.default)({
    filename: 'C:/Users/Rahil/WebstormProjects/insteract/insteract/client/components/HighCharts.js',
    components: _components,
    locals: [module],
    imports: [_react3.default]
});

var _reactTransformCatchErrors2 = (0, _reactTransformCatchErrors4.default)({
    filename: 'C:/Users/Rahil/WebstormProjects/insteract/insteract/client/components/HighCharts.js',
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

var Highcharts = _wrapComponent('_component')(_react3.default.createClass({
    displayName: 'Highcharts',
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
        var config = this.props.graphConfig;
        _reactDom2.default.render(_react3.default.createElement(ReactHighcharts, { config: config }), document.getElementById('test'));
    }

}));

exports.default = Highcharts;

//# sourceMappingURL=HighCharts-compiled.js.map