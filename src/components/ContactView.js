import React from 'react';
import ContactEdit from './ContactEdit'

export default class ContactView extends React.Component{

    state = {
        buttonClick: false
    }

    handleClick = () => {
        this.setState({
          buttonClick: !this.state.buttonClick
        });
      };


    // toggleVisibility(){
    //     if(this.state.visibility===true){
    //         this.setState({
    //             visibility: false
    //         })
    //     } else {
    //         this.setState({
    //             visibility: true
    //         })
    //     }
    // }

    render(){

        return(
            <div id={this.props.contact.id} className="edit-contact">
                Contact
                <p>Name: {this.props.contact.name}</p>
                <p>Company: {this.props.contact.company}</p>
                <p>Notes: {this.props.contact.notes}</p>
                <button onClick={this.handleClick}>Update</button>
                {this.state.buttonClick &&
                <ContactEdit
                    key={this.props.contact.id}
                    contact={this.props}
                    updateContact={this.props.updateContact}
                    deleteContact={this.props.deleteContact}/>}
                {/* EDIT CONTACT */}
                {/* <button onClick={() => this.props.deleteContact(this.props.contact.id)}>Delete</button> */}
            </div>
        )
    }

}