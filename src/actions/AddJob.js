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

        debugger
        fetch(URL + 'users/1/jobs', configObj)
        .then(res => res.json())
        .then(job => {
            let newJob = job.data.attributes
            debugger
            dispatch({type: 'ADD_JOB', job: newJob}) 
        })
    }
}