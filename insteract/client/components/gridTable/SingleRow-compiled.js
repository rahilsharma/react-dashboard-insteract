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

var _SimpleDialog = require('./SimpleDialog');

var _SimpleDialog2 = _interopRequireDefault(_SimpleDialog);

var _Table = require('material-ui/Table');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _components = {
    _component: {}
};

var _reactTransformHmr2 = (0, _reactTransformHmr4.default)({
    filename: 'C:/Users/Rahil/WebstormProjects/insteract/insteract/client/components/gridTable/SingleRow.js',
    components: _components,
    locals: [module],
    imports: [_react3.default]
});

var _reactTransformCatchErrors2 = (0, _reactTransformCatchErrors4.default)({
    filename: 'C:/Users/Rahil/WebstormProjects/insteract/insteract/client/components/gridTable/SingleRow.js',
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


var SingleRow = _wrapComponent('_component')(_react3.default.createClass({
    displayName: 'SingleRow',
    render: function render() {
        var datas = this.props.datas;
        return _react3.default.createElement(
            _Table.TableRow,
            null,
            _react3.default.createElement(
                _Table.TableRowColumn,
                null,
                datas.date
            ),
            _react3.default.createElement(
                _Table.TableRowColumn,
                null,
                datas.buyer
            ),
            _react3.default.createElement(
                _Table.TableRowColumn,
                null,
                datas.items
            ),
            _react3.default.createElement(
                _Table.TableRowColumn,
                null,
                datas.total
            ),
            _react3.default.createElement(
                _Table.TableRowColumn,
                null,
                _react3.default.createElement(_SimpleDialog2.default, null)
            )
        );
    },

    componentDidMount: function componentDidMount() {}

}));

exports.default = SingleRow;

//# sourceMappingURL=SingleRow-compiled.js.map