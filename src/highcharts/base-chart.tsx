import Highcharts, { Options, Point, Series, Tick } from "highcharts/highstock";
import HighchartsReact from 'highcharts-react-official';
import _isEmpty from 'lodash/isEmpty';
import React, { useCallback, useEffect, useState } from 'react';

import { CHART_CONTAINER_PROPS, DUAL_AXIS_CHART_SPACING_TOP } from './constants';
import { getDefaultTheme, useDefaultTheme } from './hooks/use-default-theme';
import { LabelComponent } from './label-component';
import { TooltipComponent } from './tooltip-component';
import { analyzeChartType } from './utils/get-chart-type';
import { updateMargins } from './utils/update-margin';
import { LegendContainer } from './legend-container';



export const BaseChart = ({ options }:{
  options: any;
}) => {
  const { chartRef } = useDefaultTheme();

  Highcharts.setOptions(getDefaultTheme());

  const XAxisComponent = options.xAxis?.[0]?.CustomComponent;
  const YAxisComponent = options.yAxis?.[0]?.CustomComponent;
  const CustomTooltipComponent = options.tooltip?.CustomComponent;
  const CustomLegendComponent = options.legend?.CustomComponent;
  const [legendItems, setLegendItems] = useState<Array<Point | Series>>([]);


  const [xTicks, setXTicks] = useState<Tick[]>([]);
  const [yTicks, setYTicks] = useState<Tick[]>([]);

  const [_options, setOptions] = useState<Options>(options);
  const { isBarChart, isCircularChart } = analyzeChartType(options);


  useEffect(() => {
    const chart = chartRef.current && chartRef.current.chart;
    if (chart) {
      // deliberately added as method is there in the highcharts but not in types
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      //@ts-ignore
      chart.getMargins();
      chart.reflow();

    }
  }, [chartRef, xTicks, yTicks]);

  const updateChartMargin = useCallback(() => {
    updateMargins({
      XAxisComponent,
      YAxisComponent,
      chart: chartRef.current?.chart,
      isBarChart,
      xTicks,
      yTicks,
    });
  }, [XAxisComponent, YAxisComponent, chartRef, isBarChart, xTicks, yTicks]);

  useEffect(() => {
    setOptions({
      ...options,
      chart: {
        ...options.chart,
        events: {
          render() {
            const _xticks = this.xAxis[0].ticks;
            const xkeys = Object.keys(_xticks);
            setXTicks(xkeys.map((key) => _xticks[key]));
            setLegendItems(this.legend.allItems as Array<Point | Series>);

            const _yticks = this.yAxis[0].ticks;
            const ykeys = Object.keys(_yticks);

            setYTicks(ykeys.map((key) => _yticks[key]));
          },
        },
        marginTop: isCircularChart ? 0 : DUAL_AXIS_CHART_SPACING_TOP,
      },
    } as Options);
  }, [options]);

  return (
    <div className="flex flex-col w-full h-full p-10" >
      <div className="flex-1 min-h-0">
        <HighchartsReact
          ref={chartRef}
          containerProps={CHART_CONTAINER_PROPS}
          highcharts={Highcharts}
          options={_options}
        />
      </div>
     
      {legendItems && (
        <LegendContainer CustomLegendComponent={CustomLegendComponent}  legendItems={legendItems} />
      )}

{
        xTicks &&
        xTicks.length > 0 &&
        xTicks.map((tick) => {
          if (_isEmpty(tick)) return null;
          return (
            <LabelComponent
              key={tick.pos}
              tick={tick}
              updateChartMargin={isBarChart ? undefined : updateChartMargin}
            />
          );
        })} 
{
        yTicks &&
        yTicks.length > 0 &&
        yTicks.map((tick) => {
          if (_isEmpty(tick)) return null;
          return (
            <LabelComponent
              key={tick.pos}
              className={isBarChart ? '' : 'transform -translate-y-1/2'}
              tick={tick}
              updateChartMargin={isBarChart ? updateChartMargin : undefined}
            />
          );
        })}

      {CustomTooltipComponent && (
        <TooltipComponent chart={chartRef.current?.chart} tooltipRenderer={CustomTooltipComponent} />
      )}
    </div>
  );
};
