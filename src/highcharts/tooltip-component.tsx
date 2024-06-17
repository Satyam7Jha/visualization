import { Chart, TooltipFormatterCallbackFunction, TooltipFormatterContextObject } from 'highcharts';
import React, { useEffect, useRef, useState } from 'react';
import ReactDOM from 'react-dom';

const generateTooltipId = (chartId: number) => `highcharts-custom-tooltip-${chartId}`;

interface TooltipComponentProps {
  chart: Chart | undefined;
  tooltipRenderer: (props: { tooltip: TooltipFormatterContextObject }) => JSX.Element | null;
}

const BORDER_WIDTH = 2;
export const TooltipComponent = ({ chart, tooltipRenderer }: TooltipComponentProps) => {
  const isInit = useRef(false);
  const tooltipContentRef = useRef<HTMLDivElement>(null);
  const [tooltipContentHeight, setTooltipContentHeight] = useState(0);
  const [tooltipContentWidth, setTooltipContentWidth] = useState(0);

  const [context, setContext] = useState<TooltipFormatterContextObject | null>(null);

  useEffect(() => {
    if (chart) {
      const formatter: TooltipFormatterCallbackFunction = function () {
        // Issue: Highcharts React does not render the tooltip correctly on the initial load.
        // Details: https://github.com/highcharts/highcharts-react/issues/447

        if (!isInit.current) {
          isInit.current = true;
          chart.tooltip.refresh.apply(chart.tooltip, [this.point]);
          chart.tooltip.hide(0);
        }

        setContext(this);

        return `<div class="flex justify-center items-center" style="height: ${
          tooltipContentHeight + BORDER_WIDTH
        }px; width: ${tooltipContentWidth + BORDER_WIDTH}px; border:" id='${generateTooltipId(chart.index)}'></div>`;
      };

      chart.update({
        tooltip: {
          formatter,
          useHTML: true,
        },
      });
    }
  }, [chart, tooltipContentHeight, tooltipContentWidth]);

  useEffect(() => {
    if (tooltipContentRef.current) {
      setTooltipContentHeight(tooltipContentRef.current.clientHeight);
      setTooltipContentWidth(tooltipContentRef.current.clientWidth);
    }
  }, [tooltipContentRef, context]);

  const node = chart && document.getElementById(generateTooltipId(chart.index));

  if (node && context) {
    return ReactDOM.createPortal(
      <div className='p-5' ref={tooltipContentRef} style={{ width: 'min-content'}}>
                {/* {tooltipRenderer({ tooltip: context })} */}
       <div>{context.series.name} - {context.y}</div>
      </div>,
      node,
    );
  }

  return null;
};
