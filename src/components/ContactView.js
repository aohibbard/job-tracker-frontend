import React from 'react';
import ContactEdit from './ContactEdit'
import { Card } from 'semantic-ui-react';


export default class ContactView extends React.Component{

    // state = {
    //     buttonClick: false
    // }
    constructor(props){
        super(props)
        this.state = {
            buttonClick: false
        }
        this.handler = this.handler.bind(this)
    }

    handleClick = () => {
        this.setState({
          buttonClick: !this.state.buttonClick
        });
      };
    
    handler(){
        this.setState({
          buttonClick: false
        });
      };

    render(){
        return(
            <div id={this.props.contact.id} className="edit-contact">
                <Card>
                <Card.Content header={this.props.contact.name} />
                <Card.Content>Company: {this.props.contact.company}</Card.Content>
                <Card.Content>Notes: {this.props.contact.notes}</Card.Content>
                <Card.Content extra>
                  <button onClick={this.handleClick}>Update</button>
                  {/* <p>Updated: {this.props.contacts.updated_at}</p> */}
                </Card.Content>
                {this.state.buttonClick &&
                <ContactEdit
                    key={this.props.contact.id}
                    contact={this.props}
                    updateContact={this.props.updateContact}
                    deleteContact={this.props.deleteContact}
                    handler={this.handler}/>}
                </ Card>
            </div>
        )
    }

}