import React from 'react';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import ActionZoom from 'material-ui/svg-icons/action/zoom-out';
import DialogExampleSimple from './SimpleDialog';
import ArrowDownward from 'material-ui/svg-icons/navigation/arrow-downward';
import ArrowUpward from 'material-ui/svg-icons/navigation/arrow-upward';
const style = {
    margin: 0,
};
const TableExampleSimple = React.createClass({
    getInitialState:function () {
      return{
          datas:[]
      }
    },
    render(){
        var datas = this.state.datas;
        var rows = [];
        for (var i=0;i<datas.length;i++){
            rows.push(<TableRow>
                <TableRowColumn>2</TableRowColumn>
                <TableRowColumn>Randal White</TableRowColumn>
                <TableRowColumn>Unemployed</TableRowColumn>
                <TableRowColumn>Randal White</TableRowColumn>
                <TableRowColumn>
                    <DialogExampleSimple></DialogExampleSimple>
                </TableRowColumn>
            </TableRow>)
        }
        return(
        <div style={{marginTop:'5px'}}>
            <Table id="customTableIdRahil" height={'300px'} fixedHeader={true} selectable={false} onCellClick={this.sortTable} >
                <TableHeader adjustForCheckbox={false} displaySelectAll={false}>
                    <TableRow>
                        <TableHeaderColumn colSpan="3" tooltip="Orders" style={{textAlign: 'center',fontSize:'20px' , fontWeight:'bold' }}>
                            Orders
                        </TableHeaderColumn>
                    </TableRow>
                </TableHeader>
                <TableBody  displayRowCheckbox={false}>
                    <TableRow >
                        <TableRowColumn  style={{fontSize:'16px',fontWeight:'bold',cursor:'pointer'}} >Date <ArrowDownward style={{marginTop:'3px'}}></ArrowDownward></TableRowColumn>
                        <TableRowColumn style={{fontSize:'16px',fontWeight:'bold'}}>Buyer</TableRowColumn>
                        <TableRowColumn style={{fontSize:'16px',fontWeight:'bold'}}>Items</TableRowColumn>
                        <TableRowColumn style={{fontSize:'16px',fontWeight:'bold'}} >Total</TableRowColumn>
                        <TableRowColumn style={{fontSize:'16px',fontWeight:'bold'}}>Details</TableRowColumn>
                    </TableRow>
                    {rows}
                </TableBody>
            </Table>

        </div>
        )
    },
    sortTable:function (x,y) {

        if (x == 0 && y==1){
          console.log("Sort The table");
        }

    },
    componentDidMount:function () {
        document.getElementById("rahilCustomTable").addEventListener("scroll", this.handleScroll);
        this.setState({
            datas:[1,2,3,4,5,6,7,8]
        })
    },
    handleScroll:function () {
        var that = this;
        console.log("handle scroll was called");
        var divId = "rahilCustomTable";
        var scrollTop = document.getElementById(divId).scrollTop;
        var innerHeight = document.getElementById(divId).offsetHeight;
        var scrollHeight = document.getElementById(divId).scrollHeight;
        console.log(scrollTop+innerHeight);
        console.log(scrollHeight * 0.80);
        if ((scrollTop + innerHeight) > (scrollHeight * .80)) {
             console.log("60% reached");
             var datas = that.state.datas;
            datas.push(5);
            datas.push(6);
            that.setState({datas:datas});
        }
    },
    buttonClick:function (x) {
        console.log("A button was clicked at row" + x);
    }
});
export default TableExampleSimple;