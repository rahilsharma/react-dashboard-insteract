/**
 * Created by Rahil on 19-10-2016.
 */
import React from 'react';
import TableHeader from './TableHeader';
import TableRows from './TableRows';
import TableExampleComplex from './materialTable';
const GridTable = React.createClass({
    render() {
        return (
            <div className="row">
            <div className="col-lg-12 col-md-12 col-xs-12" >
                <div className="stat panel panel-primary" >
                    <div className="panel-heading" >
                        <div className="panel-title row" >
                            <div className="col-xs-12 text-center">
                                <div className="huge" >
                                    Orders
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="panel-body" id="tableCustomId" style={{maxHeight:'300px',overflowY:'auto',overflowX:'hidden'}}>
                        <TableHeader/>
                        <TableRows/>
                    </div>
                </div>
            </div>
                </div>
        )
    },
    componentDidMount:function () {
        document.getElementById("tableCustomId").addEventListener("scroll", this.handleScroll);
        //make ajax call
        //set State

    },
    componentWillUnmount:function () {
        document.getElementById("tableCustomId").removeEventListener("scroll", this.handleScroll);
    },
    handleScroll:function(){
        console.log("handle scroll was called");
        //make an ajax call over here
        //setState again
    },
    getInitialState:function () {
        let datas = [];
        return {
            datas : datas
        }
    }
});

export default TableExampleComplex;