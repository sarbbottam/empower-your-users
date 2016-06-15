import React from 'react';
import states from '../model/states';
import Input from './form-fields/input.jsx';
import Select from './form-fields/select.jsx';

export default class FormAccessible extends React.Component {
  render() {
    return (
      <form noValidate>
        <div className="row row-input">
          <Input name="fullName" wrapperClassName="col col-1-1" id="full-name" placeholder="Full Name" required/>
        </div>
        <fieldset>
          <legend className="clipped">Address</legend>
          <div className="row row-input">
            <Input name="addressLine1" wrapperClassName="col col-1-1" id="address-line-1" placeholder="Address line 1" required/>
          </div>
          <div className="row row-input">
            <Input name="addressLine2" wrapperClassName="col col-1-1" id="address-line-2" placeholder="Address line 2"/>
          </div>
          <div className="row row-input">
            <Input name="city" wrapperClassName="col" id="city" placeholder="City" className="w-a" required/>
          </div>
          <div className="row row-input">
            <Select name="state" wrapperClassName="col" id="state" label="State" className="w-a" required options={states}/>
          </div>
          <div className="row row-input">
            <Input name="postalCode" wrapperClassName="col" id="postal-code" placeholder="Postal code" className="w-a" required/>
          </div>
        </fieldset>
        <input name="tos" type="checkbox" id="tos" required/> <label htmlFor="tos">I agree to the terms and condition </label>
        <div className="row-button">
          <button type="submit" className="button button-primary">Submit</button>
        </div>
      </form>
    );
  }
}
