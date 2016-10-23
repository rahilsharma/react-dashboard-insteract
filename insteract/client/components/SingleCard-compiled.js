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

var _RaisedButton = require('material-ui/RaisedButton');

var _RaisedButton2 = _interopRequireDefault(_RaisedButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _components = {
    _component: {}
};

var _reactTransformHmr2 = (0, _reactTransformHmr4.default)({
    filename: 'C:/Users/Rahil/WebstormProjects/insteract/insteract/client/components/SingleCard.js',
    components: _components,
    locals: [module],
    imports: [_react3.default]
});

var _reactTransformCatchErrors2 = (0, _reactTransformCatchErrors4.default)({
    filename: 'C:/Users/Rahil/WebstormProjects/insteract/insteract/client/components/SingleCard.js',
    components: _components,
    locals: [],
    imports: [_react3.default, _redboxReact3.default]
});

function _wrapComponent(id) {
    return function (Component) {
        return _reactTransformHmr2(_reactTransformCatchErrors2(Component, id), id);
    };
} /**
   * Created by Rahil on 19-10-2016.
   */


var SingleCard = _wrapComponent('_component')(_react3.default.createClass({
    displayName: 'SingleCard',
    render: function render() {
        return _react3.default.createElement(
            'div',
            { className: 'col-lg-4 col-md-4 col-xs-12' },
            _react3.default.createElement(_RaisedButton2.default, { children: _react3.default.createElement(
                    'div',
                    null,
                    _react3.default.createElement(
                        'div',
                        { style: { paddingTop: '20px', fontSize: '24px' } },
                        _react3.default.createElement(
                            'b',
                            null,
                            '10023'
                        )
                    ),
                    _react3.default.createElement(
                        'div',
                        { style: { marginTop: '2px', fontSize: '15px' } },
                        _react3.default.createElement('br', null),
                        'Total Records'
                    )
                ), style: { height: '100px' }, primary: true, fullWidth: true })
        );
    }
}));

exports.default = SingleCard;

//# sourceMappingURL=SingleCard-compiled.js.map