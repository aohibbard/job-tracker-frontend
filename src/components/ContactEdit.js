import React from 'react'
import { Button } from 'semantic-ui-react'


export default class ContactEdit extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            id: this.props.contact.contact.id,
            name: this.props.contact.contact.name,
            company: this.props.contact.contact.company,
            notes: this.props.contact.contact.notes,
        };
        this.editRef = React.createRef();
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount(){
        this.editRef.current.scrollIntoView();
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
            id: '',
            name: '',
            company: '',
            notes: '',
        })
        //collapse form
        this.props.handler()
    }

    handleDelete = (event) => {
        this.props.deleteContact(this.props.contact.contact.id)
        this.props.handler()
    }

    render(){
        return(
            <div key={this.props.contact.contact.id} id={this.state.id} ref={this.editRef}>
            <form onSubmit={this.handleSubmit}>
                <label>Name</label>
                <input type="text" name="name" onChange={this.handleChange} value={this.state.name} />
                <br />
                <label>Company</label>
                <input type="text" name="company" onChange={this.handleChange} value={this.state.company} />
                <br />
                <label>Notes</label>
                <input type="textarea" name="notes" onChange={this.handleChange} value={this.state.notes} />
                <br />
                <Button.Group>
                <Button onClick={() => this.handleDelete()}>Delete</Button>
                <Button.Or />
                <Button type="submit" positive>Update</Button>
                </Button.Group>
                {/* <button onClick={() => this.handleDelete()}>Delete</button>
                <input type="submit" value="Update" />
                <br /> */}
            </form>
            </div>
        )
    }
}