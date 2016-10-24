
import React from 'react';
import SingleCard from './SingleCard';
const Cards = React.createClass({
    render() {
        console.log(this.state.recordsData);
        var totalRecords = this.state.recordsData.totalRecords;
        var customerCount = this.state.recordsData.customerCount;
        var totalValue = this.state.recordsData.totalValue;

        return (
            <div className="row" style={{paddingTop:'10px'}}>
               <SingleCard name="Total Records" value={totalRecords}/>
                <SingleCard name="Customer Count" value={customerCount}/>
                <SingleCard name="Total Value" value={totalValue}/>
            </div>

        )
    },
    componentDidMount:function () {
       var useBackend = this.props.USE_BACKEND;
        if (useBackend){
           console.log("making call to ::" + this.props.backendUrl + "getInitialData");
            // url (required), options (optional)
            fetch(this.props.backendUrl + "getInitialData", {
                method: 'get',  mode: 'cors',
            }).then(function(response) {
                this.setState({
                    recordsData:response
                })
            }).catch(function(err) {
                // Error :(
                console.log(err);
                //show some alert message or something
            });
        }
        else {
         this.setState({
             recordsData:this.props.recordsData
         })
        }
  },
    getInitialState:function () {
        var useBackend = this.props.USE_BACKEND;
        var recordsData= {};
        if (useBackend){
           recordsData = this.props.recordsData;
        }
        return {
            recordsData:recordsData
        }
    }
});

export default Cards;