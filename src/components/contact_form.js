import React, { Component } from 'react';
import Field from './field.js';

class ContactForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      form: {
        firstName: '',
        lastName: '',
        phone: '',
        email: '',
      }
    }
  }

  handleInputChange = (e) => {
    const { value, name } = e.target;
    const { form } = this.state;

    this.setState({
      form: {
        ...form,
        [name]: value,
      }
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();

    this.props.add(this.state.form);
  }

  reset = () => {
    this.setState({
      form: {
        firstName: '',
        lastName: '',
        phone: '',
        email: '',
        streetAddress: '',
        city: '',
        state: '',
        zipCode: '',
      }
    });
  }

  render() {
    const { firstName, 
            lastName, 
            phone, 
            email, 
            streetAddress,
            city,
            state,
            zipCode, } = this.state.form;

    return (
      <form onSubmit={this.handleSubmit}>
        <Field 
          name="firstName"
          label="First Name"
          type="text"
          value={firstName}
          onChange={this.handleInputChange}
        />
        <Field 
          name="lastName"
          label="Last Name"
          type="text"
          value={lastName}
          onChange={this.handleInputChange}
        />
        <Field
          name="phone"
          label="Phone Number"
          type="tel"
          value={phone}
          onChange={this.handleInputChange}
        />
        <Field
          name="email"
          label="Email"
          type="email"
          value={email}
          onChange={this.handleInputChange}
        />
        <Field
          name="streetAddress"
          label="Street Address"
          type="text"
          value={streetAddress}
          onChange={this.handleInputChange}
        />
        <Field
          name="city"
          label="City"
          type="text"
          value={city}
          onChange={this.handleInputChange}
        />
        <Field
          name="state"
          label="State"
          type="text"
          value={state}
          onChange={this.handleInputChange}
        />
        <Field
          name="zipCode"
          label="Zip Code"
          type="text"
          value={zipCode}
          onChange={this.handleInputChange}
        />
        <button className="btn btn-outline-primary mr-3">Add Contact</button>
        <button className="btn btn-outline-danger" type='button' onClick={this.reset}>Clear Form</button>
      </form>
    );
  }
}

export default ContactForm;
