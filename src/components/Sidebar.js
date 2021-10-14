import React, { useState, useContext } from 'react'
import './Sidebar.css'
import { IoIosArrowBack } from "react-icons/io";
import { RiDashboard3Line } from "react-icons/ri";
import { GrTransaction } from "react-icons/gr";
import { Link } from "react-router-dom";
import { MainContext } from '../contexts/MainContext';

function Sidebar() {
    //side menu starts opened
    // const [menuOpen, setMenuOpen] = useState(true)
    const { menuOpen, setMenuOpen } = useContext(MainContext)

    const handleMenuOpen = () => {
        setMenuOpen(!menuOpen)
    }

    return (
        <aside className={menuOpen ? 'opened' : 'closed'}>
            <div
                className={`arrow ${menuOpen ? '' : 'closed'}`}
                onClick={() => handleMenuOpen()}>
                <IoIosArrowBack />
            </div>
            <Link to="/">
                <div className="menu-item">
                    <RiDashboard3Line />
                    <p>Statistics Summary</p>
                </div>
            </Link>
            <Link to="/last-transactions">
                <div className="menu-item">
                    <GrTransaction />
                    <p>Last Transactions</p>
                </div>
            </Link>
        </aside>
    )
}

export default Sidebar
