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

var _Table = require('material-ui/Table');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _components = {
    _component: {}
};

var _reactTransformHmr2 = (0, _reactTransformHmr4.default)({
    filename: 'C:/Users/Rahil/WebstormProjects/insteract/insteract/client/components/gridTable/GridSuperHeader.js',
    components: _components,
    locals: [module],
    imports: [_react3.default]
});

var _reactTransformCatchErrors2 = (0, _reactTransformCatchErrors4.default)({
    filename: 'C:/Users/Rahil/WebstormProjects/insteract/insteract/client/components/gridTable/GridSuperHeader.js',
    components: _components,
    locals: [],
    imports: [_react3.default, _redboxReact3.default]
});

function _wrapComponent(id) {
    return function (Component) {
        return _reactTransformHmr2(_reactTransformCatchErrors2(Component, id), id);
    };
} /**
   * Created by Rahil on 24-10-2016.
   */


var gridSuperInit = {
    adjustForCheckbox: false,
    displaySelectAll: false,
    colSpan: "3",
    tooltip: "Orders"
};
var style = {
    textAlign: 'center', fontSize: '20px', fontWeight: 'bold'
};

var GridSuperHeader = _wrapComponent('_component')(_react3.default.createClass({
    displayName: 'GridSuperHeader',
    render: function render() {
        return _react3.default.createElement(
            _Table.TableHeader,
            { adjustForCheckbox: gridSuperInit.adjustForCheckbox, displaySelectAll: gridSuperInit.displaySelectAll },
            _react3.default.createElement(
                _Table.TableRow,
                null,
                _react3.default.createElement(
                    _Table.TableHeaderColumn,
                    { colSpan: '3', tooltip: gridSuperInit.tooltip, style: style },
                    'Orders'
                )
            )
        );
    },

    componentDidMount: function componentDidMount() {}

}));

exports.default = GridSuperHeader;

//# sourceMappingURL=GridSuperHeader-compiled.js.map