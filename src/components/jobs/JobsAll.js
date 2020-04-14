import React from 'react';
import JobView from './JobView'

export default class JobsAll extends React.Component{


    render(){
        console.log(this.props)
        return(
            <div>
                Render My Jobs
                {/* You still need to implement sort on jobs */}
                {this.props.jobs.jobs.map(job => <JobView key={job.id} job={job} />)}
                {/*pass  in delete and edit */}

                {/* {this.handleLoading()} */}
            </div>
        )
    }
}
