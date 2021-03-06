import React, { Component } from 'react'
import {Bar} from 'react-chartjs-2';

const data = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'Monthly Reports',
      backgroundColor: '#FF6384',
      borderColor: 'rgba(255,99,132,1)',
      borderWidth: 1,
      hoverBackgroundColor: 'rgba(255,99,132,0.4)',
      hoverBorderColor: 'rgba(255,99,132,1)',
      data: [89, 59, 80, 81, 56, 55, 40]
    }
  ]
};

export default class Charts extends Component {
  render() {
  
      
     
    return (
      <div >
<Bar
          data={data}
          width={100}
          height={350}
          options={{
            maintainAspectRatio: false
          }}
        /></div>
    )
  }
}
