import React from 'react'
import renderer from 'react-test-renderer'
import LineChart from '../components/LineChart'

it("LineChart renders when is receives props", () => {
    const tree = renderer.create(
        <LineChart
            labelsArray={ ['test 1', 'test 2']}
            caption="Test Caption"
            dataArray={['45', '50']}
            lineColor="#41a6c3"
            backgroundColor="rgba(65, 166, 195, .5)"
            fillLine={true}
        />).toJSON();
    expect(tree).toMatchSnapshot();
})