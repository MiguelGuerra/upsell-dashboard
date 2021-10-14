import React from 'react'
import { Bar } from 'react-chartjs-2'

function BarChart({
    labelsArray,
    caption,
    dataArray,
    lineColor }) {
    const data = {
        labels: labelsArray,
        datasets: [
            {
                label: caption,
                data: dataArray,
                borderColor: lineColor,
                backgroundColor: lineColor,
                pointBackgroundColor: lineColor,
                pointBorderColor: lineColor
            }
        ]
    }
    return (
        <div className="bar-chart">
            <Bar
                data={data}
                options={{ maintainAspectRatio: false }} />
        </div>
    )
}

export default BarChart
