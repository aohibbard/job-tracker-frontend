import React from 'react'

export default class ContactEdit extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            id: this.props.contact.contact.id,
            name: this.props.contact.contact.name,
            company: this.props.contact.contact.company,
            notes: this.props.contact.contact.name,
            visibility: true
        };
        this.editRef = React.createRef();
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount(){
        this.editRef.current.scrollIntoView();
    }

    // editRef = React.createRef<HTMLDivElement>();


    // componentDidMount(){
    //     if (this.editRef && this.editRef.current){
    //         this.editRef.Ref.scrollIntoView()
    //     }
    // }
    // componentDidMount(){
    //     this.setState({
    //         id: this.props.contact.contact.id,
    //         name: this.props.contact.contact.name,
    //         company: this.props.contact.contact.company,
    //         notes: this.props.contact.contact.name
    //     })
    // }

    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         name: this.props.contact.name,
    //         company: this.props.contact.company,
    //         notes: this.props.contact.notes,
    //         visibility: false
    //     };
    // this.toggleVisibility=this.toggleVisibility.bind(this)
    // }

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

    handleChange = (event) => {
        // debugger
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit(event){
        event.preventDefault()
        debugger
        const updateContact = {
            id: this.state.id,
            name: this.state.name,
            company: this.state.company,
            notes: this.state.name,
        }
        debugger
        this.props.updateContact(updateContact)
        this.setState({
            [event.target.name]: ''
        })
        //toggle visibility to false
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
                <button onClick={() => this.props.deleteContact(this.props.contact.contact.id)}>Delete</button>
                <input type="submit" value="Update" />
                <br />
            </form>
            </div>
        )
    }
}