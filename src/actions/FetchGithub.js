// const URL = 'https://api.github.com'
// const URL = 'http://localhost:3000/api/'
const URL = 'https://jobtrack-api.herokuapp.com/api/'

export const fetchGithub = () => {
    return (dispatch) => {
        dispatch({type: 'LOADING_GITHUB'})
        fetch(URL)
        .then(res => res.json())
        .then(data => {
            // const acceptedCommits = ["PushEvent", "IssuesEvent", "CreateEvent", "PullRequestEvent"]
            let legitActions = data.filter(event => event.type === "PushEvent")
            dispatch({type: 'FETCH_GITHUB', githubData: legitActions}) 
        })
        .catch(error => console.error(error))
    }
}