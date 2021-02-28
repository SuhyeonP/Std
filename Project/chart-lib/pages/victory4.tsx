import React from 'react';
import {
    VictoryAxis,
    VictoryBrushContainer,
    VictoryChart,
    VictoryLine,
    VictoryTooltip,
    VictoryVoronoiContainer
} from 'victory';

const Victory4=()=>{
    return (
        <div>
            <VictoryChart
                containerComponent={
                    <VictoryVoronoiContainer voronoiDimension="x"
                                             labels={({ datum }) => `y: ${datum.y}`}
                                             labelComponent={<VictoryTooltip cornerRadius={0} flyoutStyle={{fill: "white"}}/>}
                    />
                }
            >
                <VictoryAxis/>
                <VictoryLine
                    data={[
                        {x: 1, y: 5, l: "one"},
                        {x: 1.5, y: 5, l: "one point five"},
                        {x: 2, y: 4, l: "two"},
                        {x: 3, y: -2, l: "three"}
                    ]}
                    style={{
                        data: { stroke: "tomato", strokeWidth: ({ active }) => active ? 4 : 2},
                        labels: {fill: "tomato"}
                    }}
                />

                <VictoryLine
                    data={[
                        {x: 1, y: -3, l: "red"},
                        {x: 2, y: 5, l: "green"},
                        {x: 3, y: 3, l: "blue"}
                    ]}
                    style={{
                        data: { stroke: "blue", strokeWidth: ({ active }) => active ? 4 : 2},
                        labels: {fill: "blue"}
                    }}
                />

                <VictoryLine
                    data={[
                        {x: 1, y: 5, l: "cat"},
                        {x: 2, y: -4, l: "dog"},
                        {x: 3, y: -2, l: "bird"}
                    ]}
                    style={{
                        data: { stroke: "black", strokeWidth: ({ active }) => active ? 4 : 2},
                        labels: {fill: "black"}
                    }}
                />
            </VictoryChart>
            <VictoryChart
                containerComponent={
                    <VictoryBrushContainer
                        brushDimension="x"
                        brushDomain={{x: [0.1, 0.3]}}
                    />
                }
            >
                <VictoryLine />
            </VictoryChart>
            <p>옮겨서 데이터 볼수있게 만들수는 있을듯!</p>
        </div>
    )
}

export default Victory4;
