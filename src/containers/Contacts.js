import React from 'react';
import { connect } from 'react-redux'; 

import ContactInput from '../components/ContactInput'
import ContactsAll from '../components/ContactsAll'

import { fetchContacts } from '../actions/FetchContacts';
import { addContact, deleteContact, updateContact } from '../actions/AddContact';

class Contacts extends React.Component{

    componentDidMount(){
        this.props.fetchContacts()
    }

    render(){
        return(
            <div>
                <ContactInput addContact={this.props.addContact} />
                <ContactsAll contacts={this.props.contacts} updateContact={this.props.updateContact} deleteContact={this.props.deleteContact} />
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {contacts: state.contacts}
}

// const mapDispatchToProps = dispatch => ({
//     fetchContacts: () => dispatch({type: 'FETCH_CONTACT'}),
//     addContact: contact => dispatch({type: 'ADD_CONTACT', contact})
//     // edit
//     // delete
// })

export default connect(mapStateToProps, {fetchContacts, addContact, updateContact, deleteContact })(Contacts)
