import React from 'react';

class Layout extends React.Component {
  render() {
    const props = this.props;
    const heading = props.heading;
    const children = props.children;
    const isIndex = props.isIndex;

    return (
      <div className="container">
        <h1 className="text-xl m-b-20px">{heading}</h1>
        {children}
        {
          isIndex ?
          null : (
            <div className="t-a-c m-t-20px">
              <a href={'index.html'} className="link">Back to Index</a>
            </div>
          )
        }
      </div>
    );
  }
}

Layout.propTypes = {
  heading: React.PropTypes.string,
  children: React.PropTypes.object,
  isIndex: React.PropTypes.bool
};

export default Layout;
