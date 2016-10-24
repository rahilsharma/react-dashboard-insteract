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
    filename: 'C:/Users/Rahil/WebstormProjects/insteract/insteract/client/components/gridTable/GridTable.js',
    components: _components,
    locals: [module],
    imports: [_react3.default]
});

var _reactTransformCatchErrors2 = (0, _reactTransformCatchErrors4.default)({
    filename: 'C:/Users/Rahil/WebstormProjects/insteract/insteract/client/components/gridTable/GridTable.js',
    components: _components,
    locals: [],
    imports: [_react3.default, _redboxReact3.default]
});

function _wrapComponent(id) {
    return function (Component) {
        return _reactTransformHmr2(_reactTransformCatchErrors2(Component, id), id);
    };
}

var gridInit = {
    tableId: "customTableIdRahil",
    height: '300px',
    fixedHeader: true,
    selectable: false,
    tbodydisplayRowCheckbox: false
};
var divStyle = {
    marginTop: '5px'
};
var gridSuperInit = {
    adjustForCheckbox: false,
    displaySelectAll: false,
    colSpan: "3",
    tooltip: "Orders"
};
var style = {
    textAlign: 'center', fontSize: '20px', fontWeight: 'bold'
};
var GridTable = _wrapComponent('_component')(_react3.default.createClass({
    displayName: 'GridTable',

    getInitialState: function getInitialState() {
        return {
            datas: [],
            order: 1 //1-->> Ascending -1 -->> descending
        };
    },
    render: function render() {
        var datas = this.state.datas;
        var orderingInformation = this.state.order;
        var arrrow;
        var styleOrderingArrow = {
            marginTop: '3px'
        };
        if (orderingInformation == 1) {
            arrrow = _react3.default.createElement(_arrowUpward2.default, { style: styleOrderingArrow });
        } else {
            arrrow = _react3.default.createElement(_arrowDownward2.default, { style: styleOrderingArrow });
        }
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
            { style: divStyle },
            _react3.default.createElement(
                _Table.Table,
                { id: gridInit.tableId, height: gridInit.height, fixedHeader: gridInit.fixedHeader, selectable: gridInit.selectable, onCellClick: this.sortTable },
                _react3.default.createElement(
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
                ),
                _react3.default.createElement(
                    _Table.TableBody,
                    { displayRowCheckbox: gridInit.tbodydisplayRowCheckbox },
                    _react3.default.createElement(
                        _Table.TableRow,
                        null,
                        _react3.default.createElement(
                            _Table.TableRowColumn,
                            { style: { fontSize: '16px', fontWeight: 'bold', cursor: 'pointer' } },
                            'Date ',
                            arrrow
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
            var orderBefore = this.state.order;
            orderBefore = orderBefore * -1;
            var gridData;
            console.log(orderBefore);
            if (orderBefore == 1) {
                gridData = this.props.gridData.gridDataArrayAsc;
            } else {
                gridData = this.props.gridData.gridDataArrayDesc;
            }
            console.log(gridData);
            this.setState({
                datas: gridData, order: orderBefore
            });
        }
    },
    componentDidMount: function componentDidMount() {
        document.getElementById("rahilCustomTable").addEventListener("scroll", this.handleScroll);
        this.setState({
            datas: this.props.gridData.gridDataArrayAsc, order: 1
        });
    },
    handleScroll: function handleScroll() {
        var that = this;
        var divId = "rahilCustomTable";
        var scrollTop = document.getElementById(divId).scrollTop;
        var innerHeight = document.getElementById(divId).offsetHeight;
        var scrollHeight = document.getElementById(divId).scrollHeight;
        if (scrollTop + innerHeight > scrollHeight * .80) {
            var datas = that.state.datas;
            var scrollData = that.props.gridData.gridDataSrollAdd;
            var newDatas = datas.concat(scrollData);
            that.setState({ datas: newDatas });
        }
    },
    buttonClick: function buttonClick(x) {
        console.log("A button was clicked at row" + x);
    }
}));
exports.default = GridTable;

//# sourceMappingURL=GridTable-compiled.js.map