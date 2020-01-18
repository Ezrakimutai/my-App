import React from 'react'

export default (props) => {
  return (
    <React.Fragment>
        <span className="pull-right badge badge-secondary">{props.timeframe}</span>
        <h5>{props.title} - <span className="font-weight-normal">{props.company}</span></h5>
        <p className="font-weight-light">{props.summary}</p>
    </React.Fragment>
  );
}
