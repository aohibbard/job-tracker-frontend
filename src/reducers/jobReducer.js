export default function jobReducer( state = {
    loading: false,
    job: [],
    }, action){
        switch(action.type){
            case 'CREATE_JOB':
                return state;
            case 'LOAD_JOB':
                return state;
            default:
                return state;
        }
    }