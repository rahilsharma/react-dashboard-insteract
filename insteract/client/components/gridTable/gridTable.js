import React from 'react';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import DialogExampleSimple from './SimpleDialog';
import ArrowDownward from 'material-ui/svg-icons/navigation/arrow-downward';
import ArrowUpward from 'material-ui/svg-icons/navigation/arrow-upward';
const style = {
    margin: 0,
};
const GridTable = React.createClass({
    getInitialState:function () {
      return{
          datas:[],
          order:1 //1-->> Ascending -1 -->> descending
      }
    },
    render(){
        var datas = this.state.datas;
        var orderingInformation = this.state.order;
        var arrrow ;
        const styleOrderingArrow = {
            marginTop:'3px'
        }
        if (orderingInformation == 1){
            arrrow = <ArrowUpward style={styleOrderingArrow}/>;
        }
        else {
            arrrow = <ArrowDownward style={styleOrderingArrow}/>;
        }
        var rows = [];
        for (var i=0;i<datas.length;i++){
            rows.push(<TableRow>
                <TableRowColumn>{datas[i].date}</TableRowColumn>
                <TableRowColumn>{datas[i].buyer}</TableRowColumn>
                <TableRowColumn>{datas[i].items}</TableRowColumn>
                <TableRowColumn>{datas[i].total}</TableRowColumn>
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
                        <TableRowColumn  style={{fontSize:'16px',fontWeight:'bold',cursor:'pointer'}} >Date {arrrow}</TableRowColumn>
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
            datas:this.props.gridData.gridDataArrayAsc,order:1
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
export default GridTable;