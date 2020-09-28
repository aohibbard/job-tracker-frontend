import React from 'react';
import { connect } from 'react-redux';
import { fetchContacts } from '../actions/FetchContacts';
import { fetchJobs } from '../actions/FetchJobs';
import { fetchGithub } from '../actions/FetchGithub';

import ContactNotes from '../components/UserHome/ContactNotes'
import JobNotes from '../components/UserHome/JobNotes'
import GitNotes from '../components/UserHome/GitNotes'
// import GitBars from '../components/UserHome/GitBars'

import { Grid } from 'semantic-ui-react';

class UserHome extends React.Component{

    componentDidMount(){
        this.props.fetchContacts()
        this.props.fetchJobs()
        this.props.fetchGithub()
    }

    render(){
        return(
            <div>
                <Grid centered columns={3} >
                    <Grid.Column>
                    <ContactNotes contacts={this.props.contacts} />
                    </Grid.Column>
                    <Grid.Column>
                    <JobNotes jobs={this.props.jobs} />
                    </Grid.Column>
                    <Grid.Column>
                    <GitNotes githubData={this.props.githubData} />
                    {/* <GitBars githubData={this.props.githubData} /> */}
                    </Grid.Column>
                </Grid>
            </div> 
        )
    }
}

const mapStateToProps = state => {
    return state
}

export default connect(mapStateToProps, {fetchContacts, fetchJobs, fetchGithub} )(UserHome)