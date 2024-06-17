
/**
 * Analyzes the chart type based on provided options.
 * @param options The chart options to analyze.
 * @returns An object indicating whether the chart is a bar chart or circular chart.
 */
export const analyzeChartType = (
  options: any,
): {
  isBarChart: boolean;
  isCircularChart: boolean;
} => {
  const isBarChart = options.chart?.type === 'bar' || options.series?.[0].type === 'bar';
  const isCircularChart = options.chart?.type === 'pie';
  return {
    isBarChart,
    isCircularChart,
  };
};
