import React from 'react'
import renderer from 'react-test-renderer'
import BarChart from '../components/BarChart'

it("BarChart renders when is receives props", () => {
    const tree = renderer.create(
        <BarChart
            labelsArray={['test 4', 'test 2']}
            caption="Test Caption"
            dataArray={['45', '50']}
            lineColor="#41a6c3"
        />).toJSON();
    expect(tree).toMatchSnapshot();
})