import React from 'react';
import { connect } from 'react-redux';
import { fetchContacts } from '../actions/FetchContacts';
import { fetchJobs } from '../actions/FetchJobs';

import ContactNotes from '../components/UserHome/ContactNotes'
import JobNotes from '../components/UserHome/JobNotes'

import { Grid } from 'semantic-ui-react';

class UserHome extends React.Component{

    componentDidMount(){
        this.props.fetchContacts()
        this.props.fetchJobs()
    }

    render(){
        return(
            <div>
                <Grid centered columns={2} >
                    <Grid.Column>
                    <ContactNotes contacts={this.props.contacts} />
                    </Grid.Column>
                    <Grid.Column>
                    <JobNotes jobs={this.props.jobs} />
                    </Grid.Column>
                </Grid>
            </div>  
        )
    }
}

const mapStateToProps = state => {
    return state
}

export default connect(mapStateToProps, {fetchContacts, fetchJobs} )(UserHome)