import React from 'react';

import Highcharts from './Highcharts';
const ChartComponent = React.createClass({
  render() {
    return (
        <div className="row">
          <div className="col-xs-12 col-lg-12 col-md-12">
            <Highcharts graphConfig={this.props.graphConfig}/>
        </div>
          </div>
    )
  }

});

export default ChartComponent;
