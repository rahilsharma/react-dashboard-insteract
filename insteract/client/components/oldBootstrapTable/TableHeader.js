/**
 * Created by Rahil on 19-10-2016.
 */
import React from 'react';
const TableHeader = React.createClass({
    render() {
        return (
            <div className="row" style={{paddingBottom:'7px',fontSize:'17px'}}>
            <div className="col-lg-3 col-md-3 col-xs-12" style={{cursor:'pointer'}} onClick={this.sortByDate}>
                Date <a>
                <span className="glyphicon glyphicon-arrow-down"></span>
            </a>
            </div>
                <div className="col-lg-3 col-md-3 col-xs-12">
                   Buyer
                </div>
                <div className="col-lg-2 col-md-2 col-xs-12">
                    Items
                </div>
                <div className="col-lg-2 col-md-2 col-xs-12">
                    Total
                </div>
                <div className="col-lg-2 col-md-2 col-xs-12">
                    Details
                </div>
            </div>
        )
    },
    sortByDate:function () {
        console.log("Sort by date was called!!!!");
    }
});

export default TableHeader;