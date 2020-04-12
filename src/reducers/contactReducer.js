import cuid from 'cuid';

export default function contactReducer( state = {
    loading: false,
    contacts: [],
    }, action){
        switch(action.type){
            case 'ADD_CONTACT':
                const contact = {id: cuid(), }
                return {...state,
                    contacts: [...state.contacts, contact],
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