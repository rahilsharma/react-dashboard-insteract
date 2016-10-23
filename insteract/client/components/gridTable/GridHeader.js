/**
 * Created by Rahil on 20-10-2016.
 */
import React from 'react';
import ReactDOM from 'react-dom';


const GridSuperHeader = React.createClass({
    render(){
        return (

            <div className="row" style={{paddingTop:'5px'}}>
                <div className="col-xs-12 text-center" >
                    <div style={{height: '300px', width: '100%'}}>
                        <div id="test"></div>
                    </div>
                </div>
            </div>

        )
    },
    componentDidMount: function () {
        var config = this.props.graphConfig;
        ReactDOM.render(React.createElement(ReactHighcharts, {config: config}), document.getElementById('test'));
    }

});

export default GridSuperHeader;