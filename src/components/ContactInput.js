import React from 'react';
// import action 

class ContactInput extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            company: '',
            notes: '',
            visibility: false
        };
    this.toggleVisibility=this.toggleVisibility.bind(this)
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
        if (this.state.visibility===true){
        return(
            <div className="add-contact">
                <h4 onClick={this.toggleVisibility}>Add Contact</h4>
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
                    <br />
                </form>
            </div>
        )
        } else {
            return(
                <div>
                <h4 onClick={this.toggleVisibility}>Add Contact</h4>
                </div>
            )
        }
    }
}

export default ContactInput;