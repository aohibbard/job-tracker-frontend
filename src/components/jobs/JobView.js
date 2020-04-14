import React from 'react';

export default class JobView extends React.Component{

    render(){
        console.log(this.props)
        debugger
        return(
            <div id={this.props.job.id}>
                Contact
                <p>Title: {this.props.job.title}</p>
                <p>Company: {this.props.job.company}</p>
                <p>Due: {this.props.job.due}</p>
                <label>Applied</label>
                <input type="checkbox" name="applied" value={this.props.job.applied} />
                <p>Link: {this.props.job.url}</p>
            </div>
        )
    }

}