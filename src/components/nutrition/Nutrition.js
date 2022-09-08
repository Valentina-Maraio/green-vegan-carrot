import React, { useState } from 'react';
import './style/Nutrition.css'
import { Chart } from 'primereact/chart';

const Nutrition = () => {
  const [chartData] = useState({
    datasets: [{
      data: [
        11,
        16,
        7,
        3,
        14
      ],
      backgroundColor: [
        "#42A5F5",
        "#66BB6A",
        "#FFA726",
        "#26C6DA",
        "#7E57C2"
      ],
      label: 'My dataset'
    }],
    labels: [
      "Red",
      "Green",
      "Yellow",
      "Grey",
      "Blue"
    ]
  });

  const [lightOptions] = useState({
    plugins: {
      legend: {
        labels: {
          color: '#495057'
        }
      }
    },
    scales: {
      r: {
        grid: {
          color: '#ebedef'
        }
      }
    }
  });

  return (
    <div className='nutrition'>
      <div className="card flex justify-content-center">
        <Chart type="polarArea" data={chartData} options={lightOptions} style={{ position: 'relative', width: '40%' }} />
      </div>
    </div>
  )
}

export default Nutrition