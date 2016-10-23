/**
 * Created by Rahil on 24-10-2016.
 */
import React from 'react';
import {TableHeader, TableHeaderColumn, TableRow} from 'material-ui/Table';
const gridSuperInit = {
    adjustForCheckbox:false,
    displaySelectAll:false,
    colSpan:"3",
    tooltip:"Orders"
}
const style = {
    textAlign: 'center',fontSize:'20px' , fontWeight:'bold'
}

const GridSuperHeader = React.createClass({
    render(){
        return (
            <TableHeader adjustForCheckbox={gridSuperInit.adjustForCheckbox} displaySelectAll={gridSuperInit.displaySelectAll}>
                <TableRow>
                    <TableHeaderColumn colSpan="3" tooltip={gridSuperInit.tooltip} style={style}>
                        Orders
                    </TableHeaderColumn>
                </TableRow>
            </TableHeader>

        )
    },
    componentDidMount: function () {

    }

});

export default GridSuperHeader;