
export default function contactReducer( state = {
    loading: false,
    contact: [],
    }, action){
        switch(action.type){
            case 'ADD_CONTACT':
                return state;
            case 'LOAD_CONTACT':
                return state;
            default:
                return state;
        }
    }