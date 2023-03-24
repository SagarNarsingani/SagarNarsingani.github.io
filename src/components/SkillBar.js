
import { Bar } from 'react-chartjs-2';
import styled from 'styled-components';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

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
  maintainAspectRatio: false,
  plugins: {
    legend:{ display: false },
    tooltip:{
        displayColors: false,
        bodyFont: {
            size:14,
            family: "'Jost', 'sans-serif'"
        },
        callbacks: {
            label: (_) => "Working on it🙂",
            labelTextColor: (_) => "#76b687",
            title: (context) => context[0].label.replace(',', ' '),
            
        },
        bodyAlign: 'center',
        titleAlign: 'center'
    }
  },

  scales: {
    y: {
        ticks: {
            callback: (val, _i) => {
                if(val===1) return null;
                if(val===2) return 'Beginner';
                if(val===3) return null;
                if(val===4) return null;
                if(val===5) return `Intermediate`;
                if(val===6)  return null;
                if(val===7) return 'Expert';
            }, 
            color: 'rgba(255, 255, 255, .3)',
            font: { size: 14, family: "'Fira Code', monospace" },
            suggestedMax: 10,
            suggestedMin: 0,
            autoSkip: false, 
            minRotation: 90
        },
        grid: { color: 'rgba(255, 255, 255, .05)' },
        beginAtZero: true,
        grace: '5%',
        crossAlign: 'center'
    },
    x:{
      grid:{ color: 'rgba(255, 255, 255, .1)' }, 
      ticks: {
        color: 'rgba(255, 255, 255, .3)',
        font: { size: 13, family: "'Fira Code', monospace" },
        autoSkip: false,
        minRotation: 0,
        maxRotation: 0
      }
    }
  }, 
};


const labels = [
    'C++', 'JavaScript', 
    'MERN Stack',
    ['Problem', 'Solving'], 
    ['Computer', 'Fundamentals']
];

export const data = {
  labels,
  datasets: [
    {
      data: [6, 6.5, 5, 6.5, 6],
      backgroundColor: 'transparent',
      borderColor: "#76b687",
      borderWidth: 1,
      barThickness: 50,
      barPercentage: .5
    }
  ],
};

export const SkillBar = () => {
  const ref = useRef(null);
  const inView = useInView(ref);

  return <Container ref={ref}>
    <Bar options={options}  redraw={inView} data={data} />
    <p>How I rate my self!</p>
  </Container>
}

const Container = styled.div`
    width: 50%;
    margin-top: 1em;
    height: 400px;
    padding: 1em;
    padding-bottom: 2em;
    display: inline-block;
    letter-spacing: normal;
    border: 2px solid rgba(255, 255, 255, 0.1);
    font-family: 'Fira Code', monospace;

    @media (max-width: 1349px){
      display: block;
      margin-inline: auto;
    }

    p{
      margin-inline: auto;
      margin-top: 1em;
      text-align: center;
      color: rgba(255, 255, 255, 0.4);
      margin-top: .25em;
    }
    
    @media (max-width: 1255px){ width: 60%; }
    @media (max-width: 1030px){ width: 80%; }
    @media (max-width: 783px){ width: 100%; }
    @media (max-width: 629px){ display: none }
`;