import React, { useEffect, useState, useContext } from 'react'
import { Link } from "react-router-dom";
import './LastTransactions.css'
import PageTitle from '../components/PageTitle'
import axios from 'axios'
import { restUrls } from '../services/constants'
import { FaSearchPlus } from "react-icons/fa"
import ListItem from '../components/ListItem'
import { MainContext } from '../contexts/MainContext'

function LastTransactions() {
    //to change global state of selected transaction
    const { setSelectedTransaction, setIsLoading } = useContext(MainContext)

    const [transactionsData, setTransactionsData] = useState([]);

    //fetch the api data and pass it to component state
    useEffect(() => {
        setIsLoading(true)
        axios.get(restUrls.transactionsUrl)
            .then((response) => {
                setTransactionsData(response.data);
                setIsLoading(false)
            });

    }, [])

    const handleTransactionClick = (selectedTransaction) => {
        // console.log('---> ', selectedTransaction)
        setSelectedTransaction(selectedTransaction)
    }

    return (
        <div>
            <PageTitle title="Last Transactions" />
            <div className="transactions-list">
                <div className="labels">
                    <div>
                        <p>Name</p>
                    </div>
                    <div>
                        <p>Id</p>
                    </div>
                    <div>
                        <p>Transactions</p>
                    </div>
                    <div>
                        <p>Total</p>
                    </div>
                    <div>
                        <p>Actions</p>
                    </div>
                </div>
                {transactionsData.map(transaction => (
                    <Link to={`/last-transactions/${transaction.id}`} key={transaction.id}>
                        <ListItem 
                            handleListItemClick={() => handleTransactionClick(transaction)}
                            data={transaction}
                        />
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default LastTransactions
