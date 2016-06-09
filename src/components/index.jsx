import React from 'react';

export default class Index extends React.Component {
  render() {
    const props = this.props;
    const data = props.data;

    return (
      <ul>
        {
          data.map((item, index) => {
            return (
              <li key={index} className="row-input">
                <a href={item.path} className="link">{item.title}</a>
              </li>
            );
          })
        }
      </ul>
    );
  }
}
