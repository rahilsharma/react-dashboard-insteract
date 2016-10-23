/**
 * Created by Rahil on 19-10-2016.
 */
import React from 'react';
import TableSingleRow from './TableSingleRow';
const TableRows = React.createClass({
    render() {
        var datas = [1,2,3,4,5,6,7,8,9,10];
        let lengthDatas = datas.length;
        let tableRows = [];
        for (var i=0;i<lengthDatas;i++){
            tableRows.push(<TableSingleRow key={datas[i]}/>)
        }
        return (
            <div className="row" style={{borderTop:'1px solid lightgrey'}}>
                {tableRows}
            </div>
        )
    }
});

export default TableRows;