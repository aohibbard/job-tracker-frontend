import React from 'react';
import ContactView from './ContactView'
import { Card } from 'semantic-ui-react';


// class ContactsAll extends React.Component{

    // handleLoading = () => {
    //     if(this.props.loading){
    //         return <div>Loading</div>
    //     } else {
    //         return this.props.contacts.contacts.map(contact => <ContactView key={contact.id} contact={contact} />)
    //     }
    // }

const ContactsAll = (props) =>{
        const sortedContacts = props.contacts.sort((a, b) => a.name - b.name);
        // this does not work
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