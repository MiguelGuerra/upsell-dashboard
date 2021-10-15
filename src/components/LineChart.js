import React from 'react'
import { Line } from 'react-chartjs-2'

function LineChart({
    labelsArray,
    caption,
    dataArray,
    lineColor,
    backgroundColor,
    fillLine }) {
    const data = {
        labels: labelsArray,
        datasets: [
            {
                label: caption,
                data: dataArray,
                borderColor: lineColor,
                backgroundColor: backgroundColor,
                pointBackgroundColor: lineColor,
                pointBorderColor: lineColor,
                fill: fillLine
            }
        ]
    }

    return (
        <div data-testid="line-chart" className="line-chart">
            <Line data={data} />
        </div>
    )
}

export default LineChart
