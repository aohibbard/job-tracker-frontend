const URL = 'http://localhost:3000/api/'

export const fetchJobs = () => {
    return (dispatch) => {
        dispatch({type: 'LOAD_JOBS'})
        fetch(URL + 'users/1/jobs')
        .then(res => res.json())
        .then(jobs => {
            let jobsArr = []
            jobs.data.forEach( obj => jobsArr.push(obj.attributes))
            dispatch({type: 'FETCH_JOBS', jobs: jobsArr}) 
        })
    }
}