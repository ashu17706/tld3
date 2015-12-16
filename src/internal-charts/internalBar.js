
const InternalBar = {
  /**
   @function Builds the actual chart components with data.
   @returns {Object} context
     @description Chart object
   */
  buildChartComponents(context) {
    context.svg.selectAll('.bar')
         .data(context.data)
         .enter()
         .append('rect')
         .attr('class', 'bar')
         .attr('x', d => { return context.xScale(d[context.getxAxisLabel]); })
         .attr('width', context.xScale.rangeBand())
         .attr('y', d => { return context.yScale(d[context.getyAxisLabel]); })
         .attr('height', d => { return context.getHeight - context.yScale(d[context.getyAxisLabel]); })
         .style('fill', context.getColors[0]);

    return context;
  },

  /**
  @private
  @function Updates the bar on chart
  @param {Object} context
    @description Chart object
  @returns {Object} context
    @description Chart object
  */

  updateChartComponents(context) {
    context.svg.selectAll('.bar')
             .data(context.data)
             .attr('class', 'bar')
             .attr('x', d => { return context.xScale(d[context.getxAxisLabel]); })
             .attr('width', context.xScale.rangeBand())
             .attr('y', d => { return context.yScale(d[context.getyAxisLabel]); })
             .attr('height', d => { return context.getHeight - context.yScale(d[context.getyAxisLabel]); })
             .style('fill', context.getColors[0]);

    return context;
  },

  /**
  @private
  @function Updates the chart's style on the element
  @param {Object} context
    @description Chart object
  @returns {Object} context
    @description Chart object
  */


  styleChart(context) {
    context.element.select('svg')
        .style('font-family', context.getFontStyle)
        .attr('font-size', context.getFontSize)
        .append('text')
        .attr('class', 'title')
        .attr('x', context.getWidth * 0.5)
        .attr('y', 20)
        .text(context.getTitle);

    return context;
  },

  /**
  @function Updates color of bar chart after initial render
  @param {Array} colors
    @description Array of colors to update the chart to
  */
  updateColors(colors, context) {
    context.element.select('svg')
           .selectAll('.bar')
           .style('fill', colors);

    return context;
  },


};

export default InternalBar;