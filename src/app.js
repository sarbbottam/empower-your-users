const React = require('react');

const Router = require('react-router').BrowserRouter;
const Match = require('react-router').Match;
const Link = require('react-router').Link;

const pages = require('./pages');

const pathPrefix = '/empower-your-users';

const App = () => (
  <Router>
    <div className="container">
      <h1 className="t-a-c f-z-20px">Examples - Empower your users</h1>
      <div className="row m-t-20px">
        <div className="col col-1-4 col-sm-1-2 v-a-t">
          <ul>
            <li><Link to={`${pathPrefix}/`}>Home</Link></li>
            {
              Object.keys(pages).map(pageKey => {
                return <li key={pageKey}><Link to={`${pathPrefix}/${pageKey}.html`}>{pages[pageKey].text}</Link></li>
              })
            }
          </ul>
        </div>
        <div className="col col-3-4 col-sm-1-2 v-a-t container-example">
          {
            Object.keys(pages).map(pageKey => {
              return <Match key={pageKey} pattern={`${pathPrefix}/${pageKey}.html`} component={pages[pageKey].component} />
            })
          }
        </div>
      </div>
    </div>
  </Router>
)

module.exports = App;
