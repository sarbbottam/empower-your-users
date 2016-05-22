import React from 'react';

class Layout extends React.Component {
  render() {
    return (
      <div className="container">
        <h1 className="text-xl m-b-20px">{this.props.heading}</h1>
        {this.props.children}
      </div>
    );
  }
}

Layout.propTypes = {
  heading: React.PropTypes.string,
  children: React.PropTypes.object
};

export default Layout;
