// const URL = 'https://api.github.com'
const URL = 'https://api.github.com/users/aohibbard/events'

export const fetchGithub = () => {
    return (dispatch) => {
        dispatch({type: 'LOADING_GITHUB'})
        fetch(URL)
        .then(res => res.json())
        .then(data => {
            // only recognizes PushEvent s as valid comits
            // could change to const acceptedCommits = ["PushEvent", "IssuesEvent", "CreateEvent", "PullRequestEvent"]
            let legitActions = data.filter(event => event.type === "PushEvent")
            dispatch({type: 'FETCH_GITHUB', githubData: legitActions}) 
        })
        .catch(error => console.log(error))
    }
}