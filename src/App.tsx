import React from 'react';
import './App.css';
import { useBarChartOptions } from './charts/hooks/use-bar-chart-options';
import { BaseChart } from './highcharts/base-chart';
import { useColumnChartWithScrollOptions } from './charts/hooks/use-column-chart-with-scoll-option';

function App() {

  const barChart = useBarChartOptions()
  const columnChartWithScroll = useColumnChartWithScrollOptions()

  return (
   <div className="flex flex-col">
    <h1 className=' text-5xl'>1.Bar chart</h1>
       <BaseChart options={barChart} />
       <h1 className=' text-5xl'>2.Column chart</h1>
       <BaseChart options={columnChartWithScroll} />

   </div>
  );  
}

export default App;
