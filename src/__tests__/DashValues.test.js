import React from 'react'
import ReactDOM from 'react-dom'
import { render, screen, cleanup } from '@testing-library/react'
import '@testing-library/jest-dom'
import DashValues from '../components/DashValues'


it('renders DashValues without crashing', () => {
    const div = document.createElement("div");
    ReactDOM.render(<DashValues />, div)
})

it('renders DashValues with props', () => {
    const { getByTestId } = render(<DashValues emailsSent="10" reservations="345" transactions="678"/>)
    expect(getByTestId('dash-values')).toHaveTextContent('10')
    expect(getByTestId('dash-values')).toHaveTextContent('345')
    expect(getByTestId('dash-values')).toHaveTextContent('678')
})