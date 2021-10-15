import React from 'react'
import ReactDOM from 'react-dom'
import { render, fireEvent, getAllByRole } from '@testing-library/react'
import Dropdown from '../components/Dropdown'

it('Dropdown renders without crashing', () => {
    const div = document.createElement("div");
    ReactDOM.render(<Dropdown options={['test 1', 'test 2']} />, div)
})

it('Dropdown can change the value', () => {
    const { getByTestId } = render(<Dropdown options={['test 1', 'test 2']} />);
    const options=['test 1', 'test 2']; 
    const dropdown = getByTestId('dropdown');

    const display = dropdown.children[0].children;

    expect(display.textContent).toBe(options[0].text);

    fireEvent.click(dropdown);
    const dropdownOptions = getAllByRole(dropdown, 'option');

    fireEvent.click(dropdownOptions[1]);
    expect(display.textContent).toBe(options[1].text);
});