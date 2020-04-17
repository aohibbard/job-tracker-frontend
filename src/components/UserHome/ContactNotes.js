import React from 'react'
import Moment from 'react-moment';
// <Moment format="dddd, MMMM Do YYYY">{this.props.job.due}</Moment></p>

// see subtract method here
// https://medium.com/better-programming/using-moment-js-in-react-native-d1b6ebe226d4


class ContactNotes extends React.Component{

    //First Set up params for current date
    //Array needs to function with date.
    //Date needs to function with week
    //Week needs to begin Monday, end Sunday. Current date needs to process its relation to prev. Mon & upcoming Sun

    //Second iterate over most recent updates
    //this.props.sort by last updated, desc
    //commit these to an array
    //if array.length <= 8
    //you still need to talk to 8 - array.length people
    //else you have spoken to everyone you need to

    //evaluate array against set up params

    render(){
        console.log(this.props)
        // debugger
        // debugger to play with contacts
        //decide what the logic is
        return(
            <div>
                Contact Notes 
            </div>
        )
    }
}

export default ContactNotes