import React from 'react'
import moment from 'moment';
// import ContactDashboardShow


const ContactNotes = (props) => {

    let contactActivity = [];
    //week beginning Sunday
    const from_date = moment().weekday(0).startOf('day');
    //week ending Saturday
    const to_date = moment().weekday(6).endOf('day');
    //See which contacts have been updated in that span & add to contactActivity
    for (const contact of props.contacts.contacts){
        if (moment(contact.updated_at).isBetween(from_date, to_date)){
            contactActivity.push(contact)
        }
    }
    if (contactActivity.length < 8){
        return(
            <div>
            You still need to contact <b>{8 - contactActivity.length}</b> people this week.
            <br />
            You have contacted:
            <br />
            {contactActivity.map(contact => <React.Fragment key={contact.id}> {contact.name} <br /></React.Fragment>) }
            </div>
        )
    } else {
        return(
            <div>
                Great work! You've contacted {contactActivity.length} people this week!
            </div>
        )
    }
    
}

// class ContactNotes extends React.Component{

//     state = {
//         contacts: []
//     }

//     componentDidMount(){
//         this.showRecentContacts()
//     }


//     //create array of contacts that been updated this week
//     showRecentContacts(){
//         let contactActivity = []
//         //week beginning Sunday
//         const from_date = moment().weekday(0).startOf('day');
//         //week ending Saturday
//         const to_date = moment().weekday(6).endOf('day');
//         //See which contacts have been updated in that span & add to contactActivity
//         for (const contact of this.props.contacts.contacts){
//             if (moment(contact.updated_at).isBetween(from_date, to_date)){
//                 contactActivity.push(contact)
//             }
//         }
//         this.setState({
//             contacts: contactActivity
//         })
//     }

//     render(){
//         //check number of contacts updated
//         let contactNum = 8 - this.state.contacts.length
//         if (contactNum < 8){
//             return(
//                 <div>
//                     You still need to contact <b>{contactNum}</b> people this week.
//                     <br />
//                     You have contacted:
//             {this.state.contacts.map(contact => <p id={contact.id}>{contact.name}</p>)}
//                 </div>
//             )
//         } else {
//             return(
//                 <p>Great work! You've contacted {this.state.contacts.length} people this week!</p>
//             )
//         }
//     }
// }

export default ContactNotes