const React = require('react');
const classNames = require('classnames');

const Input = (props) => {
  const screwA11Y = props.screwA11Y;
  const type = props.type ? props.type : 'text';
  const name = props.name;
  const id = props.id;
  const placeholder = props.placeholder;
  const className = classNames(props.className, 'input-field');

  let wrapperClassName = props.wrapperClassName;
  let required = props.required;
  if (required) {
    wrapperClassName = classNames(wrapperClassName, 'required');
  }
  required = screwA11Y ? '' : required;

  return (
    <div className={wrapperClassName}>
      {
        screwA11Y ? '' : <label htmlFor={id} className="clipped">{placeholder}</label>
      }
      <input name={name} id={id} type={type} placeholder={placeholder} className={className} required={required}/>
    </div>
  );
}

Input.propTypes = {
  type: React.PropTypes.string,
  name: React.PropTypes.string.isRequired,
  id: React.PropTypes.string.isRequired,
  placeholder: React.PropTypes.string.isRequired,
  required: React.PropTypes.bool,
  className: React.PropTypes.string,
  wrapperClassName: React.PropTypes.string
};

module.exports = Input;
