// import cuid from 'cuid';

export default function contactReducer( state = {
    loading: false,
    contacts: [],
    }, action){
        switch(action.type){
            case 'LOAD_CONTACT':
                return {
                    ...state,
                    contacts: [...state.contacts],
                    loading: true
                };
            case 'FETCH_CONTACTS':
                return {
                    ...state,
                    contacts: action.contacts,
                    loading: false
                }
            case 'ADD_CONTACT':
                const newContact = {
                    id: action.contacts.id,
                    name: action.contacts.name,
                    company: action.contacts.company,
                    notes: action.contacts.notes}
                return {...state,
                    contacts: [...state.contacts, newContact],
                    //this line is causing the double contacts
                    loading: false
                };
            case 'EDIT_CONTACT':
                return state;
            case 'DELETE_CONTACT':
                // filter
                return state;
            default:
                return state;
        }
    }