import React from 'react';
import ContactInput from '../components/ContactInput'

// import action 

export default class Contacts extends React.Component{

    render(){
        return(
            <div>
                Contact List
                <ContactInput />
            </div>
        )
    }
}