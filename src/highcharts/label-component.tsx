import { Tick } from "highcharts";
import React, { Fragment, useEffect } from "react";
import { createPortal } from "react-dom";
import useMeasure from "react-use/lib/useMeasure";

export const LabelComponent = ({
  tick,
  className,
  updateChartMargin,
  tickRenderer,
}: {
  tick: Tick;
  className?: string;
  updateChartMargin?: () => void;
  tickRenderer?: (props: { tick: Tick; drid?: string }) => JSX.Element | null;
}) => {
  const [tickLabelRef, { width, height }] = useMeasure<HTMLDivElement>();

  useEffect(() => {
    updateChartMargin && updateChartMargin();
  }, [width, height]);

  if (!tick || !tick.label || !tick.label.element) return null;

    // delibrately added this as we can have name for axis when axis type is category but highcharts doesn't provide proper types
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //@ts-ignore
    const value = tick?.axis?.names?.[tick.pos] ?? tick?.axis.categories?.[tick.pos] ?? tick?.pos;
  return (
    <Fragment>
      {createPortal(
        <div ref={tickLabelRef} className={className}>
          {value}
          {/* {tickRenderer({ drid, tick })} */}
        </div>,
        tick.label.element
      )}
    </Fragment>
  );
};
