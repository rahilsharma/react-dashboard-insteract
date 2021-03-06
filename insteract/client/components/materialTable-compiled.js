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

var _zoomOut = require('material-ui/svg-icons/action/zoom-out');

var _zoomOut2 = _interopRequireDefault(_zoomOut);

var _SimpleDialog = require('./SimpleDialog');

var _SimpleDialog2 = _interopRequireDefault(_SimpleDialog);

var _arrowDownward = require('material-ui/svg-icons/navigation/arrow-downward');

var _arrowDownward2 = _interopRequireDefault(_arrowDownward);

var _arrowUpward = require('material-ui/svg-icons/navigation/arrow-upward');

var _arrowUpward2 = _interopRequireDefault(_arrowUpward);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _components = {
    _component: {}
};

var _reactTransformHmr2 = (0, _reactTransformHmr4.default)({
    filename: 'C:/Users/Rahil/WebstormProjects/insteract/insteract/client/components/materialTable.js',
    components: _components,
    locals: [module],
    imports: [_react3.default]
});

var _reactTransformCatchErrors2 = (0, _reactTransformCatchErrors4.default)({
    filename: 'C:/Users/Rahil/WebstormProjects/insteract/insteract/client/components/materialTable.js',
    components: _components,
    locals: [],
    imports: [_react3.default, _redboxReact3.default]
});

function _wrapComponent(id) {
    return function (Component) {
        return _reactTransformHmr2(_reactTransformCatchErrors2(Component, id), id);
    };
}

var style = {
    margin: 0
};
var GridTable = _wrapComponent('_component')(_react3.default.createClass({
    displayName: 'GridTable',

    getInitialState: function getInitialState() {
        return {
            datas: []
        };
    },
    render: function render() {
        var datas = this.state.datas;
        var rows = [];
        for (var i = 0; i < datas.length; i++) {
            rows.push(_react3.default.createElement(
                _Table.TableRow,
                null,
                _react3.default.createElement(
                    _Table.TableRowColumn,
                    null,
                    datas[i].date
                ),
                _react3.default.createElement(
                    _Table.TableRowColumn,
                    null,
                    datas[i].buyer
                ),
                _react3.default.createElement(
                    _Table.TableRowColumn,
                    null,
                    datas[i].items
                ),
                _react3.default.createElement(
                    _Table.TableRowColumn,
                    null,
                    datas[i].total
                ),
                _react3.default.createElement(
                    _Table.TableRowColumn,
                    null,
                    _react3.default.createElement(_SimpleDialog2.default, null)
                )
            ));
        }
        return _react3.default.createElement(
            'div',
            { style: { marginTop: '5px' } },
            _react3.default.createElement(
                _Table.Table,
                { id: 'customTableIdRahil', height: '300px', fixedHeader: true, selectable: false, onCellClick: this.sortTable },
                _react3.default.createElement(
                    _Table.TableHeader,
                    { adjustForCheckbox: false, displaySelectAll: false },
                    _react3.default.createElement(
                        _Table.TableRow,
                        null,
                        _react3.default.createElement(
                            _Table.TableHeaderColumn,
                            { colSpan: '3', tooltip: 'Orders', style: { textAlign: 'center', fontSize: '20px', fontWeight: 'bold' } },
                            'Orders'
                        )
                    )
                ),
                _react3.default.createElement(
                    _Table.TableBody,
                    { displayRowCheckbox: false },
                    _react3.default.createElement(
                        _Table.TableRow,
                        null,
                        _react3.default.createElement(
                            _Table.TableRowColumn,
                            { style: { fontSize: '16px', fontWeight: 'bold', cursor: 'pointer' } },
                            'Date ',
                            _react3.default.createElement(_arrowDownward2.default, { style: { marginTop: '3px' } })
                        ),
                        _react3.default.createElement(
                            _Table.TableRowColumn,
                            { style: { fontSize: '16px', fontWeight: 'bold' } },
                            'Buyer'
                        ),
                        _react3.default.createElement(
                            _Table.TableRowColumn,
                            { style: { fontSize: '16px', fontWeight: 'bold' } },
                            'Items'
                        ),
                        _react3.default.createElement(
                            _Table.TableRowColumn,
                            { style: { fontSize: '16px', fontWeight: 'bold' } },
                            'Total'
                        ),
                        _react3.default.createElement(
                            _Table.TableRowColumn,
                            { style: { fontSize: '16px', fontWeight: 'bold' } },
                            'Details'
                        )
                    ),
                    rows
                )
            )
        );
    },

    sortTable: function sortTable(x, y) {

        if (x == 0 && y == 1) {
            console.log("Sort The table");
        }
    },
    componentDidMount: function componentDidMount() {
        document.getElementById("rahilCustomTable").addEventListener("scroll", this.handleScroll);
        this.setState({
            datas: this.props.gridData.gridDataArrayAsc
        });
    },
    handleScroll: function handleScroll() {
        var that = this;
        console.log("handle scroll was called");
        var divId = "rahilCustomTable";
        var scrollTop = document.getElementById(divId).scrollTop;
        var innerHeight = document.getElementById(divId).offsetHeight;
        var scrollHeight = document.getElementById(divId).scrollHeight;
        console.log(scrollTop + innerHeight);
        console.log(scrollHeight * 0.80);
        if (scrollTop + innerHeight > scrollHeight * .80) {
            console.log("60% reached");
            var datas = that.state.datas;
            datas.push(5);
            datas.push(6);
            that.setState({ datas: datas });
        }
    },
    buttonClick: function buttonClick(x) {
        console.log("A button was clicked at row" + x);
    }
}));
exports.default = GridTable;

//# sourceMappingURL=materialTable-compiled.js.map