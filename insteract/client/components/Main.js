import React from 'react';

import CardExampleWithAvatar from './materialCard';
const Main = React.createClass({
  render() {
    return (
        <div className="row">
          <div className="col-xs-12 col-lg-12 col-md-12">
            <CardExampleWithAvatar/>
        </div>
          </div>
    )
  }

});

export default Main;
