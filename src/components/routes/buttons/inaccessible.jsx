import React from 'react';

const Inaccessible = () => {
  function surprise() {
    alert('surprised'); // eslint-disable-line no-alert
  }

  return (
    <div>
      <noscript>
        Buttons are of no use, w/o JavaScript
      </noscript>
      <ul>
        <li className="row-input">
          <ul>
            <li>❌'Surprise me! - span' is not reachable via keyboard</li>
            <li>❌'Surprise me! - span' can not be activated by pressing `enter` and `space`, but only by clicking</li>
            <li>❌'Surprise me! - span' is not treated as `button`, but as text by assistive technologies, like screen reading software.</li>
          </ul>
          <span className="button button-secondary w-100" onClick={surprise}>Surprise me! - span</span>
        </li>
        <li className="row-input">
          <ul>
            <li>✅'Surprise me! - span/tabindex' is reachable via keyboard</li>
            <li>❌'Surprise me! - span/tabindex' can not be activated by pressing `enter` and `space`, but only by clicking</li>
            <li>❌'Surprise me! - span/tabindex' is not treated as `button`, but as text by assistive technologies, like screen reading software</li>
          </ul>
          <span tabIndex="0" className="button button-secondary w-100" onClick={surprise}>Surprise me! - span/tabindex</span>
        </li>
        <li className="row-input">
          <ul>
            <li>✅'Surprise me! a/href' is reachable via keyboard</li>
            <li>❌'Surprise me! a/href' can not be activated by pressing `space`, but only by clicking and pressing `enter`</li>
            <li>❌'Surprise me! a/href' is not treated as `button`, but as link by assistive technologies, like screen reading software</li>
          </ul>
          <a href="#" className="button button-secondary w-100" onClick={surprise}>Surprise me! a/href</a>
        </li>
        <li className="row-input">
          <ul>
            <li>✅'Surprise me! a/href/role' is reachable via keyboard</li>
            <li>❌'Surprise me! a/href/role' can not be activated by pressing `space`, but only by clicking and pressing `enter`</li>
            <li>✅'Surprise me! a/href/role' is not treated as button by assistive technologies, like screen reading software</li>
          </ul>
          <a href="#" role="button" className="button button-secondary w-100" onClick={surprise}>Surprise me! a/href/role</a>
        </li>
      </ul>
    </div>
  );
}

export default Inaccessible
