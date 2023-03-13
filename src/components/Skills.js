import React from 'react'

// export const Skills = () => {
//   return (
//     <div>Skills</div>
//   )
// }
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
// import faker from 'faker';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend:{
        display: false
    },
    tooltip:{
        displayColors: false,
        bodyFont: {
            size:14,
            family: "'Jost', 'sans-serif'"
        },
        callbacks: {
            label: (context) => {
                if(context.parsed.y === 3) return "Expert";
                if(context.parsed.y > 2) return "Improving Constantly";
                if(context.parsed.y === 2) return "Intermediate";
                if(context.parsed.y  > 1) return "Improving Constantly";
                if(context.parsed.y  === 1) return "Beginner";
            },
            labelTextColor: (_) => "#76b687"
        }
    }
  },
  scales: {
    y: {
        ticks: {
            callback: (val, _i) => {
                if(val===1) return 'Beginner';
                if(val===2) return 'Intermediate';
                if(val===3) return 'Expert';
                return ''
            }, 
            color: 'rgba(255, 255, 255, .3)',
            font: {
                size: 15,
            },
            suggestedMax: 5,
            suggestedMin: 0,
        },
        grid: {
            color: 'rgba(255, 255, 255, .05)',
        },
        beginAtZero: true,
        grace: '5%'
    },
    x:{
      grid:{
          color: 'rgba(255, 255, 255, .1)'
      }, 
      ticks: {
        color: 'rgba(255, 255, 255, .3)',
        font: { size: 15 }
      }
    }
  }, 
};

const labels = ['C++', 'JavaScript', 'Node / Express', 'React.js', 'MongoDB'];

export const data = {
  labels,
  datasets: [
    {
      data: [2.5, 2.7, 2, 2, 2],
      backgroundColor: 'transparent',
      borderColor: "#76b687",
      borderWidth: 1,
      barThickness: 50,
      barPercentage: .5
    }
  ],
};

export function Skills() {
  return <Bar options={options} data={data} style={{width: "50%", height: "600px", marginInline: "auto"}}/>;
}
