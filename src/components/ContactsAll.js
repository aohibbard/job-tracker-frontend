import React from 'react';
import ContactView from './ContactView'


export default class ContactsAll extends React.Component{

    // handleLoading = () => {
    //     if(this.props.loading){
    //         return <div>Loading</div>
    //     } else {
    //         return this.props.contacts.contacts.map(contact => <ContactView key={contact.id} contact={contact} />)
    //     }
    // }

    render(){
        const sortedContacts = this.props.contacts.contacts.sort((a, b) => a.name - b.name);
        // this does not work
        return(
            <div>
                My Contacts
                {sortedContacts.map(contact => <ContactView key={contact.id} contact={contact} updateContact={this.props.updateContact} deleteContact={this.props.deleteContact} />)}

                {/* {this.handleLoading()} */}
            </div>
        )
    }
}
