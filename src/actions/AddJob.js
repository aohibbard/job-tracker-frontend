const URL = 'http://localhost:3000/api/'

export function addJob(job){
    return (dispatch) => {
        dispatch({type: 'LOAD_CONTACTS'})

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
            debugger
            dispatch({type: 'ADD_JOB', job: newJob}) 
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