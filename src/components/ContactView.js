import React from 'react';

export default class ContactView extends React.Component{

    render(){
        console.log(this.props)
        return(
            <div id={this.props.contact.id}>
                Contact
                <p>Name: {this.props.contact.name}</p>
                <p>Company: {this.props.contact.company}</p>
                <p>Notes: {this.props.contact.notes}</p>
                <button onClick={() => this.props.deleteContact(this.props.contact.id)}>Delete</button>
            </div>
        )
    }

}