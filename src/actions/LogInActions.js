//CURRENTLY  NOT USED

// https://medium.com/how-i-get-it/react-with-rails-user-authentication-8977e98762f2
// https://jasonwatmore.com/post/2017/09/16/react-redux-user-registration-and-login-tutorial-example

// const URL = 'http://localhost:3000/api/'
const URL = 'https://jobtrack-api.herokuapp.com/api/'
// {withCredentials: true}
//find user
//check second res? 

export const userLogin = ({user}) => {
    return (dispatch) => {
        fetch(URL + 'users/1/jobs', {user})
        .then(res => res.json())
        .then(res => {
            if (res.data.logged_in){
                this.props.handleLogin(res.data)
            } else {
                this.setState({
                    errors: res.data.errors
                })
            }
        }).catch(error => console.log(error))


        .then(res => res.json())
        .then(jobs => {
            let jobsArr = []
            jobs.data.forEach( obj => jobsArr.push(obj.attributes))
            dispatch({type: 'FETCH_JOBS', jobs: jobsArr}) 
        })
    }
}