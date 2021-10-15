import React, {  useContext } from 'react'
import './Sidebar.css'
import { IoIosArrowBack } from "react-icons/io";
import { RiDashboard3Line } from "react-icons/ri";
import { AiOutlineUnorderedList } from "react-icons/ai";
import { FiTool } from "react-icons/fi";
import { NavLink } from "react-router-dom";
import { MainContext } from '../contexts/MainContext';

function Sidebar() {
    //side menu starts opened
    const { menuOpen, setMenuOpen } = useContext(MainContext)

    const handleMenuOpen = () => {
        setMenuOpen(!menuOpen)
    }

    return (
        <aside className={menuOpen ? 'opened' : 'closed'}>
            {/* <div
                className={`arrow ${menuOpen ? '' : 'closed'}`}
                onClick={() => handleMenuOpen()}>
                <IoIosArrowBack />
            </div> */}
            <NavLink exact to="/" activeClassName="active">
                <div className="menu-item">
                    <RiDashboard3Line />
                    <p>Statistics Summary</p>
                </div>
            </NavLink>
            <NavLink exact to="/last-transactions" activeClassName="active">
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
