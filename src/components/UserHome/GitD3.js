import React, { Component } from 'react'
import * as d3 from 'd3'
import moment from 'moment';


const width = 300;
const height = 150;
const margin = {top: 20, right: 5, bottom: 20, left: 35};

export default class GitD3 extends Component {

    state = {
        bars: [],
        xScale: d3.scaleTime().range([margin.left, width - margin.right]),
        yScale: d3.scaleLinear().range([height - margin.bottom, margin.top])
    };

    xAxis = d3.axisBottom().scale(this.state.xScale).tickFormat(d3.timeFormat('%b'));
    yAxis = d3.axisLeft().scale(this.state.yScale).tickFormat(d => `${d}℉`);
    
    getStateFromPops(){
        if (!this.props) return null; //return null if props not loaded
        const data = this.props.githubdata.githubdata
        //week beginning Sunday
        const fromDate = moment().weekday(0).startOf('day');
        //week ending Saturday -- not needed?
        // const to_date = moment().weekday(6).endOf('day');

        // dates for lower bar
        const difference = moment().diff(fromDate, 'days')
        const dateLimit = fromDate.add(difference, 'days')
        // filter data
        // graphData = data.filter
    }

    render() { return <div ref="canvas"></div> }
}

