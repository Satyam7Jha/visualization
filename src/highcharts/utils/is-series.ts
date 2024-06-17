import { Point, Series } from "highcharts";

export const isSeriesType = (legend: Point | Series): legend is Series => 'type' in legend;
