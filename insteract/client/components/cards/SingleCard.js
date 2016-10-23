/**
 * Created by Rahil on 19-10-2016.
 */
import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
const styleRaisedButton = {
    height:'100px'
}
const styleRaisedButtonChildren = {
    paddingTop:'20px',fontSize:'24px'
};
const styleInsideDiv = {
    marginTop:'2px',fontSize:'15px'
}
const SingleCard = React.createClass({
    render() {
        var name = this.props.name;
        var value = this.props.value;
        return (
            <div className="col-lg-4 col-md-4 col-xs-12" >
                <RaisedButton children={<div><div style={styleRaisedButtonChildren}><b>{value}</b></div><div style={styleInsideDiv}><br></br>{name}</div></div>} style={styleRaisedButton} primary={true} fullWidth={true} />
            </div>
        )
    }
});

export default SingleCard;