import React from 'react';
import './App.css';
import { BaseChart } from './highcharts/base-chart';
import { MockAvatar } from './components/MockAvatar';
import { Options } from 'highcharts';


function App() {

  const OPTIONS:Options =  {
    chart: {
      events: {},
      marginTop: 24,
      scrollablePlotArea: {},
      type: 'column',
    },
    legend: {
      enabled: false,
      floating: true,
      symbolHeight: 0,
      symbolWidth: 0,
      useHTML: true,
    },
    plotOptions: {
      series: {
        borderWidth: 0,
        cursor: 'pointer',
        dataLabels: {
          enabled: true,
          allowOverlap:false
        },
        point: {
          events: {},
        },
      },
    },
    series: [
      {
        borderColor: 'rgba(32,34,39, 1)',
        color: 'rgba(127,104,237, 1)',
        data: [15449, 15385, 15269, 14496, 13311, 2115, 1905, 14807, 15952, 15260, 15494, 14456, 3361, 2816, 18367, 18521, 16235, 8642, 12206, 2260, 2061, 13926, 15803, 16082, 15694, 13871, 2262, 1874, 13558],
        name: 'Total User Sessions',
        type: 'column',
        visible: true,
        zIndex: 1,
      },
    ],
    tooltip: {
      padding: 0,
      shadow: {
        opacity: 0.1,
      },
      shared: false,
      style: {
        width: 200,
      },
      useHTML: true,
    },
    navigator: {
      enabled: false // Disables the navigator
  },
    xAxis: [
{
        labels: {
          useHTML: true,
          y: 20,
        },
        lineColor: 'rgba(83,86,101, 1)',
        tickLength: 0,
        type: 'category',
        categories: ['Team A', 'Team B', 'Team C', 'Team D', 'Team E', 'Team F', 'Team G', 'Team H', 'Team I', 'Team J', 'Team K', 'Team L', 'Team M', 'Team N', 'Team O', 'Team P', 'Team Q', 'Team R', 'Team S', 'Team T', 'Team U', 'Team V', 'Team W', 'Team X', 'Team Y', 'Team Z', 'Team AA', 'Team BB', 'Team CC'],
        CustomComponent: MockAvatar,
      } as any,
    ],
    yAxis: [
      {
        allowDecimals: false,
        gridLineColor: 'rgba(83,86,101, 1)',
        gridLineDashStyle: 'Dot',
        gridLineWidth: 1,
        labels: {
          useHTML: true,
          x: 20,
        },
        opposite: true,
        stackLabels: {
          style: {
            color: 'rgba(238,239,241, 1)',
            fontWeight: 'normal',
            textOutline: 'none',
          },
        },
        tickAmount: 5,
        title: {},
        type: 'linear',
      },
    ],
  };

  return (
    <BaseChart options={OPTIONS} />
  );
}

export default App;
