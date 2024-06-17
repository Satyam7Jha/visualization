import { useMemo } from 'react';

import { useDefaultTheme } from '../use-default-theme';

export const useDualAxisConfig = ({ axisConfig }: { axisConfig: any }): any => {
  const {
    currentTheme: { xAxis: themeXAxis, yAxis: themeYAxis },
  } = useDefaultTheme();
  const { xAxisConfig, yAxisConfig } = axisConfig;

  return useMemo(
    () => ({
      xAxisConfig: xAxisConfig.map((xAxisConfigItem:any) => ({ ...themeXAxis, ...xAxisConfigItem })),
      yAxisConfig: yAxisConfig.map((yAxisConfigItem:any) => ({ ...themeYAxis, ...yAxisConfigItem })),
    }),
    [themeXAxis, themeYAxis, xAxisConfig, yAxisConfig],
  );
};
