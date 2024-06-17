import { PointOptionsObject } from "highcharts";

function getMaxDataLength(seriesArray: any[] | undefined): number {
  if (!seriesArray) return 0;

  const totalDistinctXaxis = new Set<string>();

  seriesArray.forEach((series) => {
    series.data?.forEach((data:any) => {
      if (typeof data === 'object' && data !== null) {
        const name = (data as PointOptionsObject).name;
        if (name) totalDistinctXaxis.add(`${name}`);
      }
    });
  });

  return totalDistinctXaxis.size;
}

const HORIZONTAL_AXIS_SPACE = 100;
const VERTICAL_AXIS_SPACE = 50;

export const getScrollablePlotArea = ({
  series,
  isBarChart,
  width = 0,
  height = 0,
  isChartAutoScrollFFEnabled,
}: {
  series?: any[];
  isBarChart: boolean;
  width?: number;
  height?: number;
  isChartAutoScrollFFEnabled: boolean;
}) => {
  if (!isChartAutoScrollFFEnabled || !series) return undefined;
  const maxDataCount = getMaxDataLength(series);

  if (isBarChart) {
    return maxDataCount * VERTICAL_AXIS_SPACE > height ? maxDataCount * VERTICAL_AXIS_SPACE : undefined;
  }
  return maxDataCount * HORIZONTAL_AXIS_SPACE > width ? maxDataCount * HORIZONTAL_AXIS_SPACE : undefined;
};
