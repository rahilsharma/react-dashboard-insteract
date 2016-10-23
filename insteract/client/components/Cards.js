/**
 * Created by Rahil on 19-10-2016.
 */
import React from 'react';
import SingleCard from './SingleCard';
const Cards = React.createClass({
    render() {
        return (
            <div className="row" style={{paddingTop:'10px'}}>
               <SingleCard/>
                <SingleCard/>
                <SingleCard/>
            </div>

        )
    }
});

export default Cards;