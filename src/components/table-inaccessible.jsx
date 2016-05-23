import React from 'react';

export default class TableInaccessible extends React.Component {
  render() {
    return (
      <table>
        <tr>
          <td>Fruit</td>
          <td>Quantity</td>
          <td>Rate</td>
          <td>Total</td>
        </tr>
        <tr>
          <td>apple</td>
          <td>3</td>
          <td>10</td>
          <td>30</td>
        </tr>
        <tr>
          <td>orange</td>
          <td>5</td>
          <td>7</td>
          <td>35</td>
        </tr>
        <tr>
          <td>pineapple</td>
          <td>5</td>
          <td>15</td>
          <td>75</td>
        </tr>
      </table>
    );
  }
}
