import React from 'react';
// import action 

class ContactInput extends React.Component{

    state = {
        name: '',
        company: '',
        notes: ''
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    //send to reducer
    handleSubmit = (event) => {
        event.preventDefault()
        this.props.addContact(this.state)
        this.setState({
            name: '',
            company: '',
            notes: ''
        })
    }

    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>Name</label>
                    <input type="text" name="name" onChange={this.handleChange} value={this.state.name} />
                    <br />
                    <label>Company</label>
                    <input type="text" name="company" onChange={this.handleChange} value={this.state.company} />
                    <br />
                    <label>Notes</label>
                    <input type="text" name="notes" onChange={this.handleChange} value={this.state.notes} />
                    <br />
                    <input type="submit" />
                </form>
            </div>
        )
    }
}

export default ContactInput;