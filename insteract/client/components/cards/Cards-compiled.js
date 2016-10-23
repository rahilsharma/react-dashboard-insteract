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

var _SingleCard = require('./SingleCard');

var _SingleCard2 = _interopRequireDefault(_SingleCard);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _components = {
    _component: {}
};

var _reactTransformHmr2 = (0, _reactTransformHmr4.default)({
    filename: 'C:/Users/Rahil/WebstormProjects/insteract/insteract/client/components/cards/Cards.js',
    components: _components,
    locals: [module],
    imports: [_react3.default]
});

var _reactTransformCatchErrors2 = (0, _reactTransformCatchErrors4.default)({
    filename: 'C:/Users/Rahil/WebstormProjects/insteract/insteract/client/components/cards/Cards.js',
    components: _components,
    locals: [],
    imports: [_react3.default, _redboxReact3.default]
});

function _wrapComponent(id) {
    return function (Component) {
        return _reactTransformHmr2(_reactTransformCatchErrors2(Component, id), id);
    };
}

var Cards = _wrapComponent('_component')(_react3.default.createClass({
    displayName: 'Cards',
    render: function render() {
        console.log(this.state.recordsData);
        var totalRecords = this.state.recordsData.totalRecords;
        var customerCount = this.state.recordsData.customerCount;
        var totalValue = this.state.recordsData.totalValue;

        return _react3.default.createElement(
            'div',
            { className: 'row', style: { paddingTop: '10px' } },
            _react3.default.createElement(_SingleCard2.default, { name: 'Total Records', value: totalRecords }),
            _react3.default.createElement(_SingleCard2.default, { name: 'Customer Count', value: customerCount }),
            _react3.default.createElement(_SingleCard2.default, { name: 'Total Value', value: totalValue })
        );
    },

    componentDidMount: function componentDidMount() {
        var useBackend = this.props.USE_BACKEND;
        if (useBackend) {
            console.log("making call to ::" + this.props.backendUrl + "getInitialData");
            // url (required), options (optional)
            fetch(this.props.backendUrl + "getInitialData", {
                method: 'get', mode: 'cors'
            }).then(function (response) {
                console.log("got response");
                console.log(response);
            }).catch(function (err) {
                // Error :(
                console.log(err);
            });
        } else {
            this.setState({
                recordsData: this.props.recordsData
            });
        }
    },
    getInitialState: function getInitialState() {
        var useBackend = this.props.USE_BACKEND;
        var recordsData = {};
        if (useBackend) {
            recordsData = this.props.recordsData;
        }
        return {
            recordsData: recordsData
        };
    }
}));

exports.default = Cards;

//# sourceMappingURL=Cards-compiled.js.map