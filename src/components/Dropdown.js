import React from 'react'
import { FaAngleDown } from "react-icons/fa"
import './Dropdown.css'

function Dropdown({ options, handleValues }) {
    return (
        <div data-testid="dropdown" className="select-wrapper">
            <select
                name="filter"
                onChange={e => handleValues(e.target.value)}>
                {options.map(option => (
                    <option value={option.arrivalDate}>{option.arrivalDate}</option>
                ))}
            </select>
            <div className="select-icon">
                <FaAngleDown />
            </div>
        </div>
    )
}

export default Dropdown
