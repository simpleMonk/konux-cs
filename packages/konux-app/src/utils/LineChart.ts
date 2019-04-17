import * as d3 from 'd3';
import { ChartOptions, Point } from '../components/types';

/**
 * Interface NewPointLike
 */
interface NewPointLike {
  x: Date | null;
  y: number;
}

/**
 * LineChart
 *   - Initialize and Render
 */
const LineChart = (dom: HTMLDivElement | null, chartOptions: ChartOptions) => {
  // Set Margin, Width and Height
  const margin = chartOptions.margin;
  const width = chartOptions.width;
  const height = chartOptions.height;

  // Parse Time and Formatter
  const timeValue = function(d: Point) {
    return new Date(d.x);
  };
  const dataset: Array<NewPointLike> = chartOptions.data.map(function(
    d: Point,
    i
  ) {
    return { x: timeValue(d), y: d.y };
  });

  // Get Max and min dates/values
  const datasetX: Array<Date | null> = dataset.map((d: NewPointLike) => d.x);
  const maxDate = new Date(Math.max.apply(null, <any>datasetX));
  const minDate = new Date(Math.min.apply(null, <any>datasetX));

  const datasetY: Array<number | null> = dataset.map((d: NewPointLike) => d.y);
  const maxY = Math.max.apply(null, <any>datasetY);
  const minY =
    Math.min.apply(null, <any>datasetY) < 0
      ? Math.min.apply(null, <any>datasetY)
      : 0;

  // The number of datapoints
  const n = chartOptions.data.length || 0;

  // Scales
  const xScale: any = d3.scaleTime().domain([minDate, maxDate]);
  const yScale = d3.scaleLinear().domain([minY, maxY]);
  const xAxis = d3
    .axisBottom(xScale)
    .tickFormat(<any>d3.timeFormat('%b-%d-%H:%M'));

  // Lines
  const line: any = d3.line();

  // Add SVG
  let svg = d3.select(dom).append('svg');
  let path = svg.append('path').attr('class', 'line');

  const div = d3
    .select('body')
    .append('div')
    .attr('class', 'tooltip')
    .style('opacity', 0);

  function showToolTip(d: any) {
    div
      .transition()
      .duration(200)
      .style('opacity', 1);
    div
      .html(
        `<div>
          <div class="tooltip__title">${d3.timeFormat('%b-%d-%H:%M')(d.x)}</div>
          <div class="tooltip__content">${d.y}</div>
        </div>`
      )
      .style('left', `${d3.event.clientX + 8}px`)
      .style('top', `${d3.event.clientY - 38}px`);
  }

  function hideToolTip(d: any) {
    div
      .transition()
      .duration(500)
      .style('opacity', 0);
  }

  /**
   *  Render function takes width and height
   */
  function render(newWidth: number, newHeight: number) {
    // Set x scale range
    xScale.range([margin.left, newWidth]);

    // Set y scale range
    yScale.range([newHeight, margin.top]);

    // Set SVG dimensions
    svg
      .attr('width', newWidth)
      .attr('height', newHeight)
      .attr(
        'viewBox',
        `0 0 ${newWidth + margin.left + margin.right} ${newHeight + margin.top}`
      )
      .attr('preserveAspectRatio', 'xMinYMin meet')
      .append('g')
      .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');

    // Add X axis
    svg
      .selectAll('.x.axis')
      .attr('transform', `translate( 0, ${newHeight})`)
      .call(<any>xAxis)
      .selectAll('text')
      .style('text-anchor', 'end')
      .attr('dx', '-.8em')
      .attr('dy', '.15em')
      .attr('transform', 'rotate(-55)');

    // Add Y Axis
    svg
      .select('.y.axis')
      .attr('transform', `translate( ${margin.left}, 0)`)
      .call(<any>d3.axisLeft(yScale)); // Create an axis component with d3.axisLeft

    //  Generate Line
    path.attr('d', line);

    // Remove existing dots
    svg.selectAll('.dot').remove();

    // Create new dots always
    svg
      .selectAll('.dot')
      .data(dataset)
      .enter()
      .append('circle')
      .attr('class', 'dot')
      .attr('cx', function(d: any) {
        return xScale(d.x);
      })
      .attr('cy', function(d: any) {
        return yScale(d.y);
      })
      .attr('r', 5)
      .on('mouseover', showToolTip)
      .on('mouseout', hideToolTip);
  }

  /**
   *  Initialize and render Line chart
   */
  function initialize() {
    // Set x scale range
    xScale.range([margin.left, width]);

    // Set y scale range
    yScale.range([height, margin.bottom]);

    // Line generator
    line
      .x(function(d: any) {
        return xScale(d.x);
      })
      .y(function(d: any) {
        return yScale(d.y);
      })
      .curve(d3.curveCardinal.tension(0.5));

    svg.append('g').attr('class', 'x axis');
    svg.append('g').attr('class', 'y axis');

    // Binds data to line
    path.datum(dataset);

    // Render based on height and width
    render(width, height);
  }

  return {
    initialize,
    render
  };
};

export { LineChart };
