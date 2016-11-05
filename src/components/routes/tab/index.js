import React from 'react';
import tabs from '../../../model/tabs.js'

class Tab extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      tabs
    };
  }

  getSelectedIndex() {
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

  render() {
    const tabs = this.state.tabs;
    const selectedIndex = this.getSelectedIndex();
    return (
      <div>
        <ul className="tabs">
          {
            tabs.map( (tab, i) => {
              return (
                <li key={i} className={i === selectedIndex ? 'active-tab tab' : 'tab'}>
                  <a href={`#${tab.id}`} aria-expanded={i === selectedIndex ? 'true' : 'false'} data-id={i}>{tab.name}</a>
                </li>
              )
            })
          }
        </ul>
        <ul className="panels">
          {
            tabs.map((tab, i) => {
              return (
                <li id={tab.id} className={i === selectedIndex ? 'active-panel panel' : 'panel'} key={i}>
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

export default Tab;