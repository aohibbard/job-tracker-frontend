import React from 'react';
import ContactView from './ContactView'

export default class ContactsAll extends React.Component{

    // component did mount

    render(){
        return(
            <div>
                Contacts get mapped here
                {this.props.contacts.contacts.map(contact => <ContactView key={contact.id} contact={contact} />)}
                {/*pass  in delete and edit */}
            </div>
        )
    }
}
