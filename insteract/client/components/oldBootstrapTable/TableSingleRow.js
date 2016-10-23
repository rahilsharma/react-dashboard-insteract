/**
 * Created by Rahil on 19-10-2016.
 */
import React from 'react';
const TableSingleRow = React.createClass({
    render() {
        var datas = this.props.datas;
        return (
            <div className="row" style={{borderBottom:'1px solid lightgrey',padding:'6px'}}>
                <div className="col-lg-3 col-md-3 col-xs-12">
                    Datecdsfsdfdsfdsfsdfdsfsdfsdfds
                </div>
                <div className="col-lg-3 col-md-3 col-xs-12">
                    Buyersssssssssssss
                </div>
                <div className="col-lg-2 col-md-2 col-xs-12">
                    Itemsssssssssssssssss
                </div>
                <div className="col-lg-2 col-md-2 col-xs-12">
                    Total
                </div>
                <div className="col-lg-2 col-md-2 col-xs-12">
                    Details
                </div>
            </div>
        )
    }
});

export default TableSingleRow;