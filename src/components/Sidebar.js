import React from 'react'
import './Sidebar.css'
import { RiDashboard3Line } from "react-icons/ri";
import { AiOutlineUnorderedList } from "react-icons/ai";
import { FiTool } from "react-icons/fi";
import { NavLink } from "react-router-dom";

function Sidebar() {

    return (
        <aside className="opened">
            <NavLink exact to="/" activeClassName="active">
                <div className="menu-item">
                    <RiDashboard3Line />
                    <p>Statistics Summary</p>
                </div>
            </NavLink>
            <NavLink to="/last-transactions" activeClassName="active">
                <div className="menu-item">
                    <AiOutlineUnorderedList />
                    <p>Last Transactions</p>
                </div>
            </NavLink>
            <NavLink exact to="/configurations" activeClassName="active">
                <div className="menu-item">
                    <FiTool />
                    <p>Configurations</p>
                </div>
            </NavLink>
        </aside>
    )
}

export default Sidebar
