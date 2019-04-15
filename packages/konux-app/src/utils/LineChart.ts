import * as d3 from 'd3';
import { ChartOptions, Point } from '../components/types';
import { array } from 'prop-types';

interface NewPointLike {
  x: Date | null;
  y: number;
}

const LineChart = (dom: HTMLDivElement | null, chartOptions: ChartOptions) => {
  return {
    initialize() {
      const margin = chartOptions.margin;
      const width = chartOptions.width;
      const height = chartOptions.height;

      const parseTime = d3.timeParse('%Y-%m-%dT%H:%M:%S%Z');
      const timeValue = function(d: Point) {
        return parseTime(d.x);
      };
      const newChartData: Array<NewPointLike> = chartOptions.data.map(function(
        d: Point,
        i
      ) {
        return { x: timeValue(d), y: d.y };
      });

      const newChartDataX: Array<Date | null> = newChartData.map(
        (d: NewPointLike) => d.x
      );
      const maxDate = new Date(Math.max.apply(null, <any>newChartDataX));
      const minDate = new Date(Math.min.apply(null, <any>newChartDataX));

      const newChartDataY: Array<number | null> = newChartData.map(
        (d: NewPointLike) => d.y
      );
      const maxY = Math.max.apply(null, <any>newChartDataY);
      const minY = Math.min.apply(null, <any>newChartDataY);

      // The number of datapoints
      const n = chartOptions.data.length || 0;

      // 5. X scale will use the index of our data
      const xScale: any = d3
        .scaleTime()
        .domain([minDate, maxDate])
        .range([0, width]);

      // 6. Y scale will use the randomly generate number
      const yScale = d3
        .scaleLinear()
        .domain([minY, maxY]) // input
        .range([height, 0]); // output

      // 7. d3's line generator
      const line: any = d3
        .line()
        .x(function(d: any, i) {
          console.log(xScale(d.x));
          return xScale(d.x);
        }) // set the x values for the line generator
        .y(function(d: any) {
          return yScale(d.y);
        }) // set the y values for the line generator
        .curve(d3.curveMonotoneX); // apply smoothing to the line

      // 8. An array of objects of length N. Each object has key -> value pair, the key being "y" and the value is a random number
      const dataset = newChartData;

      // 1. Add the SVG to the page and employ #2
      const svg = d3
        .select(dom)
        .append('svg')
        .attr('width', width + margin.left + margin.right)
        .attr('height', height + margin.top + margin.bottom)
        .append('g')
        .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');

      // 3. Call the x axis in a group tag
      svg
        .append('g')
        .attr('class', 'x axis')
        .attr('transform', 'translate(0,' + height + ')')
        .call(
          d3.axisBottom(xScale).tickFormat(<any>d3.timeFormat('%b-%d-%H:%M'))
        )
        .selectAll('text')
        .style('text-anchor', 'end')
        .attr('dx', '-.8em')
        .attr('dy', '.15em')
        .attr('transform', 'rotate(-55)'); // Create an axis component with d3.axisBottom

      // 4. Call the y axis in a group tag
      svg
        .append('g')
        .attr('class', 'y axis')
        .call(d3.axisLeft(yScale)); // Create an axis component with d3.axisLeft

      // 9. Append the path, bind the data, and call the line generator
      svg
        .append('path')
        .datum(dataset) // 10. Binds data to the line
        .attr('class', 'line') // Assign a class for styling
        .attr('d', line); // 11. Calls the line generator

      // 12. Appends a circle for each datapoint
      svg
        .selectAll('.dot')
        .data(dataset)
        .enter()
        .append('circle') // Uses the enter().append() method
        .attr('class', 'dot') // Assign a class for styling
        .attr('cx', function(d, i) {
          return xScale(d.x);
        })
        .attr('cy', function(d) {
          return yScale(d.y);
        })
        .attr('r', 5)
        .on('mouseover', function(a, b, c) {
          console.log(a);
        })
        .on('mouseout', function() {});
    },
    destroy() {
      console.log('destroy:', dom);
    }
  };
};

export { LineChart };
