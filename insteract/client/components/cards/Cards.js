/**
 * Created by Rahil on 19-10-2016.
 */
import React from 'react';
import SingleCard from './SingleCard';
const Cards = React.createClass({
    render() {
        return (
            <div className="row" style={{paddingTop:'10px'}}>
               <SingleCard name="Total Records" value={this.props.recordsData.totalRecords}/>
                <SingleCard name="Customer Count" value={this.props.recordsData.customerCount}/>
                <SingleCard name="Total Value" value={this.props.recordsData.totalValue}/>
            </div>

        )
    }
});

export default Cards;