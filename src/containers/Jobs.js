import React from 'react';
import { connect } from 'react-redux';

import JobInput from '../components/jobs/JobInput';
import JobsAll from '../components/jobs/JobsAll.js';

//actions
import {addJob, updateJob, deleteJob} from '../actions/AddJob';
import {fetchJobs} from '../actions/FetchJobs'

class Jobs extends React.Component{

    componentDidMount(){
        this.props.fetchJobs()
    }

    render(){
        return(
            <div>
                <JobInput addJob={this.props.addJob} />
                <JobsAll jobs={this.props.jobs} updateJob={this.props.updateJob} deleteJob={this.props.deleteJob} />
            </div>
        )
    }
}

const mapStateToProps = state => {
    return state.jobs
    // return state
}

// const mapDispatchToProps = dispatch => ({
//     addJob: job => dispatch({type: 'ADD_JOB', job}),
//     fetchJobs: jobs => dispatch({type: 'FETCH_JOBS', jobs})
// })

export default connect(mapStateToProps, {addJob, updateJob, deleteJob, fetchJobs})(Jobs)
