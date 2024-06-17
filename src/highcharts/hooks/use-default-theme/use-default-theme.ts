import { Options } from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import { useRef, useState } from 'react';
import useUpdateEffect from 'react-use/lib/useUpdateEffect';

import { getDefaultTheme } from './get-default-theme';

export const useDefaultTheme = () => {
  const chartRef = useRef<HighchartsReact.RefObject>(null);
  const [currentTheme, setCurrentTheme] = useState<Options>(() => getDefaultTheme());

  useUpdateEffect(() => {
    const theme = getDefaultTheme();
    setCurrentTheme(theme);
    if (chartRef.current && chartRef.current.chart) {
      chartRef.current.chart.update(theme);
    }
  }, []);

  return { chartRef, currentTheme };
};
