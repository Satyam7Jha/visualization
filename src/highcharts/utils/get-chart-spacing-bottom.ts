
export const getChartSpacingBottom = (series: any[]): number => {
  if (!series) {
    return 12;
  }

  return series.length > 1 ? 4 : 12;
};
