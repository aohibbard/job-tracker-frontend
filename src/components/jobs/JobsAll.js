import React from 'react';
import JobView from './JobView'
import moment from 'moment'
import { Card } from 'semantic-ui-react';

export default class JobsAll extends React.Component{

    render(){
        const sortedJobs = this.props.jobs.jobs.sort((a, b) => moment(a.due) - moment(b.due));
        //way delete is passed is probably wrong
        return(
            <div>
                <h2>My Jobs</h2>
                <Card.Group itemsPerRow='2'>
                {/* You still need to implement sort on jobs */}
                {sortedJobs.map(job => <JobView key={job.id} job={job} updateJob={this.props.updateJob} deleteJob={this.props.deleteJob} />)}
                {/*pass  in delete and edit */}
                </Card.Group>
                {/* {this.handleLoading()} */}
            </div>
        )
    }
}
