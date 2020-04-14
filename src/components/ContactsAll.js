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
        return(
            <div>
                My Contacts
                {/* You still need to implement sort on contact */}
                {this.props.contacts.contacts.map(contact => <ContactView key={contact.id} contact={contact} deleteContact={this.props.deleteContact} />)}
                {/*pass  in delete and edit */}

                {/* {this.handleLoading()} */}
            </div>
        )
    }
}
