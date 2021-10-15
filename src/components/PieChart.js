import React from 'react'
import { Doughnut } from 'react-chartjs-2'

function PieChart({
    labelsArray,
    caption,
    dataArray}) {
    const data = {
        labels: labelsArray,
        datasets: [
            {
                label: caption,
                data: dataArray,
                backgroundColor: [
                    '#ffae4a',
                    '#41a6c3',
                    '#fb928E'
                ]
            }
        ]
    }
    return (
        <div className="pie-chart">
            <Doughnut
                data={data}
                options={{ maintainAspectRatio: false }} />
        </div>
    )
}

export default PieChart
