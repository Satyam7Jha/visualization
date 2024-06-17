
const OPTIONS = {
    "chart": {
      "marginRight": 24,
      "scrollablePlotArea": {
        "minHeight": undefined
      },
      "events": {},
    },
    "legend": {
      "enabled": true,
      "floating": true,
      "y": 100000,
      "symbolHeight": 0,
      "symbolWidth": 0,
      "useHTML": true
    },
    "plotOptions": {
      "series": {
        "borderColor": "rgba(255,255,255, 1)",
        "borderWidth": 2,
        "cursor": "pointer",
        "point": {
          "events": {}
        },
        "stacking": "normal"
      }
    },
    "series": [
      {
        "color": "rgba(230,172,0, 1)",
        "data": [
          {
            "name": "don:core:dvrv-us-1:devo/0:custom_stage/19",
            "y": 3098928,
            "color": "rgba(230,172,0, 1)"
          },
          {
            "name": "don:core:dvrv-us-1:devo/0:custom_stage/46",
            "y": 597074,
            "color": "rgba(230,172,0, 1)"
          },
          {
            "name": "don:core:dvrv-us-1:devo/0:custom_stage/47",
            "y": 3299646,
            "color": "rgba(230,172,0, 1)"
          },
          {
            "name": "don:core:dvrv-us-1:devo/0:custom_stage/48",
            "y": 305753.02,
            "color": "rgba(230,172,0, 1)"
          },
          {
            "name": "don:core:dvrv-us-1:devo/0:custom_stage/25",
            "y": 148500,
            "color": "rgba(230,172,0, 1)"
          }
        ],
        "name": "Pipeline",
        "type": "bar",
        "zIndex": 6,
        "borderColor": "rgba(255,255,255, 1)"
      },
      {
        "color": "rgba(114,90,237, 1)",
        "data": [
          {
            "name": "don:core:dvrv-us-1:devo/0:custom_stage/19",
            "y": 636937,
            "color": "rgba(114,90,237, 1)"
          },
          {
            "name": "don:core:dvrv-us-1:devo/0:custom_stage/46",
            "y": 0,
            "color": "rgba(114,90,237, 1)"
          },
          {
            "name": "don:core:dvrv-us-1:devo/0:custom_stage/47",
            "y": 154603.08000000002,
            "color": "rgba(114,90,237, 1)"
          },
          {
            "name": "don:core:dvrv-us-1:devo/0:custom_stage/48",
            "y": 220000,
            "color": "rgba(114,90,237, 1)"
          },
          {
            "name": "don:core:dvrv-us-1:devo/0:custom_stage/25",
            "y": 798241,
            "color": "rgba(114,90,237, 1)"
          }
        ],
        "name": "Upside",
        "type": "bar",
        "zIndex": 5,
        "borderColor": "rgba(255,255,255, 1)"
      },
      {
        "color": "rgba(47,177,164, 1)",
        "data": [
          {
            "name": "don:core:dvrv-us-1:devo/0:custom_stage/19",
            "y": 85672.25,
            "color": "rgba(47,177,164, 1)"
          },
          {
            "name": "don:core:dvrv-us-1:devo/0:custom_stage/25",
            "y": 951,
            "color": "rgba(47,177,164, 1)"
          }
        ],
        "name": "Commit",
        "type": "bar",
        "zIndex": 4,
        "borderColor": "rgba(255,255,255, 1)"
      },
      {
        "color": "rgba(87,166,244, 1)",
        "data": [
          {
            "name": "don:core:dvrv-us-1:devo/0:custom_stage/25",
            "y": 139972.6,
            "color": "rgba(87,166,244, 1)"
          }
        ],
        "name": "Strong Upside",
        "type": "bar",
        "zIndex": 3,
        "borderColor": "rgba(255,255,255, 1)"
      },
      {
        "color": "rgba(172,202,2, 1)",
        "data": [
          {
            "name": "don:core:dvrv-us-1:devo/0:custom_stage/18",
            "y": 7535873.669999999,
            "color": "rgba(172,202,2, 1)"
          }
        ],
        "name": "Won",
        "type": "bar",
        "zIndex": 2,
        "borderColor": "rgba(255,255,255, 1)"
      },
      {
        "color": "rgba(255,143,51, 1)",
        "data": [
          {
            "name": "don:core:dvrv-us-1:devo/0:custom_stage/21",
            "y": 2730699,
            "color": "rgba(255,143,51, 1)"
          }
        ],
        "name": "Omitted",
        "type": "bar",
        "zIndex": 1,
        "borderColor": "rgba(255,255,255, 1)"
      }
    ],
    "tooltip": {
    CustomComponent:()=><div>dummy</div>,
      "shared": false,
      "padding": 0,
      "shadow": {
        "opacity": 0.1
      },
      "style": {
        "width": 200
      },
      "useHTML": true
    },
    "xAxis": [
      {
        CustomComponent:()=><div>dummy</div>,
        "labels": {
          "x": -16,
          "useHTML": true,
          formatter: function () {
            return '';
          },
        },
        "lineColor": "rgba(205,206,214, 1)",
        "tickLength": 0,
        "categories": [
          "don:core:dvrv-us-1:devo/0:custom_stage/19",
          "don:core:dvrv-us-1:devo/0:custom_stage/46",
          "don:core:dvrv-us-1:devo/0:custom_stage/47",
          "don:core:dvrv-us-1:devo/0:custom_stage/48",
          "don:core:dvrv-us-1:devo/0:custom_stage/25",
          "don:core:dvrv-us-1:devo/0:custom_stage/18",
          "don:core:dvrv-us-1:devo/0:custom_stage/21"
        ],
        "type": "category"
      }
    ],
    "yAxis": [
      
      {
        CustomComponent:()=><div>dummy</div>,
        "allowDecimals": false,
        "gridLineColor": "rgba(205,206,214, 1)",
        "gridLineDashStyle": "Dot",
        "gridLineWidth": 1,
        "labels": {
          "y": 16,
          "useHTML": true,
          formatter: function () {
            return '';
          },
        },
        "tickAmount": 5,
        "title": {},
        "opposite": false,
        "type": "linear"
      }
    ]
}
export const useBarChartOptions = () => {
    return OPTIONS
}