import React from 'react'

export default class ContactEdit extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            id: '',
            name: '',
            company: '',
            notes: '',
            visibility: true
        };
        this.editRef = React.createRef();
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
        this.props.updateContact(this.state)
        this.setState({
            [event.target.name]: ''
        })
    }

    render(){
        return(
            <div key={this.props.contact.contact.id} id={this.props.contact.contact.id} ref={this.editRef}>
            <form onSubmit={this.handleSubmit}>
                <label>Name</label>
                <input type="text" name="name" onChange={this.handleChange} value={this.props.contact.contact.name} />
                <br />
                <label>Company</label>
                <input type="text" name="company" onChange={this.handleChange} value={this.props.contact.contact.company} />
                <br />
                <label>Notes</label>
                <input type="textarea" name="notes" onChange={this.handleChange} value={this.props.contact.contact.notes} />
                <br />
                <button onClick={() => this.props.deleteContact(this.props.contact.contact.id)}>Delete</button>
                <input type="submit" value="Update" />
                <br />
            </form>
            </div>
        )
    }
}