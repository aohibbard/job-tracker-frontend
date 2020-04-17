import React from 'react'
import moment from 'moment';
// <Moment format="dddd, MMMM Do YYYY">{this.props.job.due}</Moment></p>

// https://www.freecodecamp.org/forum/t/how-to-use-momentjs-in-react/266329

class JobNotes extends React.Component{

    //use moment to check if any deadlines are coming up in the next 7 days
    //sort by jobs that have not been applied to

    state = {
        deadlines: []
    }

    componentDidMount(){
        this.upcomingDates()
    }

    upcomingDates(){
        let upcomingDeadlines = []
        //should declare a date 7 days from moment.now
        const today = moment(new Date()) //.format("YYYYMMDD"); //format?
        const date = moment().add(7, 'days') //.format("YYYYMMDD"); //format?

        for (const job of this.props.jobs.jobs){
            if( moment(job.due).isBetween(today, date)){
                debugger
                upcomingDeadlines.push(job)
            }
        }   
        this.setState({
            deadlines: upcomingDeadlines
        })
    }

    // showDeadlines(arr){
    //     if(arr.length > 1){
            
    //         arr.map(job => )
    //     } else {
    //         return "You have no deadlines in the next seven days."
    //     }
    // }
    

    render(){
        // debugger to play with contacts
        //decide what the logic is
        if(this.state.deadlines.length > 0){
        return(
            <div>
                You have {this.state.deadlines.length} job(s) due this week.
                {this.state.deadlines.map(job => <div>{job.title} {job.company} {job.due}</div>)}
                <br />
            </div>
        )} else {
            return(
                <div>
                    You don't have any job applications due in the next 7 days.
                </div>
            )
        }
    }
}

export default JobNotes