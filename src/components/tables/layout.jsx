const React = require('react');

const Layout = () => {
  return (
    <table style={{fontWeight: '500'}}>
      <tr>
        <td colSpan="2" style={{backgroundColor: 'red', color: 'white'}}>Page Header</td>
      </tr>
      <tr style={{height: '200px'}}>
        <td style={{backgroundColor: 'blue', width: '100px', color: 'white'}}>
          Side Bar
        </td>
        <td style={{backgroundColor: 'yellow'}}>
          Content
        </td>
      </tr>
      <tr>
        <td colSpan="2" style={{backgroundColor: 'green', color: 'white'}}>Page Footer</td>
      </tr>
    </table>
  );
}

module.exports = Layout;
