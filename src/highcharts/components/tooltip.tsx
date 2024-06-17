import { TooltipFormatterContextObject } from 'highcharts';
import React from 'react'

export const TooltipComponent = ({ tooltipInfo }: {
    tooltipInfo:TooltipFormatterContextObject
}) => {
    return (
         <div>{tooltipInfo.series.name} - {tooltipInfo.y}</div>
    )
}