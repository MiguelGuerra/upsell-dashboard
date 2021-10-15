import React from 'react'
import ReactDOM from 'react-dom'
import { render, screen, cleanup } from '@testing-library/react'
import '@testing-library/jest-dom'
import PageTitle from '../components/PageTitle'

it('renders PageTitle without crashing', () => {
    const div = document.createElement("div");
    ReactDOM.render(<PageTitle />, div)
})

it('renders PageTitle with props', () => {
    const { getByTestId } = render(<PageTitle title="Title test" />)
    expect(getByTestId('page-title')).toHaveTextContent('Title test')
})