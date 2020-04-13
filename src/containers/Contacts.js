import React from 'react';
import { connect } from 'react-redux'; 

import ContactInput from '../components/ContactInput'
import ContactsAll from '../components/ContactsAll'

// import action 

class Contacts extends React.Component{

    render(){
        return(
            <div>
                Contact Show?
                <ContactInput addContact={this.props.addContact} />
                <ContactsAll contacts={this.props.contacts} />
            </div>
        )
    }
}

const mapStateToProps = state => {
    console.log("hit mapStateToProps")
    return {contacts: state.contacts}
}

const mapDispatchToProps = dispatch => ({

    addContact: contact => dispatch({type: 'ADD_CONTACT', contact})    // add commas
    // edit
    // delete
})

export default connect(mapStateToProps, mapDispatchToProps)(Contacts)
