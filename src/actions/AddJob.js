const URL = 'http://localhost:3000/api/'

export function addJob(job){
    return (dispatch) => {
        dispatch({type: 'LOADING_JOBS'})

        let configObj = {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: JSON.stringify(job)
        }

        fetch(URL + 'users/1/jobs', configObj)
        .then(res => res.json())
        .then(job => {
            let newJob = job.data.attributes
            dispatch({type: 'ADD_JOB', job: newJob}) 
        })
    }
}

export function updateJob(job){
    return (dispatch) => {
        dispatch({type: 'LOADING_JOBS'})

        let configObj = {
            method: 'PATCH',
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: JSON.stringify(job)
        }

        fetch(URL + `users/1/jobs/${job.id}`, configObj)
        .then(res => res.json())
        .then(job => {
            let jobToUpdate = job.data.attributes
            dispatch({type: 'UPDATE_JOB', job: jobToUpdate}) 
        })
    }
}

export function deleteJob(jobId){
    return(dispatch) => {
        dispatch({type: 'LOAD_CONTACTS'})

        fetch(URL +`users/1/jobs/${jobId}`, {
            method: 'DELETE'
        })
        .then(dispatch({type: 'DELETE_JOB', jobId}))
    }
}