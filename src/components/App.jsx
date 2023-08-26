import { Section } from './Section/Section';
import { Component } from 'react';
import { nanoid } from 'nanoid';
import { PhoneBook } from './PhoneBook/PhoneBook';
import { ContactsList } from './Contacts/ContactsList';

export class App extends Component {
  state = {
    contacts: [],
  };

  addContact = newContact => {
    this.setState(prevState => ({
      contacts: [...prevState.contacts, { id: nanoid(5), ...newContact }],
    }));
  };

  handleDeleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  render() {
    return (
      <div>
        <Section title="Phone book">
          <PhoneBook addNewContact={this.addContact} />
        </Section>
        <Section title="Contacts">
          <ContactsList
            contacts={this.state.contacts}
            onDeleteContact={this.handleDeleteContact}
          />
        </Section>
      </div>
    );
  }
}
