import { Chart, Tick } from 'highcharts';

export const calculateTicksWdith = (ticks: Tick[], isBarChart: boolean, chart: Chart): number => {
  const absXoffsetValue = Math.abs(chart.xAxis?.[0].options?.labels?.x ? chart.xAxis[0].options?.labels?.x : 0);
  const offSetValue = isBarChart ? absXoffsetValue : chart.yAxis?.[0].options?.labels?.x;

  const sizes = ticks.map(({ label }) => (label?.element as HTMLElement)?.offsetWidth);

  const highestSize = Math.max(...sizes.filter(Boolean)) + (offSetValue || 0);

  return isFinite(highestSize) ? highestSize : 0;
};
