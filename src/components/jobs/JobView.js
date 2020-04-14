import React from 'react';
import Moment from 'react-moment';


export default class JobView extends React.Component{

    render(){
        // const date = moment().format("YYYY Do MM")
        // console.log(date)
        // {moment(this.props.job.due.toDate().calendar())}
        return(
            <div id={this.props.job.id}>
                Contact
                <p>Title: {this.props.job.title}</p>
                <p>Company: {this.props.job.company}</p>
                <p>Due: <Moment format="dddd, MMMM Do YYYY">{this.props.job.due}</Moment></p>
                <label>Applied</label>
                <input type="checkbox" name="applied" value={this.props.job.applied} />
                <p>Link: {this.props.job.url}</p>
                <button onClick={() => this.props.deleteJob(this.props.job.id)}>Delete</button>
            </div>
        )
    }

}