import React from 'react';
import { connect } from 'react-redux';
import { fetchContacts } from '../actions/FetchContacts';
import { fetchJobs } from '../actions/FetchJobs';
import { fetchGithub } from '../actions/FetchGithub';

import ContactNotes from '../components/UserHome/ContactNotes'
import JobNotes from '../components/UserHome/JobNotes'
import GitNotes from '../components/UserHome/GitNotes'

import { Grid } from 'semantic-ui-react';

class UserHome extends React.Component{

    state = {
        count: 0
    }

    handleClick = (event) => {
        // this.setState({
        //     count: this.state.count + 1
        // })

        const URL = 'http://localhost:3000/api/'

        console.log('a');

        fetch(URL + 'users/1/contactsfdsjklfjdlkjflkdsjflkdsjflks')
            .then(resp => {
                if(resp.status !== 200) {
                    throw new Error(resp.statusText);
                }
                console.log('b');
                return resp.json();
            })
            .then(data => console.log('c', data))
            .catch(errors => console.log('d', errors))

        console.log('e');

        // a, e, d
    }

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
                    </Grid.Column>
                </Grid>
                <button onClick={this.handleClick}>Click Me</button> 
            <p>{this.state.count}</p>
            </div> 
        )
    }
}

const mapStateToProps = state => {
    return state
}

export default connect(mapStateToProps, {fetchContacts, fetchJobs, fetchGithub} )(UserHome)