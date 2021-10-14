import React from 'react'
import { Link } from 'react-router-dom'
import './HamburguerMenu.css'

function HamburguerMenu() {
    return (
        <div className="mobile-header">
            <div className="menu">
                <nav className="burger-menu">
                    <input className="menu-check" type="checkbox" name="menu-check" value="" id="menu-check" />
                    <label className="menu-open" htmlFor="menu-check">
                        <span className="burger1"></span>
                        <span className="burger2"></span>
                        <span className="burger3"></span>
                    </label>
                    <ul className="menu-options">
                        <li>
                            <Link to="/">
                                Statistics Summary
                            </Link>
                        </li>
                        <li>
                            <Link to="/last-transactions">
                                Last Transactions
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default HamburguerMenu
