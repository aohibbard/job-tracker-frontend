import React from 'react';
import { connect } from 'react-redux';
import { fetchContacts } from '../actions/FetchContacts';

import ContactNotes from '../components/UserHome/ContactNotes'

class UserHome extends React.Component{

    componentDidMount(){
        this.props.fetchContacts()
    }

    render(){
        return(
            <div>
                User Dashboard
                <ContactNotes contacts={this.props.contacts} />
            </div>  
        )
    }
}

const mapStateToProps = state => {
    return state.contacts
}

export default connect(mapStateToProps, {fetchContacts} )(UserHome)