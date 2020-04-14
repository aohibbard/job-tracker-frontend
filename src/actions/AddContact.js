const URL = 'http://localhost:3000/api/'

export function addContact(contact){
    
    return (dispatch) => {
        dispatch({type: 'LOAD_CONTACTS'})

        let configObj = {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: JSON.stringify(contact)
        }

        fetch(URL + 'users/1/contacts', configObj)
        .then(res => res.json())
        .then(contact => {
            let newContact = contact.data.attributes
            dispatch({type: 'ADD_CONTACT', contacts: newContact}) 
        })
    }
}

export function deleteContact(contactId){
    return(dispatch) => {
        dispatch({type: 'LOAD_JOBS'})

        fetch(URL +`users/1/contacts/${contactId}`, {
            method: 'DELETE'
        })
        .then(dispatch({type: 'DELETE_CONTACT', contactId}))
    }
}