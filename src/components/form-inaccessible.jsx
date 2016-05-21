import React from 'react';
import states from '../model/states';
import Input from './form-fields/input';
import Select from './form-fields/select';

export default class FormAccessible extends React.Component {
  render() {
    return (
      <form noValidate>
        <div className="row row-input">
          <Input screwA11Y name="firstName" wrapperClassName="col col-1-2 p-e" id="first-name" placeholder="First Name" required/>
          <Input screwA11Y name="lastName" wrapperClassName="col col-1-2 p-s" id="last-name" placeholder="Last Name" required/>
        </div>
        <Input screwA11Y name="addressLine1" wrapperClassName="row-input" id="address-line-1" placeholder="Address line 1" required/>
        <Input screwA11Y name="addressLine2" wrapperClassName="row-input" id="address-line-2" placeholder="Address line 2"/>
        <Input screwA11Y name="city" wrapperClassName="row-input" id="city" placeholder="City" className="w-a" required/>
        <Select screwA11Y name="state" wrapperClassName="row-input" id="state" label="State" className="w-a" required options={states}/>
        <Input screwA11Y name="postalCode" wrapperClassName="row-input" id="postal-code" placeholder="Postal code" className="w-a" required/>
        <input name="tos" type="checkbox" id="tos" required/> I agree to the terms and condition
        <div className="row-button">
          <button type="submit" className="button button-primary">Submit</button>
        </div>
      </form>
    );
  }
}
