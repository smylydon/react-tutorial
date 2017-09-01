import React from 'react';

export class Jumbotron extends React.Component {
  render() {
    return (
      <div className="jumbotron">
         <h1>Jumbotron</h1>
         <p>This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
         <p><a className="btn btn-primary btn-lg">Learn more</a></p>
       </div>
  );
  }
}
