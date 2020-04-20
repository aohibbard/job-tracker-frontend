import React  from 'react';

class JobInput extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            title: '',
            company: '',
            due: '',
            applied: false,
            url: '',
            visibility: false,
        }
        this.toggleVisibility=this.toggleVisibility.bind(this);
    }

    toggleVisibility(){
        if(this.state.visibility===true){
            this.setState({
                visibility: false
            })
        } else {
            this.setState({
                visibility: true
            })
        }
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
        if (this.state.visibility===true){
            const validated = this.state.title > 2 && this.state.company > 3 

        return(
            <div className="JobInput">
                <h4 onClick={this.toggleVisibility}>Add Job</h4>
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
                <input type="submit" value="Add Job" disabled={!validated} />
            </form>
            </div>
        )
        } else {
            return(
                <div className="JobInput">
                <h4 onClick={this.toggleVisibility}>Add Job</h4>
                </div>
            )
        }
    }
}

export default JobInput