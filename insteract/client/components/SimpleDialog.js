import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
const style = {
    margin: 0,
};
//pass them as props over here
import RaisedButton from 'material-ui/RaisedButton';
import ActionZoom from 'material-ui/svg-icons/action/zoom-out';
const DialogExampleSimple = React.createClass({
    render() {
        const actions = [
            <FlatButton
                label="Cancel"
                primary={true}
                onTouchTap={this.handleClose}
            />,
            <FlatButton
                label="Submit"
                primary={true}
                keyboardFocused={true}
                onTouchTap={this.handleClose}
            />,
        ];

        return (
            <div>
                <RaisedButton
                    icon={<ActionZoom />}
                    style={style} onTouchTap={this.handleOpen}/>
                <Dialog
                    title="Dialog With Actions"
                    actions={actions}
                    modal={false}
                    open={this.state.open}
                    onRequestClose={this.handleClose}>
                    The actions in this window were passed in as an array of React objects.
                </Dialog>
            </div>
        );
    },
    handleClose:function(){
        this.setState({open: false});
    },
    handleOpen:function(){
        this.setState({open: true});
    },
    getInitialState:function(){
        return{
            open:false
        }
    }
});
export default DialogExampleSimple;