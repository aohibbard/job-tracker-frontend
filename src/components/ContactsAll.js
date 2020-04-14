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
        debugger
        //issue on add Contact
        return(
            <div>
                My Contacts
                {/* You still need to implement sort on contact */}
                {this.props.contacts.contacts.map(contact => <ContactView key={contact.id} contact={contact} />)}
                {/*pass  in delete and edit */}

                {/* {this.handleLoading()} */}
            </div>
        )
    }
}
