import React  from 'react';
import Moment from 'react-moment';

class JobInput extends React.Component{

    state = {
        title: '',
        company: '',
        due: '',
        applied: false,
        url: ''
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.addJob(this.state)
        this.setState({
            title: '',
            company: '',
            due: '',
            applied: false,
            url: 
        })
    }

    render(){
        return(
            <div className="JobInput">
            <form onSubmit={this.handleSubmit}>
                <input type="text" name="title" value={this.state.title} onChange={this.handleChange} />
                <input type="input" name="company" value={this.state.company} onChange={this.handleChange} />
                <input type="date" name="due" value={this.state.due} onChange={this.handleChange} />
                <input type="checkbox" name="applied" value={this.state.applied} onChange={this.handleChange} />
                <input type="text" name="url" value={this.state.url} onChange={this.handleChange} />
            </form>
            </div>
        )
    }
}

export default class JobInput;