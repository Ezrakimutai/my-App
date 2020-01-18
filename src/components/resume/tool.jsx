import React from 'react'

export default (props) => {
  return (
    <React.Fragment>
        <p>
          <span className="font-weight-bold">{props.name}</span><br />
          {props.list}
        </p>
    </React.Fragment>
  );
}
