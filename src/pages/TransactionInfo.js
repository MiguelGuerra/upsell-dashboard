import React, { useState, useEffect, useContext } from 'react'
import { useParams } from "react-router-dom";
import PageTitle from '../components/PageTitle'
import { MainContext } from '../contexts/MainContext';

function TransactionInfo() {
    //get global state of selected transaction
    const { selectedTransaction } = useContext(MainContext)

    //get the param :id from the url
    const { id } = useParams();
    //to generate a random user on img src
    const [seed, setSeed] = useState('');

    //for the random avatar
    useEffect(() => {
        setSeed(Math.floor(Math.random() * 5000))
    }, []);

    return (
        <div>
            <PageTitle title={`Transactions Info (Id: ${id})`} />
            <div className="transaction-info">
                <div className="left-panel">
                    <div className="avatar">
                        <img src={`https://avatars.dicebear.com/api/human/${seed}.svg`} alt="random-user" />
                    </div>
                </div>
                <div className="right-panel">
                    <div className="info">
                        <p>Name</p>
                        <p>{selectedTransaction.guest}</p>
                    </div>
                    <div className="info">
                        <p>Guest Id</p>
                        <p>{selectedTransaction.guestId}</p>
                    </div>
                    <div className="info">
                        <p>Items</p>
                        <p>{selectedTransaction.itemsCount}</p>
                    </div>
                    <div className="info">
                        <p>Total</p>
                        <p>{selectedTransaction.totalValue}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TransactionInfo
