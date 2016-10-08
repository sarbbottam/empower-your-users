import React from 'react';

class Accessible extends React.Component {
  surprise() {
    alert('surprised'); // eslint-disable-line no-alert
  }
  render() {
    return (
      <div className="row-input">
        <ul>
          <li>✅'Surprise me! - button' is reachable via keyboard</li>
          <li>✅'Surprise me! - button' can be activated by pressing `enter` and `space`, similar to clicking</li>
          <li>✅'Surprise me! - button' is treated as `button` by assistive technologies, like screen reading software.</li>
        </ul>
        <button className="button button-secondary w-100" onClick={this.surprise}>Surprise me! - button</button>
      </div>
    );
  }

}

export default Accessible;
