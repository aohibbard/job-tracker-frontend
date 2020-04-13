import cuid from 'cuid';

export default function contactReducer( state = {
    loading: false,
    contacts: [],
    }, action){
        switch(action.type){
            case 'ADD_CONTACT':
                const newContact = {id: cuid(), name: action.contact.name, company: action.contact.company, notes: action.contact.notes}
                return {...state,
                    contacts: [...state.contacts, newContact],
                    loading: false
                };
            case 'LOAD_CONTACT':
                return state;
            case 'EDIT_CONTACT':
                return state;
            case 'DELETE_CONTACT':
                // filter
                return state;
            default:
                return state;
        }
    }