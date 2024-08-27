import React from 'react';
import './App.css';
import { BaseChart } from './highcharts/base-chart';
import { Options } from 'highcharts';


function App() {

  const OPTIONS:Options =  {
    chart: {
      events: {},
      marginTop: 24,
      scrollablePlotArea: {},
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
        data: [
          {
            name: '2024-07-29T00:00:00.000Z',
            x: 1722211200000,
            y: 15449,
          },
          {
            name: '2024-07-30T00:00:00.000Z',
            x: 1722297600000,
            y: 15385,
          },
          {
            name: '2024-07-31T00:00:00.000Z',
            x: 1722384000000,
            y: 15269,
          },
          {
            name: '2024-08-01T00:00:00.000Z',
            x: 1722470400000,
            y: 14496,
          },
          {
            name: '2024-08-02T00:00:00.000Z',
            x: 1722556800000,
            y: 13311,
          },
          {
            name: '2024-08-03T00:00:00.000Z',
            x: 1722643200000,
            y: 2115,
          },
          {
            name: '2024-08-04T00:00:00.000Z',
            x: 1722729600000,
            y: 1905,
          },
          {
            name: '2024-08-05T00:00:00.000Z',
            x: 1722816000000,
            y: 14807,
          },
          {
            name: '2024-08-06T00:00:00.000Z',
            x: 1722902400000,
            y: 15952,
          },
          {
            name: '2024-08-07T00:00:00.000Z',
            x: 1722988800000,
            y: 15260,
          },
          {
            name: '2024-08-08T00:00:00.000Z',
            x: 1723075200000,
            y: 15494,
          },
          {
            name: '2024-08-09T00:00:00.000Z',
            x: 1723161600000,
            y: 14456,
          },
          {
            name: '2024-08-10T00:00:00.000Z',
            x: 1723248000000,
            y: 3361,
          },
          {
            name: '2024-08-11T00:00:00.000Z',
            x: 1723334400000,
            y: 2816,
          },
          {
            name: '2024-08-12T00:00:00.000Z',
            x: 1723420800000,
            y: 18367,
          },
          {
            name: '2024-08-13T00:00:00.000Z',
            x: 1723507200000,
            y: 18521,
          },
          {
            name: '2024-08-14T00:00:00.000Z',
            x: 1723593600000,
            y: 16235,
          },
          {
            name: '2024-08-15T00:00:00.000Z',
            x: 1723680000000,
            y: 8642,
          },
          {
            name: '2024-08-16T00:00:00.000Z',
            x: 1723766400000,
            y: 12206,
          },
          {
            name: '2024-08-17T00:00:00.000Z',
            x: 1723852800000,
            y: 2260,
          },
          {
            name: '2024-08-18T00:00:00.000Z',
            x: 1723939200000,
            y: 2061,
          },
          {
            name: '2024-08-19T00:00:00.000Z',
            x: 1724025600000,
            y: 13926,
          },
          {
            name: '2024-08-20T00:00:00.000Z',
            x: 1724112000000,
            y: 15803,
          },
          {
            name: '2024-08-21T00:00:00.000Z',
            x: 1724198400000,
            y: 16082,
          },
          {
            name: '2024-08-22T00:00:00.000Z',
            x: 1724284800000,
            y: 15694,
          },
          {
            name: '2024-08-23T00:00:00.000Z',
            x: 1724371200000,
            y: 13871,
          },
          {
            name: '2024-08-24T00:00:00.000Z',
            x: 1724457600000,
            y: 2262,
          },
          {
            name: '2024-08-25T00:00:00.000Z',
            x: 1724544000000,
            y: 1874,
          },
          {
            name: '2024-08-26T00:00:00.000Z',
            x: 1724630400000,
            y: 13558,
          },
        ],
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
    xAxis: [
      {
        labels: {
          useHTML: true,
          y: 20,
        },
        lineColor: 'rgba(83,86,101, 1)',
        minTickInterval: 86400000,
        tickLength: 0,
        type: 'datetime',
      },
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
    <div className='w-[530px] h-[230px]' >
    <BaseChart options={OPTIONS} />
    </div>
  );
}

export default App;
