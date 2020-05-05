// const URL = 'http://localhost:3000/api/'
const URL = 'https://jobtrack-api.herokuapp.com/api/'

export const fetchContacts = () => {
    return (dispatch) => {
        dispatch({type: 'LOAD_CONTACTS'})
        fetch(URL + 'users/1/contacts')
        .then(res => res.json())
        .then(contacts => {
            let contactArr = []
            contacts.data.forEach( obj => contactArr.push(obj.attributes))
            dispatch({type: 'FETCH_CONTACTS', contacts: contactArr}) 
        })
    }
}

// .then(contacts => {
//     console.log(contacts)
//     parse data & assign to variable
//     dispatch({type: XYZ, variable})
// })