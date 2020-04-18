import React from 'react'
import moment from 'moment';
// <Moment format="dddd, MMMM Do YYYY">{this.props.job.due}</Moment></p>

// see subtract method here
// https://medium.com/better-programming/using-moment-js-in-react-native-d1b6ebe226d4


class ContactNotes extends React.Component{

    state = {
        contacts: []
    }

    componentDidMount(){
        this.showRecentContacts()
    }

    //create array of contacts that been updated this week
    showRecentContacts(){
        let contactActivity = []
        //week beginning Sunday
        const from_date = moment().weekday(0);
        //week ending Saturday
        const to_date = moment().weekday(6);
        //See which contacts have been updated in that span & add to contactActivity
        for (const contact of this.props.contacts.contacts){
            if (moment(contact.updated_at).isBetween(from_date, to_date)){
                contactActivity.push(contact)
            }
        }
        this.setState({
            contacts: contactActivity
        })
    }

    render(){
        //check number of contacts updated
        let contactNum = 8 - this.state.contacts.length
        if (contactNum < 8 && contactNum !== 0){
            return(
                <div>
                    You still need to contact {contactNum} people this week.
                    Contacts you have made:
                    <ul className="weekly-contacts">
            {this.state.contacts.map(contact => <li key={contact.id} id={contact.id}>{contact.name}</li>)}
                    </ul>
                </div>
            )
        } else {
            return(
                <p>Great work! You've contacted {this.state.contacts.length} people this week!</p>
            )
        }
    }
}

export default ContactNotes