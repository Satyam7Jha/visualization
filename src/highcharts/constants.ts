export const CHART_CONTAINER_PROPS = {
  style: {
    height: '100%',
    width: '100%',
  },
};

export const SUPPORTED_SERIES_TYPES = {
  AREA: 'area',
  BAR: 'bar',
  COLUMN: 'column',
  LINE: 'line',
} as const;

// This margin will be needed as we will have cut off of axis labels on the right side of the chart for y-axis.
export const INVERTED_DUAL_AXIS_CHART_MARGIN_RIGHT = 24;

export const DUAL_AXIS_CHART_SPACING_TOP = 24;
