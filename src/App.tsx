import React from 'react';
import './App.css';
import { useBarChartOptions } from './charts/hooks/use-bar-chart-options';
import { BaseChart } from './highcharts/base-chart';
import { useColumnChartWithScrollOptions } from './charts/hooks/use-column-chart-with-scoll-option';
import { useColumnChartWithAxisLoader } from './charts/hooks/use-column-chart-opitons-with-axis-loader';

function App() {

  const barChart = useBarChartOptions()
  const columnChartWithScroll = useColumnChartWithScrollOptions()
  const columnChartWithAxisLoader = useColumnChartWithAxisLoader()

  return (
   <div className="flex flex-col">
    <h1 className=' text-5xl'>1.Bar chart</h1>
       <BaseChart options={barChart} />
       <h1 className=' text-5xl'>2.Column chart</h1>
       <BaseChart options={columnChartWithScroll} />
       {/* <h1 className=' text-5xl'>3.Column chart with loading in axis</h1>
       <BaseChart options={columnChartWithAxisLoader} /> */}

   </div>
  );  
}

export default App;
