export default function gitReducer ( state = {
    loading: false,
    githubData: [],
    }, action){
        switch(action.type){
            case 'LOADING_GITHUB':
                return {...state,
                    githubData: [...state.githubData],
                    loading: true
                };
            case 'FETCH_GITHUB':
                return {
                    ...state,
                    githubData: action.githubData,
                    loading: false
                };
            default:
                return state;
        }
    }