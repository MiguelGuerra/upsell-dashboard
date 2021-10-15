import React, { useState } from 'react'
import './DashValues.css'

function DashValues({ emailsSent, reservations, transactions }) {
    return (
        <div className="dash-values-section">
            <div className="dash-value">
                <div>
                    <b>{emailsSent}</b>
                </div>
                <div>Emails</div>
            </div>
            <div className="dash-value">
                <div>
                    <b>{reservations}</b>
                </div>
                <div>Reservations</div>
            </div>
            <div className="dash-value">
                <div>
                    <b>{transactions}</b>
                </div>
                <div>Transactions</div>
            </div>
        </div>
    )
}

export default DashValues
