const React = require('react');

const Accessible = () => {
  return (
    <div>
      <div className="row-input">
        <img src="http://i.imgur.com/TGj2Aam.jpg" alt="Niagara falls at sunset" className="w-100"/>
      </div>
      <div className="row-input">
        <img src="http://does-not.exits/giberish.jpg" alt="This imgae does not exist" className="w-100" style={{height: '16%'}}/>
      </div>
      <div className="row row-input">
        <div className="col col-1-2 t-a-c">
          <button className="icon icon-save">
            <span className="clipped">Save</span>
          </button>
        </div>
        <div className="col col-1-2 t-a-c">
          <button className="icon icon-edit">
            <span className="clipped">Edit</span>
          </button>
        </div>
      </div>
    </div>
  );
}

module.exports = Accessible;
