import React from 'react'
import moment from 'moment';
// <Moment format="dddd, MMMM Do YYYY">{this.props.job.due}</Moment></p>


// this.props.jobs.jobs.forEach(job => job.due =>
//     if (moment(job.due).isBetween(today, date){
//         upcomingDeadlines.push(job)
    
// })

class JobNotes extends React.Component{

    //use moment to check if any deadlines are coming up in the next 7 days
    //sort by jobs that have not been applied to

    upcomingDates(){
        let upcomingDeadlines = []
        //should declare a date 7 days from moment.now
        const today = moment(new Date());
        const date = moment().day(7);
        debugger
        for (const job of this.props.jobs.jobs){
            let dueDate = moment(job.due);
            debugger
            if(dueDate.isBeteween(today, date)){
                upcomingDeadlines.push(job)
            }
        }   
    }
    

    render(){
        console.log(this.props)
        // debugger to play with contacts
        //decide what the logic is
        return(
            <div>
                Job Notes
                <button onClick={this.upcomingDates()}>See Deadlines</button>
            </div>
        )
    }
}

export default JobNotes