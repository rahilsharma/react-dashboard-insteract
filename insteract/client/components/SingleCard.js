/**
 * Created by Rahil on 19-10-2016.
 */
import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';

const SingleCard = React.createClass({
    render() {
        return (
            <div className="col-lg-4 col-md-4 col-xs-12" >
                <RaisedButton children={<div><div style={{paddingTop:'20px',fontSize:'24px'}}><b>10023</b></div><div style={{marginTop:'2px',fontSize:'15px'}}><br></br>Total Records</div></div>} style={{height:'100px'}} primary={true} fullWidth={true} />
            </div>
        )
    }
});

export default SingleCard;