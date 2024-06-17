
import React from 'react';

import { LegendComponent } from './legend-components';
import { Point, Series } from 'highcharts';

interface LegendContainerProps {
  legendItems: Array<Point | Series>;
  drid?: string;
  CustomLegendComponent: (props: { legend: Point | Series }) => JSX.Element | null;
}


export const LegendContainer = ({ legendItems, drid, CustomLegendComponent }: LegendContainerProps) => {



  return (
    <div className="flex flex-wrap gap-5 items-center mt-1">
      {legendItems.map((legend, index) => (
        <LegendComponent
          key={index}
          drid={drid}
          legend={legend}
          legendItems={legendItems}
          legendRenderer={CustomLegendComponent}
        />
      ))}

     
    </div>
  );
};
