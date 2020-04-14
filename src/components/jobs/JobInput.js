import React  from 'react';

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
            url: ''
        })
    }

    render(){
        return(
            <div className="JobInput">
            <form onSubmit={this.handleSubmit}>
                <label>Title </label>
                <input type="text" name="title" value={this.state.title} onChange={this.handleChange} />
                <br />
                <label>Company </label>
                <input type="input" name="company" value={this.state.company} onChange={this.handleChange} />
                <br />
                <label>Due </label>
                <input type="date" name="due" value={this.state.due} onChange={this.handleChange} />
                <br />
                <label>Applied </label>
                <input type="checkbox" name="applied" value={this.state.applied} onChange={this.handleChange} />
                <br />
                <label>Link </label>
                <input type="text" name="url" value={this.state.url} onChange={this.handleChange} />
                <br />
                <input type="submit" value="Add Job" />
            </form>
            </div>
        )
    }
}

export default JobInput