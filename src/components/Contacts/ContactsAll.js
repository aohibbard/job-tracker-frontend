import React from 'react';
import ContactView from './ContactView'
import { Card } from 'semantic-ui-react';


const ContactsAll = (props) =>{
        const sortedContacts = props.contacts.sort((a,b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0));
        return(
            <div>
                <h2>Contacts</h2>               
                <Card.Group itemsPerRow={2}>
                {sortedContacts.map(contact => <ContactView key={contact.id} contact={contact} updateContact={props.updateContact} deleteContact={props.deleteContact} />)}
                </Card.Group>
                {/* {this.handleLoading()} */}
            </div>
        )
}

export default ContactsAll