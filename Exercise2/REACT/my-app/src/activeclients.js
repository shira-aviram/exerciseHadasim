import axios from "axios";
import { useState ,useEffect} from "react";
import { Line } from 'react-chartjs-2';
import Chart from 'chart.js/auto';
import { CategoryScale, LinearScale, PointElement, LineElement, BarController, BarElement, Tooltip, Legend, Title } from 'chart.js';


Chart.register(CategoryScale, LinearScale, PointElement, LineElement, BarController, BarElement, Tooltip, Legend, Title);

export default function ActiveClientsByMonth() {
  const [clients, setClients] = useState([]);
  const [month, setMonth] = useState([]);
  const [monthName, setMonthName] = useState('');

  useEffect(() => {
    if (clients.length === 0) {
      axios.get('http://localhost:8000/clients/')
        .then(response => {
          setClients(response.data);
        })
        .catch(err => console.log(err));
    }
  }, [clients])

  useEffect(() => {
    const today = new Date();
    const monthStart = new Date(today.getFullYear(), today.getMonth() - 1, 1);
    const monthEnd = new Date(today.getFullYear(), today.getMonth(), 0);
    const monthDays = [];
    for (let i = 1; i <= monthEnd.getDate(); i++) {
      monthDays.push(i);
    }
    setMonth(monthDays);
    setMonthName(monthStart.toLocaleString('default', { month: 'long' }));
  }, [])

  const countPatientsByDay = (day) => {
    const startDate = new Date(new Date().getFullYear(), new Date().getMonth() - 1, 1);
    const endDate = new Date(new Date().getFullYear(), new Date().getMonth(), 0);
    const count = clients.filter(client => {
      if (client.positive_result_date && client.recovery_date) {
        const positiveResultDate = new Date(client.positive_result_date);
        const recoveryDate = new Date(client.recovery_date);
        return (
          day >= positiveResultDate.getDate() &&
          day <= recoveryDate.getDate() &&
          positiveResultDate >= startDate &&
          recoveryDate <= endDate
        );
      }
      return false;
    }).length;
    return count;
  }

  const chartData = {
    labels: month,
    datasets: [
      {
        label: 'Active Clients by Day',
        data: month.map(day => countPatientsByDay(day)),
        fill: false,
        borderColor: 'rgb(255, 0, 0)',
        tension: 0.1
      }
    ]
  };

  return (
    <>
      <div>
        <h3>{monthName}</h3>
      </div>
      
      <Line data={chartData} options={{
        responsive: true,
        maintainAspectRatio: true,
     
        scales: {
          x: {
            title: {
              display: true,
              text: monthName
            }
          },
          
          y: {
            beginAtZero: true,
            ticks: {
              stepSize: 1,
              precision: 0,
             
            },
            title: {
              display: true,
              text: 'Active Clients'
            }
          },
        },
        elements: {
          point: {
            radius: 1,
            hoverRadius: 1
          }
        }
        
      }}
      width='80%'
      height='50%'
      />
    </>
  );
}
