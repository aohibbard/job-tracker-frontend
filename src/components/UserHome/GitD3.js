import React from 'react';
import { scaleLinear } from 'd3-scale’
import { max } from 'd3-array';
import { select } from 'd3-selection';

// maybe it should be stateless?
export default class GitD3 extends React.Component{
    // sort by date of commit and create d3 Chart
    componentDidMount(){
        const dates = []
        this.props.githubData.githubData.forEach(obj => dates.push(obj.created_at.split('T')))
    }

    createBarChart() {
        const node = this.node
        const dataMax = max(dates)
        const yScale = scaleLinear()
           .domain([0, dataMax])
           .range([0, dates.size[1]])
    }

    render(){
        debugger
        return(
            <div> </div>
        )
    }
}
