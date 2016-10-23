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

var _TableHeader = require('./TableHeader');

var _TableHeader2 = _interopRequireDefault(_TableHeader);

var _TableRows = require('./TableRows');

var _TableRows2 = _interopRequireDefault(_TableRows);

var _materialTable = require('./materialTable');

var _materialTable2 = _interopRequireDefault(_materialTable);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _components = {
    _component: {}
};

var _reactTransformHmr2 = (0, _reactTransformHmr4.default)({
    filename: 'C:/Users/Rahil/WebstormProjects/insteract/insteract/client/components/GridTable.js',
    components: _components,
    locals: [module],
    imports: [_react3.default]
});

var _reactTransformCatchErrors2 = (0, _reactTransformCatchErrors4.default)({
    filename: 'C:/Users/Rahil/WebstormProjects/insteract/insteract/client/components/GridTable.js',
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


var GridTable = _wrapComponent('_component')(_react3.default.createClass({
    displayName: 'GridTable',
    render: function render() {
        return _react3.default.createElement(
            'div',
            { className: 'row' },
            _react3.default.createElement(
                'div',
                { className: 'col-lg-12 col-md-12 col-xs-12' },
                _react3.default.createElement(
                    'div',
                    { className: 'stat panel panel-primary' },
                    _react3.default.createElement(
                        'div',
                        { className: 'panel-heading' },
                        _react3.default.createElement(
                            'div',
                            { className: 'panel-title row' },
                            _react3.default.createElement(
                                'div',
                                { className: 'col-xs-12 text-center' },
                                _react3.default.createElement(
                                    'div',
                                    { className: 'huge' },
                                    'Orders'
                                )
                            )
                        )
                    ),
                    _react3.default.createElement(
                        'div',
                        { className: 'panel-body', id: 'tableCustomId', style: { maxHeight: '300px', overflowY: 'auto', overflowX: 'hidden' } },
                        _react3.default.createElement(_TableHeader2.default, null),
                        _react3.default.createElement(_TableRows2.default, null)
                    )
                )
            )
        );
    },

    componentDidMount: function componentDidMount() {
        document.getElementById("tableCustomId").addEventListener("scroll", this.handleScroll);
        //make ajax call
        //set State
    },
    componentWillUnmount: function componentWillUnmount() {
        document.getElementById("tableCustomId").removeEventListener("scroll", this.handleScroll);
    },
    handleScroll: function handleScroll() {
        console.log("handle scroll was called");
        //make an ajax call over here
        //setState again
    },
    getInitialState: function getInitialState() {
        var datas = [];
        return {
            datas: datas
        };
    }
}));

exports.default = _materialTable2.default;

//# sourceMappingURL=GridTable-compiled.js.map