import React from 'react'
import renderer from 'react-test-renderer'
import PieChart from '../components/PieChart'

it("PieChart renders when is receives props", () => {
    const tree = renderer.create(
        <PieChart
            labelsArray={['Emails', 'Reservations', 'Transactions']}
            caption="Results on month of September"
            dataArray={['45', '50']}
        />).toJSON();
    expect(tree).toMatchSnapshot();
})