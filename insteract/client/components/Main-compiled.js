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

var _materialCard = require('./materialCard');

var _materialCard2 = _interopRequireDefault(_materialCard);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _components = {
  _component: {}
};

var _reactTransformHmr2 = (0, _reactTransformHmr4.default)({
  filename: 'C:/Users/Rahil/WebstormProjects/insteract/insteract/client/components/Main.js',
  components: _components,
  locals: [module],
  imports: [_react3.default]
});

var _reactTransformCatchErrors2 = (0, _reactTransformCatchErrors4.default)({
  filename: 'C:/Users/Rahil/WebstormProjects/insteract/insteract/client/components/Main.js',
  components: _components,
  locals: [],
  imports: [_react3.default, _redboxReact3.default]
});

function _wrapComponent(id) {
  return function (Component) {
    return _reactTransformHmr2(_reactTransformCatchErrors2(Component, id), id);
  };
}

var Main = _wrapComponent('_component')(_react3.default.createClass({
  displayName: 'Main',
  render: function render() {
    return _react3.default.createElement(
      'div',
      { className: 'row' },
      _react3.default.createElement(
        'div',
        { className: 'col-xs-12 col-lg-12 col-md-12' },
        _react3.default.createElement(_materialCard2.default, null)
      )
    );
  }
}));

exports.default = Main;

//# sourceMappingURL=Main-compiled.js.map