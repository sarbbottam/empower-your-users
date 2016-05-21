import React from 'react';
import classNames from 'classnames';

class Input extends React.Component {
  render() {
    const props = this.props;
    const options = props.options;
    const id = props.id;
    const label = props.label;
    const required = props.required;
    const className = classNames(props.className, 'drop-down');
    const wrapperClassName = props.wrapperClassName;

    return (
      <div className={wrapperClassName}>
        <label htmlFor={id} className="clipped">{label}</label>
        <select id={id} className={className} required={required}>
          {
            options.map((option, index) => {
              return <option key={index} value={option.value}>{option.text}</option>;
            })
          }
        </select>
      </div>
    );
  }
}

Input.propTypes = {
  options: React.PropTypes.array.isRequired,
  id: React.PropTypes.string.isRequired,
  label: React.PropTypes.string.isRequired,
  required: React.PropTypes.bool,
  className: React.PropTypes.string,
  wrapperClassName: React.PropTypes.string
};

export default Input;
