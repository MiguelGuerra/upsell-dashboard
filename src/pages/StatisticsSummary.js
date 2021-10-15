import React, { useEffect, useState, useContext } from 'react'
import './StatisticsSummary.css'
import PageTitle from '../components/PageTitle'
import axios from 'axios'
import { restUrls } from '../services/constants'
import LineChart from '../components/LineChart'
import BarChart from '../components/BarChart'
import { DataGrid } from '@mui/x-data-grid';
import PieChart from '../components/PieChart'
import { MainContext } from '../contexts/MainContext'
import DashValues from '../components/DashValues'
import Dropdown from '../components/Dropdown'

function StatisticsSummary() {
    //to change global state of selected transaction
    const { setIsLoading } = useContext(MainContext)

    const [summaryData, setSummaryData] = useState([]);
    const [arrivalDateData, setArrivalDateData] = useState([]);
    const [emailsSentData, setEmailsSentData] = useState([]);
    const [reservationsData, setReservationsData] = useState([]);
    const [transactionsData, setTransactionsData] = useState([]);
    const [rowsForTableData, setRowsForTableData] = useState([]);
    const [dataSumForPieChart, setDataSumForPieChart] = useState([]);

    //state for dash values
    const [dateSelected, setDateSelected] = useState(0);
    const [dateEmailsSent, setDateEmailsSent] = useState(0);
    const [dateReservationsSent, setDateReservationsSent] = useState(0);
    const [dateTransactionsSent, setDateTransactionsSent] = useState(0);

    const handleSearchDate = (date) => {
        var selectedData = summaryData.find(data => {
            return data.arrivalDate === date;
        })
        setDateEmailsSent(selectedData.emailsSentCount)
        setDateReservationsSent(selectedData.reservationsCount)
        setDateTransactionsSent(selectedData.transactionsCount)
    }

    //fetch the api data and pass it to component state
    useEffect(() => {
        setIsLoading(true)
        axios.get(restUrls.dashboardUrl)
            .then(response => {
                setSummaryData(response.data)
                setIsLoading(false)
                //has a default value aways show first arrival date values on dash info
                setDateSelected(response.data[0].arrivalDate)
                setDateEmailsSent(response.data[0].emailsSentCount)
                setDateReservationsSent(response.data[0].reservationsCount)
                setDateTransactionsSent(response.data[0].transactionsCount)
            })
            .catch((error) => {
                alert("It wasn`t possible to fetch data");
                setIsLoading(false)
            });
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
    }, [summaryData])


    //data for table headers
    const columns = [
        { field: 'arrivalDate', headerName: 'Arrival Date', width: 168 },
        { field: 'emailsSentCount', headerName: 'Emails', type: 'number', width: 145 },
        { field: 'reservationsCount', headerName: 'Reservations', type: 'number', width: 168 },
        { field: 'transactionsCount', headerName: 'Transactions', type: 'number', width: 168 }

    ];

    return (
        <div>
            <PageTitle title="Statistics Summary" />
            <div>
                <div className="filter-data">
                    <Dropdown
                        options={summaryData}
                        handleValues={handleSearchDate}
                    />
                    <DashValues
                        emailsSent={dateEmailsSent}
                        reservations={dateReservationsSent}
                        transactions={dateTransactionsSent}
                    />
                </div>
            </div>
            <div className="charts">
                <div className="line-charts">
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
                </div>
                <BarChart
                    labelsArray={
                        arrivalDateData.map(date => {
                            var newDate = new Date(date);
                            return `${newDate.getMonth() + 1}/${newDate.getDate()}/${newDate.getFullYear()}`;
                        })
                    }
                    caption="Transactions"
                    dataArray={transactionsData}
                    lineColor="#fb928E" />
            </div>
            <div className="data-grid">
                <DataGrid
                    rows={rowsForTableData}
                    columns={columns}
                    pageSize={5}
                />
            </div>
            <div className="pie-chart-wrapper">
                <h5>Monthly Data (September)</h5>
                <PieChart
                    labelsArray={['Emails', 'Reservations', 'Transactions']}
                    caption="Results on month of September"
                    dataArray={dataSumForPieChart} />
            </div>
        </div>
    )
}

export default StatisticsSummary
