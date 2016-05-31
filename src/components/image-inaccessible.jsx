import React from 'react';

export default class Button extends React.Component {
  render() {
    return (
      <div>
        <div className="row-input">
          <img src="http://i.imgur.com/TGj2Aam.jpg" className="w-100"/>
        </div>
        <div className="row-input">
          <img src="http://does-not.exits/giberish.jpg" className="w-100" style={{height: '16%'}}/>
        </div>
        <div className="row row-input">
          <div className="col col-1-2 t-a-c">
            <button className="icon icon-save"></button>
          </div>
          <div className="col col-1-2 t-a-c">
            <button className="icon icon-edit"></button>
          </div>
        </div>
      </div>
    );
  }
}
