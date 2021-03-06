import React from 'react';
import { Button, Form } from 'semantic-ui-react'

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
    // this.handleSubmit=this.handleSubmit.bind(this)
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
            const validated = this.state.name.length > 2 && this.state.company.length > 2 && this.state.notes.length > 2
        return(
            <div className="add-contact">
                <h4 onClick={this.toggleVisibility} >Add Contact</h4>
                <Form role="form" size="small" onSubmit={this.handleSubmit}>
                    <Form.Field>
                    <label>Name</label>
                    <Form.Input type="text" name="name"  onChange={this.handleChange} value={this.state.name}
                    className="ui input" width={8} aria-labelledBy="Add Contact" />
                    </Form.Field>
                    <Form.Field>
                    <label>Company</label>
                    <Form.Input type="text" name="company" onChange={this.handleChange} value={this.state.company}
                    className="ui input" width={8} aria-labelledBy="Add Contact" />
                    </Form.Field>
                    <Form.Field >
                    <label>Notes</label>
                    <Form.Input type="text" name="notes" onChange={this.handleChange} value={this.state.notes}
                    className="ui input" width={8} aria-labelledBy="Add Contact" />
                    </Form.Field>
                    <Button type="submit" disabled={!validated} aria-label="Submit">Add Contact</Button>
                    <br />
                </Form>
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