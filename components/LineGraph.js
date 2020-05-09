import React from 'react'
import { Line } from 'react-chartjs-2';


const LineGraph = () => {
  return (
    <div>
      <Line data={data} />
    </div>
  )
}

export default LineGraph
