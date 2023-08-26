import { Section } from './Section/Section';
import { Component } from 'react';
import { nanoid } from 'nanoid';
import { PhoneBook } from './PhoneBook/PhoneBook';
import { ContactsList } from './Contacts/ContactsList';
import { Filter } from './Filter/Filter';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  addContact = newContact => {
    if (this.state.contacts.some(contact => contact.name === newContact.name)) {
      alert('Contact with the same name already exists.');
    } else {
      this.setState(prevState => ({
        contacts: [...prevState.contacts, { id: nanoid(5), ...newContact }],
      }));
    }
  };

  handleDeleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  handleChange = evt => {
    this.setState({ filter: evt.target.value });
    if (!this.state.contacts.includes(evt.target.value)) {
      return <p>No contacts with this name</p>;
    }
  };

  getFilterContacts = () => {
    const normalizedFilter = this.state.filter.toLowerCase().trim();
    return this.state.contacts.filter(contact => {
      return contact.name.toLowerCase().includes(normalizedFilter);
    });
  };

  render() {
    return (
      <div>
        <Section title="Phone book">
          <PhoneBook addNewContact={this.addContact} />
        </Section>
        <Section title="Contacts">
          <Filter handleChange={this.handleChange} />
          <ContactsList
            contacts={this.getFilterContacts()}
            onDeleteContact={this.handleDeleteContact}
          />
          {!this.getFilterContacts().length && (
            <p>There are no contacts with this name</p>
          )}
        </Section>
      </div>
    );
  }
}
