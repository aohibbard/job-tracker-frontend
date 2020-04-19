import React from 'react';
import Moment from 'react-moment';


export default class JobView extends React.Component{

    handleClick = (event) => {
        event.preventDefault()
        this.props.job.applied = !this.props.job.applied
        this.props.updateJob(this.props.job)
    }

    render(){
        return(
            <div id={this.props.job.id}>
                <p>Title: {this.props.job.title}</p>
                <p>Company: {this.props.job.company}</p>
                <p>Due: <Moment format="dddd, MMMM Do YYYY">{this.props.job.due}</Moment></p>
                <label>Applied</label>
                <input type="checkbox" name="applied" checked={this.props.job.applied} onChange={this.handleClick.bind(this)}/>
                <p>Link: {this.props.job.url}</p>
                <button onClick={() => this.props.deleteJob(this.props.job.id)}>Delete</button>
            </div>
        )
    }

}