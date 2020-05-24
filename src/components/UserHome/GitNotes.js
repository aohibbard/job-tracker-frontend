import React from 'react';
import * as d3 from "d3";

// import moment from 'moment';
// import ContactDashboardShow


const GitNotes = (props) => {
    const gitActivity = props.githubData.githubData.length
    const reposUsed = [] 
    props.githubData.githubData.forEach(obj => reposUsed.push(obj.repo.id))
    // const mode = function(arr){
    //     let numMapping = {};
    //     for (let i=0; i < arr.length; i++){
    //         if(numMapping[arr[i]] === undefined){
    //             numMapping[arr[i]] = 0
    //         }
    //         numMapping[arr[i]] += 1;
    //     }
    //     let greatestFreq = 0
    //     let mostCommon;
    //     for(const val in numMapping){
    //         if(numMapping[val] > greatestFreq){
    //             greatestFreq = numMapping[val];
    //             mostCommon = val;
    //         }
    //     }
    //     return mostCommon
    // }
    // mode(reposUsed)
    // const popularRepo = props.githubData.githubData.find(obj => obj.repo.id)
    // const URL = "https://www.github.com/" + popularRepo.repo.name
    if (gitActivity < 8){
        return(
            <div>
            You still need to make <b>{8 - gitActivity}</b> commits on Github this week.
            </div>
        )
    } else {
        return(
            <div>
                <p>Great work! You've made <b>{gitActivity}</b> commits on Github this week!</p>
                <br />
                {/* <p>You're most popular repository this week is <a href={URL}>{popularRepo.repo.name.split('/')[1]}</a></p> */}
            </div>
        )
    }
    // find most common repo (math.mode)? (props.githubData.githubData=> obj.repo.id)
    // sort by date of commit
}

export default GitNotes