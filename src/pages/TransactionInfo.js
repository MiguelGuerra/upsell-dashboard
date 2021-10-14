import React, { useState, useEffect, useContext } from 'react'
import './TransactionInfo.css'
import { Link, useParams, useHistory  } from "react-router-dom";
import PageTitle from '../components/PageTitle'
import { MainContext } from '../contexts/MainContext';
import { IoArrowBack } from "react-icons/io5";

function TransactionInfo() {
    //get global state of selected transaction
    const { selectedTransaction } = useContext(MainContext)

    //get the param :id from the url
    const { id } = useParams();
    //to generate a random user on img src
    const [seed, setSeed] = useState('');
    let history = useHistory();

    //for the random avatar
    useEffect(() => {
        setSeed(Math.floor(Math.random() * 5000))

        //protect route, only allow user if he previously selected a transaction
        if(selectedTransaction.length === 0) {
            history.push('/last-transactions')
        }
    }, []);

    return (
        <div>
            <PageTitle title={`Details from ${selectedTransaction.guest} Transaction`} />
            <div className="transaction-info">
                <div className="back">
                    <Link to="/last-transactions">
                        <IoArrowBack />
                        <span>Back</span>
                    </Link>
                </div>
                <div className="left">
                    <div className="avatar">
                        <img src={`https://avatars.dicebear.com/api/human/${seed}.svg`} alt="random-user" />
                    </div>
                </div>
                <div className="right">
                    <div className="info">
                        <p><b>Name:</b> {selectedTransaction.guest}</p>
                    </div>
                    <div className="info">
                        <p><b>Guest Id:</b> {selectedTransaction.guestId}</p>
                    </div>
                    <div className="info">
                        <p><b>Items:</b> {selectedTransaction.itemsCount}</p>
                    </div>
                    <div className="info">
                        <p><b>Total:</b> {selectedTransaction.totalValue}</p>
                        <p></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TransactionInfo
