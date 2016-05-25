import React from 'react';

export default class Button extends React.Component {
  render() {
    return (
      <div>
        <div className="row-input">
          <span className="button button-secondary w-100">Surprise me! - span</span>
        </div>
        <div className="row-input">
          <span tabIndex="0" className="button button-secondary w-100">Surprise me! - span/tabindex</span>
        </div>
        <div className="row-input">
          <a href="#" className="button button-secondary w-100">Surprise me! a/href</a>
        </div>
        <div className="row-input">
          <a href="#" role="button" className="button button-secondary w-100">Surprise me! a/href/role</a>
        </div>
      </div>
    );
  }
}
