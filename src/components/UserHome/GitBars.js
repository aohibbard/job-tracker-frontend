import {
    max, scaleBand, scaleLinear, axisBottom, axisLeft, select
} from 'd3'
import moment from 'moment';
import d3Tip from "d3-tip";

const GitBars = (props) => {

    const fromDate = moment().weekday(0).startOf('day');
    //week ending Saturday -- not needed?
    // const to_date = moment().weekday(6).endOf('day');

    // dates for lower bar
    const difference = moment().diff(fromDate, 'days')
    const dateLimit = fromDate.add(difference, 'days')


    // setting up constants for sizes
    const width = 350
    const height = 150
    const padding = .2
    const margin = ({top: 80, right: 0, bottom: 80, left: 80})
    const innerWidth = width - margin.left - margin.right;
    const innerHeight = height - margin.top - margin.bottom;
    // const vizName = "viz" + id


    // setting constants for text labels and title
    const xAxisLabel = "Number of Days"
    const yAxisLabel = "Commits"
    const title = "Github Activity"

    const xScale = scaleBand()
        .domain(dateLimit.map(d => d.day))
        .range([margin.left, width - margin.right])
        .padding(padding)

    const yScale = scaleLinear()
        .domain([0, max(this.props.props.githubData.githubData.length)])
        .range([height - margin.bottom, margin.top])

    const xAxis = (g) => {
        g.attr("transform", `translate(0,${height - margin.bottom})`)
        .call(axisBottom(xScale).ticks(null, dateLimit.length))
        .tickValues(xScale.domain())
        // check tick vailues?

        .call(g => g.append("text"))
            .attr("x", -margin.left)
            .attr("y", 10)
    }
    
    const yAxis = (g) => {
        g.attr("transform", `translate(${margin.left},0)`)
        .call(axisLeft(yScale).ticks(null, this.props.githubData.githubData.length).tickSize(-innerWidth))
            
            .call(g => g.select(".domain").remove())

        .call(g => g.append("text")
            .attr("x", -margin.left)
            .attr("y", 10)
            .attr("fill", "currentColor")
            .attr("text-anchor", "start")
        )
    }



    // setting up tooltip with data labels
    const tip = d3Tip()
        .attr('class', 'd3-tip')
        .offset([-10, 0])
        .html(function(d) {
            return "<p>" + "<span style='color:white'>" + "Day " + dateLimit.count + "<br/>" +
                d.date.toLocaleDateString() + "<br/>" + "</span>" +
                "<span style='color:#BD2D28'>" + d.total + " Total" + "<br/>" + "</span>" +
                "<span style='color:#E3BA22'>" + d.active + " Active" + "<br/>" + "</span>" +
                "<span style='color:#A0B700'>" + d.recovered + " Recovered" + "<br/>" + "</span>" +
                "<span style='color:#BA5F06'>" + d.deaths + " Deaths" + "</p>" 
        })

    // setting up svg element on card
    const svg = select(`Vizname`)
        .append("svg")
        .attr("preserveAspectRatio", "xMinYMid meet")
        .attr("viewBox", [0, 0, width, height])

    // G is assigned here
    const g = svg.append("g")
        .selectAll('rect')
        .data(this.props.githubData.githubData)
        .join("rect")
        .attr('x', d => xScale(d.dayCount))

        .attr("y", d => yScale("Commits"))
        .attr("width", xScale.bandwidth())
        .attr("class", "bar")

    const xAxisG = svg.append('g')
        .call(xAxis)
        
    xAxisG.select('.domain').remove();
    
    xAxisG.append('text')
        .attr('class', 'axis-label')
        .attr('y', 45)
        .attr('x', innerWidth / 2)
        .attr('fill', 'black')
        .text(xAxisLabel)

    const yAxisG = svg.append('g')
        .call(yAxis)
        
    yAxisG.select('.domain').remove();
    
    yAxisG.append('text')
        .attr('class', 'axis-label')
        .attr('y', -60)
        .attr('x', -height / 2)
        .attr('fill', 'black')
        .attr('transform', `rotate(-90)`)
        .attr('text-anchor', 'middle')
        .text(yAxisLabel);



    const titleG = svg.append("g")

    // titleG.append('text')
    //     .attr('class', 'title')
    //     .attr('x', width / 2)
    //     .attr('y', 40)
    //     .attr('text-anchor', 'middle')
    //     .text(title);

    //     titleG.append('text')
    //     .attr('class', 'subtitle')
    //     .attr('x', width / 2)
    //     .attr('y', 70)
    //     .attr('text-anchor', 'middle')
    //     .text(subtitle());

    svg.call(tip);

}

export default GitBars