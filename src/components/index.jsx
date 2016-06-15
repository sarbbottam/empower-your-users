import React from 'react';

export default class Index extends React.Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    e.stopPropagation();
    this.props.updateState(e);
  }

  render() {
    const props = this.props;
    const data = props.data;

    return (
      <ul>
        {
          data.map((item, index) => {
            return (
              <li key={index} className="row-input">
                <a onClick={this.handleClick} href={item.path} className="link">{item.title}</a>
              </li>
            );
          })
        }
      </ul>
    );
  }
}

Index.propTypes = {
  updateState: React.PropTypes.func
};
