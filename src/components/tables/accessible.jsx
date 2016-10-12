const React = require('react');

const Accessible = () => {
  return (
    <table>
      <thead>
        <tr>
          <th>Fruit</th>
          <th>Quantity</th>
          <th>Rate</th>
          <th>Total</th>
        </tr>
      </thead>
      <tbody>
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
      </tbody>
    </table>
  );
}

module.exports = Accessible;
