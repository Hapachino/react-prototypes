import React, { Component } from 'react';
import ContactList from './contact_list';
import ContactForm from './contact_form.js';
import contactData from '../data/contacts';
import SearchBar from './search_bar';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      contacts: contactData,
      errorMessage: '',
    }
  }

  addContact = (contact) => {
    for (let field in contact) {
      if (!contact[field]) {
        this.setState({
          errorMessage: 'Fields cannot be empty'
        });

        return;
      }
    }

    this.setState({
      contacts: [...this.state.contacts, contact],
      errorMessage: '',
    });
  }

  render() {
    const { addContact, state: { errorMessage, contacts }} = this;

    return (
      <div className="container">
        <h1 className="text-center">
          Address Book
        </h1>
        <div className="row">
          <div className="col-4">
            <ContactForm add={addContact} />
            <p className="mt-3" style={{color: 'red'}}>{errorMessage}</p>
          </div>
          {/* <SearchBar /> */}
          <ContactList contacts={contacts}/>
        </div>
      </div>
    );
  }
}

export default App;
