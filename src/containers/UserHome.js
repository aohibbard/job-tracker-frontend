import React from 'react';
import { connect } from 'react-redux';
import { fetchContacts } from '../actions/FetchContacts';
import { fetchJobs } from '../actions/FetchJobs';

import ContactNotes from '../components/UserHome/ContactNotes'
import JobNotes from '../components/UserHome/JobNotes'

class UserHome extends React.Component{

    componentDidMount(){
        this.props.fetchContacts()
        this.props.fetchJobs()
    }

    render(){
        return(
            <div>
                User Dashboard
                <ContactNotes contacts={this.props.contacts} />
                <JobNotes jobs={this.props.jobs} />
            </div>  
        )
    }
}

const mapStateToProps = state => {
    return state
}

export default connect(mapStateToProps, {fetchContacts, fetchJobs} )(UserHome)