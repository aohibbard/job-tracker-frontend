import React from 'react';
import moment from 'moment';


const GitNotes = (props) => {
    //week beginning Sunday
    const fromDate = moment().weekday(0).startOf('day');
    //week ending Saturday
    const toDate = moment().weekday(6).endOf('day');
    const difference = moment().diff(fromDate, 'days')
    const dateLimit = fromDate.add(difference, 'days')
    debugger
    // should filter using above constants
    const gitActivity = props.githubData.githubData.length
    const reposUsed = [] 
    props.githubData.githubData.forEach(obj => reposUsed.push(obj.repo.id))
    const mode = function(arr){
        let numMapping = {};
        for (let i=0; i < arr.length; i++){
            if(numMapping[arr[i]] === undefined){
                numMapping[arr[i]] = 0
            }
            numMapping[arr[i]] += 1;
        }
        let greatestFreq = 0
        let mostCommon;
        for(const val in numMapping){
            if(numMapping[val] > greatestFreq){
                greatestFreq = numMapping[val];
                mostCommon = val;
            }
        }
        return mostCommon
    }

    if (gitActivity < 8){
        return(
            <div>
            You still need to make <b>{8 - gitActivity}</b> commits on Github this week.
            </div>
        )
    } else {
        mode(reposUsed)
        const popularRepo = props.githubData.githubData.find(obj => obj.repo.id)
        const URL = "https://www.github.com/" + popularRepo.repo.name
        return(
            <div>
                <p>Great work! You've made <b>{gitActivity}</b> commits on Github this week!</p>
                <br />
                <p>You're most active repository this week is <a href={URL}>{popularRepo.repo.name.split('/')[1]}</a></p>
            </div>
        )
    }
}

export default GitNotes