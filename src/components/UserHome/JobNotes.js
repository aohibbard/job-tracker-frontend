import React from 'react'
import moment from 'moment';
import Moment from 'react-moment';


// https://www.freecodecamp.org/forum/t/how-to-use-momentjs-in-react/266329

// class JobNotes extends React.Component{

//     //use moment to check if any deadlines are coming up in the next 7 days
//     //sort by jobs that have not been applied to

//     state = {
//         deadlines: []
//     }

    // componentDidMount(){
    //     this.upcomingDates()
    // }

const JobNotes = (props) => {

    let upcomingDeadlines = []

    const today = moment(new Date())
    const date = moment().add(7, 'days') 

    for (const job of props.jobs.jobs){
        if( moment(job.due).isBetween(today, date)){
            upcomingDeadlines.push(job)
        }
    }   

    if(upcomingDeadlines.length > 0){
        return(
            <div>
                You have {upcomingDeadlines.length} application(s) due this week.
                <br />
                {upcomingDeadlines.map(job => <React.Fragment key={job.id}>
                    <h3>{job.company}</h3>
                    <p>{job.title}</p>
                    <p><Moment format="dddd, MMMM Do YYYY">{job.due}</Moment></p>
                </React.Fragment>)}

            </div>
        )} else {
            return(
                <div>
                    You don't have any job applications due in the next 7 days.
                </div>
            )
        }
    
}

export default JobNotes