import React from 'react';
import ReactDOM from 'react-dom';

class JumpLinks extends React.Component {

  getSelectedIndex(tabs) {
    let hash;
    if (typeof document !== 'undefined') {
      hash = document.location.hash.substr(1);
    }
    const selectedTab = tabs.find((tab, i) => {
      return tab.id === hash;
    });
    if(selectedTab) {
      return tabs.indexOf(selectedTab);
    }
    return 0;
  }

  componentDidUpdate() {
    const activePanel = ReactDOM.findDOMNode(this).querySelector(`#${document.location.hash.substr(1)}`);
    if (activePanel) {
      setTimeout(() => {
        activePanel.focus();
      }, 0);
    }
  }

  render() {
    const tabs = this.props.tabs;
    const selectedIndex = this.getSelectedIndex(tabs);
    return (
      <div>
        <ul className="tabs">
          {
            tabs.map( (tab, i) => {
              return (
                <li key={i} className={i === selectedIndex ? 'active-tab' : ''}>
                  {
                    typeof document !== 'undefined' ?
                    <a href={`#${tab.id}`} aria-expanded={i === selectedIndex ? 'true' : 'false'} data-id={i}>{tab.name}</a>
                    :
                    <a href={`#${tab.id}`} data-id={i}>{tab.name}</a>
                  }
                </li>
              )
            })
          }
        </ul>
        <ul className="panels">
          {
            tabs.map((tab, i) => {
              return (
                <li tabIndex="-1" id={tab.id} className={i === selectedIndex ? 'active-panel panel' : 'panel'} key={i}>
                  {tab.content}
                </li>
              )
            })
          }
        </ul>
      </div>
    );
  }
}

export default JumpLinks;
