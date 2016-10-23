/**
 * Created by Rahil on 20-10-2016.
 */
import React from 'react';
import DialogExampleSimple from './SimpleDialog';
import {TableRow, TableRowColumn} from 'material-ui/Table';

const SingleRow = React.createClass({
    render(){
        var datas = this.props.datas;
        return (
            <TableRow>
                <TableRowColumn>{datas.date}</TableRowColumn>
                <TableRowColumn>{datas.buyer}</TableRowColumn>
                <TableRowColumn>{datas.items}</TableRowColumn>
                <TableRowColumn>{datas.total}</TableRowColumn>
                <TableRowColumn>
                    <DialogExampleSimple></DialogExampleSimple>
                </TableRowColumn>
            </TableRow>
        )
    },
    componentDidMount: function () {

    }

});

export default SingleRow;