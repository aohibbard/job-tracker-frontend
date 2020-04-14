export default function jobReducer( state = {
    loading: false,
    jobs: [],
    }, action){
        switch(action.type){
            case 'LOADING_JOBS':
                return {...state,
                    jobs: [...state.jobs],
                    loading: true
                };
            case 'FETCH_JOBS':
                return {
                    ...state,
                    jobs: action.jobs,
                    loading: false
                };
            case 'ADD_JOB':
                debugger
            const newJob = {
                // change to show real id
                id: action.job.title,
                title: action.job.title,
                company: action.job.company,
                due: action.job.due,
                applied: action.job.applied,
                url: action.job.url 
            }
            debugger
            return {...state,
                jobs: [...state.jobs, newJob],
                //this line is causing the double contacts
                loading: false
            };
            default:
                return state;
        }
    }