import React from 'react';

export default class ContactView extends React.Component{

    //toggle view
    constructor(props) {
        super(props);
        this.state = {
            name: this.props.contact.name,
            company: this.props.contact.company,
            notes: this.props.contacts.notes,
            visibility: false
        };
    this.toggleVisibility=this.toggleVisibility.bind(this)
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit(event){
        event.preventDefault()
        this.props.updateContact(this.state)
        this.setState({
            [event.target.name]: ''
        })
    }

    handleToggleView = (event) => {
        return(
            <React.Fragment key={this.props.contact.id}>
            <form onSubmit={this.handleSubmit}>
                <label>Name</label>
                <input type="text" name="name" onChange={this.handleChange} value={this.props.contact.name} />
                <br />
                <label>Company</label>
                <input type="text" name="company" onChange={this.handleChange} value={this.props.contact.company} />
                <br />
                <label>Notes</label>
                <input type="textarea" name="notes" onChange={this.handleChange} value={this.props.contact.notes} />
                <br />
                <button onClick={() => this.props.deleteContact(this.props.contact.id)}>Delete</button>
                <input type="update" />
                <br />
            </form>
            </React.Fragment>
        )
    }

    render(){
        console.log(this.props)
        return(
            <div id={this.props.contact.id}>
                Contact
                <p>Name: {this.props.contact.name}</p>
                <p>Company: {this.props.contact.company}</p>
                <p>Notes: {this.props.contact.notes}</p>

                {/* EDIT CONTACT */}
                <button onClick={() => this.props.deleteContact(this.props.contact.id)}>Delete</button>
            </div>
        )
    }

}