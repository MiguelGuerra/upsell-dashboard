import React from 'react'
import './PageTitle.css'
import { RiDashboard3Line } from "react-icons/ri";
import { GrTransaction } from "react-icons/gr";

function PageTitle(props) {
    return (
        <div className="title">
            <h1>{props.title}</h1>
            <hr />
        </div>
    )
}

export default PageTitle
