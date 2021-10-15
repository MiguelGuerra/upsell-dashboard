import React from 'react'
import './ListItem.css'
import { FaSearchPlus } from "react-icons/fa";

function ListItem({ data, handleListItemClick }) {
    return (
        <div>
            <div
                onClick={handleListItemClick}
                className="list-item">
                <div>
                    <p>{data.guest}</p>
                </div>
                <div>
                    <p>{data.guestId}</p>
                </div>
                <div>
                    <p>{data.itemsCount}</p>
                </div>
                <div>
                    <p>{data.totalValue}</p>
                </div>
                <div className="actions">
                    <FaSearchPlus />
                </div>
            </div>
        </div>
    )
}

export default ListItem
