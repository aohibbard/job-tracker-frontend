import React from 'react';
import Moment from 'react-moment';
import { Card } from 'semantic-ui-react';



export default class JobView extends React.Component{

    handleClick = (event) => {
        event.preventDefault()
        this.props.job.applied = !this.props.job.applied
        this.props.updateJob(this.props.job)
    }

    render(){
        return(
            <div id={this.props.job.id}>
                <Card>
                <Card.Content header={this.props.job.title} />
                <Card.Content>Company: {this.props.job.company}</Card.Content>
                <Card.Content>Due: <Moment format="dddd, MMMM Do YYYY">{this.props.job.due}</Moment></Card.Content>
                <Card.Content>
                <label>Applied  </label>
                <input type="checkbox" name="applied" checked={this.props.job.applied} onChange={this.handleClick.bind(this)}/>
                </Card.Content>
                <Card.Content>Link: {this.props.job.url}</Card.Content>
                <Card.Content extra>
                    <button onClick={() => this.props.deleteJob(this.props.job.id)}>Delete</button>
                </Card.Content>
                </Card>
            </div>
        )
    }

}