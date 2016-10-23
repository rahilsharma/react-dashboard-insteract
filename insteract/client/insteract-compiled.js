'use strict';

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

var _rahil = require('./styles/rahil.css');

var _rahil2 = _interopRequireDefault(_rahil);

var _ChartComponent = require('./components/chart/ChartComponent');

var _ChartComponent2 = _interopRequireDefault(_ChartComponent);

var _Cards = require('./components/cards/Cards');

var _Cards2 = _interopRequireDefault(_Cards);

var _materialTable = require('./components/materialTable');

var _materialTable2 = _interopRequireDefault(_materialTable);

var _MuiThemeProvider = require('material-ui/styles/MuiThemeProvider');

var _MuiThemeProvider2 = _interopRequireDefault(_MuiThemeProvider);

var _AppBar = require('material-ui/AppBar');

var _AppBar2 = _interopRequireDefault(_AppBar);

var _reactTapEventPlugin = require('react-tap-event-plugin');

var _reactTapEventPlugin2 = _interopRequireDefault(_reactTapEventPlugin);

var _ChartData = require('./data/ChartData');

var _ChartData2 = _interopRequireDefault(_ChartData);

var _AppData = require('./data/AppData');

var _AppData2 = _interopRequireDefault(_AppData);

var _RecordsData = require('./data/RecordsData');

var _RecordsData2 = _interopRequireDefault(_RecordsData);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _components = {
    _component: {}
};

var _reactTransformHmr2 = (0, _reactTransformHmr4.default)({
    filename: 'C:/Users/Rahil/WebstormProjects/insteract/insteract/client/insteract.js',
    components: _components,
    locals: [module],
    imports: [_react3.default]
});

var _reactTransformCatchErrors2 = (0, _reactTransformCatchErrors4.default)({
    filename: 'C:/Users/Rahil/WebstormProjects/insteract/insteract/client/insteract.js',
    components: _components,
    locals: [],
    imports: [_react3.default, _redboxReact3.default]
});

function _wrapComponent(id) {
    return function (Component) {
        return _reactTransformHmr2(_reactTransformCatchErrors2(Component, id), id);
    };
}
// Import css

// Import Components

//data variable till backend api is not integrated


var Insteract = _wrapComponent('_component')(_react3.default.createClass({
    displayName: 'Insteract',
    render: function render() {
        return _react3.default.createElement(
            _MuiThemeProvider2.default,
            null,
            _react3.default.createElement(
                'div',
                null,
                _react3.default.createElement(_AppBar2.default, { title: _AppData2.default.title, iconClassNameRight: _AppData2.default.iconClassNameRight }),
                _react3.default.createElement(_ChartComponent2.default, { graphConfig: _ChartData2.default }),
                _react3.default.createElement(_Cards2.default, { recordsData: _RecordsData2.default }),
                _react3.default.createElement(_materialTable2.default, null)
            )
        );
    },

    componentDidMount: function componentDidMount() {
        //injecting tap event
        (0, _reactTapEventPlugin2.default)();
    }
}));
_reactDom2.default.render(_react3.default.createElement(Insteract, null), document.getElementById('root'));

//# sourceMappingURL=insteract-compiled.js.map