import React, { useContext } from 'react'
import PageTitle from '../components/PageTitle';
import './Configurations.css'
import { MainContext } from '../contexts/MainContext';

function Configurations() {
    //to change global state of theme colors
    const {
        primaryColor,
        setPrimaryColor,
        secondaryColor,
        setSecondaryColor } = useContext(MainContext)

    const changePrimaryColor = (e) => {
        setPrimaryColor(e.target.value)
        document.documentElement.style.setProperty('--primaryColor', e.target.value);
    }

    const changeSecondaryColor = (e) => {
        setSecondaryColor(e.target.value)
        document.documentElement.style.setProperty('--secondaryColor', e.target.value);
    }

    return (
        <div>
            <PageTitle title="Configurations" />
            <div className="option">
                <div>
                    <label htmlFor="colr-picker">Choose primary color:</label>
                </div>
                <input
                    value={primaryColor}
                    onChange={(e) => changePrimaryColor(e)}
                    name="Color Picker"
                    type="color" />
            </div>
            <div className="option">
                <div>
                    <label htmlFor="colr-picker">Choose secondary color:</label>
                </div>
                <input
                    value={secondaryColor}
                    onChange={(e) => changeSecondaryColor(e)}
                    name="Color Picker"
                    type="color" />
            </div>
        </div>
    )
}

export default Configurations
