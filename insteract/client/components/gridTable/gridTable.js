import React from 'react';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import DialogExampleSimple from './SimpleDialog';
import ArrowDownward from 'material-ui/svg-icons/navigation/arrow-downward';
import ArrowUpward from 'material-ui/svg-icons/navigation/arrow-upward';
import GridSuperHeader from './GridSuperHeader';
const gridInit = {
    tableId : "customTableIdRahil",
    height:'300px',
    fixedHeader:true,
    selectable:false,
    tbodydisplayRowCheckbox:false
};
const divStyle= {
    marginTop:'5px'
}
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
        <div style={divStyle}>
            <Table id={gridInit.tableId} height={gridInit.height} fixedHeader={gridInit.fixedHeader} selectable={gridInit.selectable} onCellClick={this.sortTable} >
                <GridSuperHeader/>
                <TableBody  displayRowCheckbox={gridInit.tbodydisplayRowCheckbox}>
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
            var orderBefore = this.state.order;
            orderBefore = orderBefore * -1;
            var gridData ;
            console.log(orderBefore);
            if (orderBefore == 1) {
                 gridData = this.props.gridData.gridDataArrayAsc;
            }
            else{
              gridData  = this.props.gridData.gridDataArrayDesc;
            }
            console.log(gridData);
            this.setState({
                datas:gridData,order:orderBefore
            })
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
        var divId = "rahilCustomTable";
        var scrollTop = document.getElementById(divId).scrollTop;
        var innerHeight = document.getElementById(divId).offsetHeight;
        var scrollHeight = document.getElementById(divId).scrollHeight;
        if ((scrollTop + innerHeight) > (scrollHeight * .80)) {
            var datas = that.state.datas;
            var scrollData = that.props.gridData.gridDataSrollAdd;
            var newDatas = datas.concat(scrollData);
            that.setState({datas:newDatas});
        }
    },
    buttonClick:function (x) {
        console.log("A button was clicked at row" + x);
    }
});
export default GridTable;