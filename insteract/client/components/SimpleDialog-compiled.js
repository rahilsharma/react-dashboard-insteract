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

var _Dialog = require('material-ui/Dialog');

var _Dialog2 = _interopRequireDefault(_Dialog);

var _FlatButton = require('material-ui/FlatButton');

var _FlatButton2 = _interopRequireDefault(_FlatButton);

var _RaisedButton = require('material-ui/RaisedButton');

var _RaisedButton2 = _interopRequireDefault(_RaisedButton);

var _zoomOut = require('material-ui/svg-icons/action/zoom-out');

var _zoomOut2 = _interopRequireDefault(_zoomOut);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _components = {
    _component: {}
};

var _reactTransformHmr2 = (0, _reactTransformHmr4.default)({
    filename: 'C:/Users/Rahil/WebstormProjects/insteract/insteract/client/components/SimpleDialog.js',
    components: _components,
    locals: [module],
    imports: [_react3.default]
});

var _reactTransformCatchErrors2 = (0, _reactTransformCatchErrors4.default)({
    filename: 'C:/Users/Rahil/WebstormProjects/insteract/insteract/client/components/SimpleDialog.js',
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
/**
 * Dialog with action buttons. The actions are passed in as an array of React objects,
 * in this example [FlatButtons](/#/components/flat-button).
 *
 * You can also close this dialog by clicking outside the dialog, or with the 'Esc' key.
 */
//pass them as props over here

var DialogExampleSimple = _wrapComponent('_component')(_react3.default.createClass({
    displayName: 'DialogExampleSimple',
    render: function render() {
        var actions = [_react3.default.createElement(_FlatButton2.default, {
            label: 'Cancel',
            primary: true,
            onTouchTap: this.handleClose
        }), _react3.default.createElement(_FlatButton2.default, {
            label: 'Submit',
            primary: true,
            keyboardFocused: true,
            onTouchTap: this.handleClose
        })];

        return _react3.default.createElement(
            'div',
            null,
            _react3.default.createElement(_RaisedButton2.default, {
                icon: _react3.default.createElement(_zoomOut2.default, null),
                style: style, onTouchTap: this.handleOpen }),
            _react3.default.createElement(
                _Dialog2.default,
                {
                    title: 'Dialog With Actions',
                    actions: actions,
                    modal: false,
                    open: this.state.open,
                    onRequestClose: this.handleClose },
                'The actions in this window were passed in as an array of React objects.'
            )
        );
    },

    handleClose: function handleClose() {
        this.setState({ open: false });
    },
    handleOpen: function handleOpen() {
        this.setState({ open: true });
    },
    getInitialState: function getInitialState() {
        return {
            open: false
        };
    }
}));
exports.default = DialogExampleSimple;

//# sourceMappingURL=SimpleDialog-compiled.js.map