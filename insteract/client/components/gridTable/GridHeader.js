/**
 * Created by Rahil on 20-10-2016.
 */
import React from 'react';
import {TableRow, TableRowColumn} from 'material-ui/Table';

const style = {
    fontSize:'16px',fontWeight:'bold'
};
const stylePointer = {
    fontSize:'16px',fontWeight:'bold',cursor:'pointer'
}

const GridHeader = React.createClass({
    render(){
        let arrow = this.props.arrowDirection;
        return (
            <TableRow >
                <TableRowColumn  style={stylePointer} >Date {arrow}</TableRowColumn>
                <TableRowColumn style={style}>Buyer</TableRowColumn>
                <TableRowColumn style={style}>Items</TableRowColumn>
                <TableRowColumn style={style} >Total</TableRowColumn>
                <TableRowColumn style={style}>Details</TableRowColumn>
            </TableRow>
        )
    },
    componentDidMount: function () {

    }

});

export default GridHeader;