
import clsx from 'clsx';
import React, { useCallback } from 'react';

import { isSeriesType } from './utils/is-series';
import { Point, Series } from 'highcharts';

interface LegendItemProps {
  legendRenderer: (props: { legend: Point | Series }) => JSX.Element | null;
  legend: Point | Series;
  legendItems: Array<Point | Series>;
  drid?: string;
}

const FULL_OPACITY = 1,
  DIMMED_OPACITY = 0.4;


export const LegendComponent = ({ legendRenderer, legend, legendItems, drid }: LegendItemProps) => {
  const seriesType = isSeriesType(legend) ? legend.type : legend.series.type;

  const blurOtherLegends = useCallback(
    () =>
      legendItems.forEach(
        (item) => item !== legend && item.update({ opacity: DIMMED_OPACITY, type: seriesType as any }),
      ),
    [legendItems, legend, seriesType],
  );

  const unBlurOtherLegends = useCallback(
    () =>
      legendItems.forEach(
        (item) => item !== legend && item.update({ opacity: FULL_OPACITY, type: seriesType as any }),
      ),
    [legendItems, legend, seriesType],
  );

  const handleMouseOver = useCallback(() => {
    if (legend.visible) blurOtherLegends();
  }, [blurOtherLegends, legend]);

  const handleMouseOut = useCallback(() => unBlurOtherLegends(), [unBlurOtherLegends]);

  const handleClick = useCallback(() => {
    if (legend.visible) unBlurOtherLegends();
    else blurOtherLegends();

    legend.setVisible(!legend.visible);
  }, [blurOtherLegends, unBlurOtherLegends, legend]);

  return (
    <button
    style={{
      color:legend.color as string,
    }}
      className={clsx(
        'flex flex-row items-center gap-2 !cursor-pointer max-w-full overflow-clip border px-2',
        legend.visible ? '' : 'opacity-50 line-through',
      )}
      onClick={handleClick}
      onMouseOut={handleMouseOut}
      onMouseOver={handleMouseOver}
    >
{legend.name}
    </button>
  );
};
