export default function jobReducer( state = {
    loading: false,
    jobs: [],
    }, action){
        switch(action.type){
            case 'ADD_JOB':
            debugger
            const newJob = {
                id: Math.floor(Math.random() * 6),
                title: action.job.title,
                company: action.job.company,
                due: action.job.due,
                applied: action.job.applied,
                ur: action.job.url 
            }
            return {...state,
                jobs: [...state.jobs, newJob],
                //this line is causing the double contacts
                loading: false
            };
                return state;
            case 'LOADING_JOBS':
                return state;
            case 'FETCH_JOBS':
                return state;
            default:
                return state;
        }
    }