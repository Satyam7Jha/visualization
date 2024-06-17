import { Chart, Tick } from 'highcharts';

import { calculateTicksWdith } from './calculate-ticks-element-width';

export type AxisLabelComponentType = (props: { tick: Tick; drid?: string | undefined }) => JSX.Element | null;

type Props = {
  chart?: Chart;
  isBarChart: boolean;
  YAxisComponent?: AxisLabelComponentType;
  XAxisComponent?: AxisLabelComponentType;
  xTicks?: Tick[];
  yTicks?: Tick[];
};

const VERTICAL_AXIS_MARGIN = 50;

export const updateMargins = ({ chart, isBarChart, YAxisComponent, XAxisComponent, xTicks, yTicks }: Props) => {
  if (!chart) return;

  

  let marginConfig = {};

  if (isBarChart) {
    if (yTicks && yTicks?.length > 0 && YAxisComponent) {
      marginConfig = { ...marginConfig, marginBottom: VERTICAL_AXIS_MARGIN };
    }

    if (xTicks && xTicks?.length > 0 && XAxisComponent) {
      const highestYLabelElementWidth = calculateTicksWdith(xTicks, isBarChart, chart);
      if (highestYLabelElementWidth > 0) {
        marginConfig = { ...marginConfig, marginLeft: highestYLabelElementWidth };
      }
    }
  } else {
    if (yTicks && yTicks?.length > 0 && YAxisComponent) {
      const highestYLabelElementWidth = calculateTicksWdith(yTicks, isBarChart, chart);
      if (highestYLabelElementWidth > 0) {
        marginConfig = { ...marginConfig, marginRight: highestYLabelElementWidth };
      }
    }

    if (xTicks && xTicks?.length > 0 && XAxisComponent) {
      marginConfig = { ...marginConfig, marginBottom: VERTICAL_AXIS_MARGIN };
    }
  }

  chart.update({ chart: marginConfig });
};
