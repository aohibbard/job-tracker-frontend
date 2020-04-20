import React from 'react'
// import moment from 'moment';
// import ContactDashboardShow


const GitNotes = (props) => {
    const gitActivity = props.githubData.githubData.length
    if (gitActivity < 8){
        return(
            <div>
            You still need to make <b>{8 - gitActivity}</b> commits on Github this week.
            </div>
        )
    } else {
        return(
            <div>
                Great work! You've made <b>{gitActivity}</b> commits on Github this week!
            </div>
        )
    }
}
export default GitNotes