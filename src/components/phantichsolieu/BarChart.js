import { Bar } from "react-chartjs-2";
import React from "react";
import './BarChart.css'
const BarChart = () => {
    return(
        <div>
        <Bar
            data={{
                labels: ['Red','Blue','Yellow', 'Green', 'Purple', 'Orange'],
                datasets: [
                    {
                        label: 'Sô dân của 5 dân tộc nhiều nhất',
                        data: [12,19,3,5,2,3],
                        backgroundColor: [
                            'rgb(255, 99, 132)',
                            'rgb(54, 162, 235)',
                            'rgb(255, 206, 86)',
                            'rgb(75, 192, 192)',
                            'rgb(153, 102, 255)',
                            'rgb(255, 159, 64)'
                        ],
                    }
                ]
            }}
           
            options={{
                maintainAspectRation: false,
            }}
        />

    </div>
) 
}
export default BarChart 