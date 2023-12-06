import React from 'react';
import ReactEcharts from 'echarts-for-react';

const EChartsComponent = ({ data }) => {
  const sensorData = data.data;
  let options=[]

  sensorData.forEach(sensor => {
    options.push( {
      title: {
        text: 'Voltage Sensor Data Over Time',
      },
      tooltip: {
        trigger: 'axis',
      },
      legend: {
        data:  sensor.tid
      },
      xAxis: {
        type: 'category',
        data: sensor.timestamps,
      },
      yAxis: {
        type: 'value',
      },
      dataZoom: [
        {
          startValue: '22'
        },
        {
          type: 'inside'
        }
      ],
      series: {
        name: sensor.tid,
        type: 'line',
        data: sensor.values,
      },
    })  
  })

  

  return (
    <div>
      <h2>ECharts Line Chart</h2>
      {options.map(option=>{
        return  <ReactEcharts option={option} style={{ height: '400px' }} />
      })}    
    </div>
  );
};

export default EChartsComponent;
