import React from 'react';
import states from '../model/states';
import Input from './form-fields/input';
import Select from './form-fields/select';

export default class FormAccessible extends React.Component {
  render() {
    return (
      <form noValidate>
        <fieldset>
          <legend className="clipped">Name</legend>
          <div className="row row-input">
            <Input name="firstName" wrapperClassName="col col-1-2 p-e" id="first-name" placeholder="First Name" required/>
            <Input name="lastName" wrapperClassName="col col-1-2 p-s" id="last-name" placeholder="Last Name" required/>
          </div>
        </fieldset>
        <fieldset>
          <legend className="clipped">Address</legend>
          <Input name="addressLine1" wrapperClassName="row-input" id="address-line-1" placeholder="Address line 1" required/>
          <Input name="addressLine2" wrapperClassName="row-input" id="address-line-2" placeholder="Address line 2"/>
          <Input name="city" wrapperClassName="row-input" id="city" placeholder="City" className="w-a" required/>
          <Select name="state" wrapperClassName="row-input" id="state" label="State" className="w-a" required options={states}/>
          <Input name="postalCode" wrapperClassName="row-input" id="postal-code" placeholder="Postal code" className="w-a" required/>
        </fieldset>
        <input name="tos" type="checkbox" id="tos" required/> <label htmlFor="tos">I agree to the terms and condition </label>
        <div className="row-button">
          <button type="submit" className="button button-primary">Submit</button>
        </div>
      </form>
    );
  }
}
