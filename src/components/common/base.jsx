import React from 'react';

class Base extends React.Component {

  render() {
    const props = this.props;
    const lang = props.lang;
    const title = props.title;
    const children = props.children;
    const js = props.js;

    return (
      <html lang={lang}>
        <head>
          <meta charSet="utf-8"/>
          <meta httpEquiv="X-UA-Compatible" content="IE=edge"/>
          <meta name="description" content=""/>
          <meta name="viewport" content="width=device-width, initial-scale=1"/>
          <title>{title}</title>
          <link rel="stylesheet" type="text/css" href="css/ltr.css"/>
        </head>
        <body>
          {children}
          <footer className="text-sm p-f footer">
            Developed with ♡ and <a href="https://github.com/sarbbottam/sheer" className="link">Sheer</a>
          </footer>
          {
            js ? <script src={js}></script> : null
          }
        </body>
      </html>
    );
  }
}

Base.propTypes = {
  lang: React.PropTypes.string,
  title: React.PropTypes.string,
  children: React.PropTypes.object,
  js: React.PropTypes.string
};

export default Base;
