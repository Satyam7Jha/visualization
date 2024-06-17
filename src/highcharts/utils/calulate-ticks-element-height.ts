import { Chart, Tick } from 'highcharts';

export const calculateTicksHeight = (ticks: Tick[], isBarChart: boolean, chart: Chart): number => {
  const offSetValue = isBarChart ? chart.yAxis?.[0].options?.labels?.y : chart.xAxis?.[0].options?.labels?.y;

  const sizes = ticks.map(({ label }) => (label?.element as HTMLElement)?.offsetHeight);

  const highestSize = Math.max(...sizes.filter(Boolean)) + (offSetValue || 0);

  return Number.isFinite(highestSize) ? highestSize : 0;
};
