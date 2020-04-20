import React from 'react'
// import moment from 'moment';
// import ContactDashboardShow


const GitNotes = (props) => {
    debugger
    let gitActivity = props.githubData

    if (gitActivity.length < 8){
        return(
            <div>
            You still need to contact <b>{8 - gitActivity.length}</b> people this week.
            </div>
        )
    } else {
        return(
            <div>
                Great work! You've made {gitActivity} props this week!
            </div>
        )
    }
}
export default GitNotes