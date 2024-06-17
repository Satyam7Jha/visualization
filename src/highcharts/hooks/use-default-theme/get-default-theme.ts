import { Options } from 'highcharts';


export const getDefaultTheme = (): Options => ({
  chart: {
    spacing: [4, 4, 4, 4],
  },
  colors:["blue"],
  credits: {
    enabled: false,
  },
  legend: {
    floating: true,
    y: 100000,
    align: 'left',
    itemHiddenStyle: {
      color: 'grey',
    },
    itemHoverStyle: {
      color: '',
    },
    itemStyle: {
      color:'black',
    },
    symbolHeight: 0,
    symbolWidth: 0,
    useHTML: true,
    verticalAlign: 'bottom',
    x: -10,
  },

  plotOptions: {
    area: {
      lineWidth: 1.5,
      marker: {
        enabled: true,
        fillColor: "red",
        lineColor: undefined,
        lineWidth: 1.5,
        radius: 3,
        symbol: 'circle',
      },
    },
    bar: {
      borderRadius: 3,
      maxPointWidth: 16,
    },
    column: {
      borderRadius: 3,
      maxPointWidth: 16,
    },
    line: {
      lineWidth: 1.5,
      marker: {
        enabled: true,
        fillColor: "red",
        //passing undefined take color form series color
        //not defining here does not work
        lineColor: undefined,
        lineWidth: 1.5,
        radius: 3,
        symbol: 'circle',
      },
    },
    pie: {
      dataLabels: {
        style: {
          color:'black',
          fontSize: '16px',
          fontWeight: '500',
          textOutline: 'none',
        },
      },
    },
    series: {
      borderColor: 'transparent',
      marker: {
        symbol: 'circle',
      },
      states: {
        hover: {
          enabled: true,
          lineWidthPlus: 0,
        },
        inactive: {
          enabled: true,
        },
      },
    },
  },
  title: {
    text: undefined,
  },
  tooltip: {
    backgroundColor: "red",
    borderColor:'grey',
    borderRadius: 12,
    borderWidth: 1,
    padding: 0,
    shadow: {
      opacity: 0.1,
    },
    useHTML: true,
  },
  xAxis: {
    labels: {
      reserveSpace: true,
      style: {
        color: 'black',
      },
    },
    lineColor: 'grey',
    tickLength: 0,
  },

  yAxis: {
    allowDecimals: false,
    gridLineColor: 'grey',
    gridLineDashStyle: 'Dot',
    gridLineWidth: 1,
    labels: {
      style: {
        color: 'black',
      },
    },
    tickAmount: 5,
    title: {
      text: undefined,
    },
  },
});
