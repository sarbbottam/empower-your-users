import React from 'react';
import classNames from 'classnames';

class Input extends React.Component {
  render() {
    const props = this.props;
    const type = props.type ? props.type : 'text';
    const id = props.id;
    const placeholder = props.placeholder;
    const required = props.required;
    const className = classNames(props.className, 'input-field');
    const wrapperClassName = props.wrapperClassName;

    return (
      <div className={wrapperClassName}>
        <label htmlFor={id} className="clipped">{placeholder}</label>
        <input id={id} type={type} placeholder={placeholder} className={className} required={required}/>
      </div>
    );
  }
}

Input.propTypes = {
  type: React.PropTypes.string,
  id: React.PropTypes.string.isRequired,
  placeholder: React.PropTypes.string.isRequired,
  required: React.PropTypes.bool,
  className: React.PropTypes.string,
  wrapperClassName: React.PropTypes.string
};

export default Input;
