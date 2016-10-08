import React from 'react';

class Inaccessible extends React.Component {
  surprise() {
    alert('surprised'); // eslint-disable-line no-alert
  }
  render() {
    return (
      <ul>
        <li className="row-input">
          <ul>
            <li>❌'Surprise me! - span' is not reachable via keyboard</li>
            <li>❌'Surprise me! - span' can not be activated by pressing `enter` and `space`, but only by clicking</li>
            <li>❌'Surprise me! - span' is not treated as `button`, but as text by assistive technologies, like screen reading software.</li>
          </ul>
          <span className="button button-secondary w-100" onClick={this.surprise}>Surprise me! - span</span>
        </li>
        <li className="row-input">
          <ul>
            <li>✅'Surprise me! - span/tabindex' is reachable via keyboard</li>
            <li>❌'Surprise me! - span/tabindex' can not be activated by pressing `enter` and `space`, but only by clicking</li>
            <li>❌'Surprise me! - span/tabindex' is not treated as `button`, but as text by assistive technologies, like screen reading software</li>
          </ul>
          <span tabIndex="0" className="button button-secondary w-100" onClick={this.surprise}>Surprise me! - span/tabindex</span>
        </li>
        <li className="row-input">
          <ul>
            <li>✅'Surprise me! a/href' is reachable via keyboard</li>
            <li>❌'Surprise me! a/href' can not be activated by pressing `space`, but only by clicking and pressing `enter`</li>
            <li>❌'Surprise me! a/href' is not treated as `button`, but as link by assistive technologies, like screen reading software</li>
          </ul>
          <a href="#" className="button button-secondary w-100" onClick={this.surprise}>Surprise me! a/href</a>
        </li>
        <li className="row-input">
          <ul>
            <li>✅'Surprise me! a/href/role' is reachable via keyboard</li>
            <li>❌'Surprise me! a/href/role' can not be activated by pressing `space`, but only by clicking and pressing `enter`</li>
            <li>✅'Surprise me! a/href/role' is not treated as button by assistive technologies, like screen reading software</li>
          </ul>
          <a href="#" role="button" className="button button-secondary w-100" onClick={this.surprise}>Surprise me! a/href/role</a>
        </li>
      </ul>
    );
  }
}

export default Inaccessible
