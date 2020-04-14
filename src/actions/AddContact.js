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
            dispatch({type: 'FETCH_CONTACTS', contacts: newContact}) 
        })
    }
}