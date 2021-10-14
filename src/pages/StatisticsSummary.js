import React, { useEffect, useState } from 'react'
import './StatisticsSummary.css'
import PageTitle from '../components/PageTitle'
import axios from 'axios'
import { restUrls } from '../services/constants'
import LineChart from '../components/LineChart'
import BarChart from '../components/BarChart'
import { DataGrid } from '@mui/x-data-grid';
import PieChart from '../components/PieChart'

function StatisticsSummary() {
    const [summaryData, setSummaryData] = useState([]);
    const [arrivalDateData, setArrivalDateData] = useState([]);
    const [emailsSentData, setEmailsSentData] = useState([]);
    const [reservationsData, setReservationsData] = useState([]);
    const [transactionsData, setTransactionsData] = useState([]);
    const [rowsForTableData, setRowsForTableData] = useState([]);
    const [dataSumForPieChart, setDataSumForPieChart] = useState([]);

    //fetch the api data and pass it to component state
    useEffect(() => {
        axios.get(restUrls.dashboardUrl)
            .then(response =>
                setSummaryData(response.data)
            );
    }, [])

    useEffect(() => {
        //get an array of all the arrival dates for line chart
        let arrivalDateArray = summaryData.map(data => {
            return data.arrivalDate
        })
        setArrivalDateData(arrivalDateArray)

        //get an array of all the emails sent for line chart
        let emailsSentArray = summaryData.map(data => {
            return data.emailsSentCount
        })
        setEmailsSentData(emailsSentArray)

        //get an array of all the reservations for line chart
        let reservationsArray = summaryData.map(data => {
            return data.reservationsCount
        })
        setReservationsData(reservationsArray)

        //get an array of all the transactions for line chart
        let transationsArray = summaryData.map(data => {
            return data.transactionsCount
        })
        setTransactionsData(transationsArray)

        //add table rows values
        setRowsForTableData(summaryData)

        // get sum of msgCount prop across all objects in array
        var reservatiosTotal = summaryData.reduce(function (prev, cur) {
            return prev + cur.reservationsCount;
        }, 0);
        // get sum of msgCount prop across all objects in array
        var emailsTotal = summaryData.reduce(function (prev, cur) {
            return prev + cur.emailsSentCount;
        }, 0);// get sum of msgCount prop across all objects in array
        var transactionsTotal = summaryData.reduce(function (prev, cur) {
            return prev + cur.transactionsCount;
        }, 0);

        setDataSumForPieChart([emailsTotal, reservatiosTotal, transactionsTotal])
        console.log('Total Reservations:', reservatiosTotal);
        console.log('Total Emails:', emailsTotal);
        console.log('Total trasactions:', transactionsTotal);
    }, [summaryData])


    //data for table headers
    const columns = [
        // { field: 'id', headerName: 'ID', type: 'number', width: 50 },
        { field: 'arrivalDate', headerName: 'Arrival Date', width: 190 },
        { field: 'emailsSentCount', headerName: 'Emails Sent', type: 'number', width: 150 },
        { field: 'reservationsCount', headerName: 'Reservations', type: 'number', width: 180 },
        { field: 'transactionsCount', headerName: 'Transactions', type: 'number', width: 180 }

    ];

    return (
        <div>
            <PageTitle title="Statistics Summary" />
            <div className="charts">
                <LineChart
                    labelsArray={
                        arrivalDateData.map(date => {
                            var newDate = new Date(date);
                            return `${newDate.getMonth() + 1}/${newDate.getDate()}/${newDate.getFullYear()}`;
                        })
                    }
                    caption="Emails Sent"
                    dataArray={emailsSentData}
                    lineColor="#ffae4a"
                    backgroundColor="#ffae4a"
                    fillLine={false} />
                <LineChart
                    labelsArray={
                        arrivalDateData.map(date => {
                            var newDate = new Date(date);
                            return `${newDate.getMonth() + 1}/${newDate.getDate()}/${newDate.getFullYear()}`;
                        })
                    }
                    caption="Reservations"
                    dataArray={reservationsData}
                    lineColor="#41a6c3"
                    backgroundColor="rgba(65, 166, 195, .5)"
                    fillLine={true} />
                <BarChart
                    labelsArray={
                        arrivalDateData.map(date => {
                            var newDate = new Date(date);
                            return `${newDate.getMonth() + 1}/${newDate.getDate()}/${newDate.getFullYear()}`;
                        })
                    }
                    caption="Transactions"
                    dataArray={transactionsData}
                    lineColor="#034b7c" />
            </div>

            <div className="data-grid">
                <DataGrid
                    rows={rowsForTableData}
                    columns={columns}
                    pageSize={5}
                    rowsPerPageOptions={[5]}
                />
            </div>

            <div className="pie-chart-wrapper">
                <h5>Monthly Data (September)</h5>
                <PieChart
                    labelsArray={['Emails', 'Reservations', 'Transactions']}
                    caption="Results on month of September"
                    dataArray={dataSumForPieChart} />
            </div>
            {/* <table className="flat-table flat-table-1">
                <thead>
                    <tr>
                        <th>Arrival Date</th>
                        <th>Emais Sent</th>
                        <th>Reservations</th>
                        <th>Transactions</th>
                    </tr>
                </thead>
                <tbody>{summaryData &&
                    summaryData.map(summary => (
                        <tr key={summary.id}>
                            <td>{summary.arrivalDate}</td>
                            <td>{summary.emailsSentCount}</td>
                            <td>{summary.reservationsCount}</td>
                            <td>{summary.transactionsCount}</td>
                        </tr>
                    ))
                }
                </tbody>
            </table> */}
        </div>
    )
}

export default StatisticsSummary
