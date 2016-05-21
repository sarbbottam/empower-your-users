import React from 'react';
import classNames from 'classnames';

class Input extends React.Component {
  render() {
    const props = this.props;
    const screwA11Y = props.screwA11Y;
    const options = props.options;
    const name = props.name;
    const id = props.id;
    const label = props.label;
    const required = screwA11Y ? '' : props.required;
    const className = classNames(props.className, 'drop-down');
    const wrapperClassName = props.wrapperClassName;

    return (
      <div className={wrapperClassName}>
        {
          screwA11Y ? '' : <label htmlFor={id} className="clipped">{label}</label>
        }
        <select name={name} id={id} className={className} required={required}>
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
  name: React.PropTypes.string.isRequired,
  id: React.PropTypes.string.isRequired,
  label: React.PropTypes.string.isRequired,
  required: React.PropTypes.bool,
  className: React.PropTypes.string,
  wrapperClassName: React.PropTypes.string
};

export default Input;
