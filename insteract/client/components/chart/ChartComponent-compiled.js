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

var _Highcharts = require('./Highcharts');

var _Highcharts2 = _interopRequireDefault(_Highcharts);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _components = {
  _component: {}
};

var _reactTransformHmr2 = (0, _reactTransformHmr4.default)({
  filename: 'C:/Users/Rahil/WebstormProjects/insteract/insteract/client/components/ChartComponent.js',
  components: _components,
  locals: [module],
  imports: [_react3.default]
});

var _reactTransformCatchErrors2 = (0, _reactTransformCatchErrors4.default)({
  filename: 'C:/Users/Rahil/WebstormProjects/insteract/insteract/client/components/ChartComponent.js',
  components: _components,
  locals: [],
  imports: [_react3.default, _redboxReact3.default]
});

function _wrapComponent(id) {
  return function (Component) {
    return _reactTransformHmr2(_reactTransformCatchErrors2(Component, id), id);
  };
}

var ChartComponent = _wrapComponent('_component')(_react3.default.createClass({
  displayName: 'ChartComponent',
  render: function render() {
    return _react3.default.createElement(
      'div',
      { className: 'row' },
      _react3.default.createElement(
        'div',
        { className: 'col-xs-12 col-lg-12 col-md-12' },
        _react3.default.createElement(_Highcharts2.default, { graphConfig: this.props.graphConfig })
      )
    );
  }
}));

exports.default = ChartComponent;

//# sourceMappingURL=ChartComponent-compiled.js.map